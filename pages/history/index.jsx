// import DateRangePicker from "../../components/DateRangePicker";
import React, { useEffect, useState, Fragment } from "react";
import { HiChevronLeft } from "react-icons/hi";
import { Dialog, Transition } from '@headlessui/react'
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { useRouter } from "next/router";
import { masa } from 'masa';
import Navbar from '../../components/navbar'
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import allStore from '../../store/actions';



export default function Index() {
  const router = useRouter()
  const listBooked = useSelector(({ listUser }) => listUser)
  const [idBooking, setIdBooking] = useState('')

  const dispatch = useDispatch()

  let [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal(id) {
    setIsOpen(true)
    setIdBooking(id)
    console.log(id);
  }

  useEffect(() => {
    dispatch(allStore.fetchUser())

  }, [dispatch])


  function handleCancelBooked() {
    const body = { status: 'cancel' }
    const getToken = localStorage.getItem('token')
    axios.put(`http://18.140.1.124:8081/booking/${idBooking}`, body, {
      headers: { Authorization: `Bearer ${getToken}` }
    })
      .then(({ data }) => {
        console.log(data.data);
      })
      .catch(err => {
        console.log(err.response);
      })
  }
  return (
    <>
      <Navbar />
      <div className="mx-8 my-10 min-h-screen">
        <div className="flex items-center mt-16">
          <button className="md:text-4xl sm:text-3xl text-primary hover:text-elemen1" onClick={() => { router.push('/') }}>
            <HiChevronLeft />
          </button>
          <h1 className="md:text-4xl sm:text-3xl font-normal ml-3">
            Perjalanan Selesai
          </h1>
        </div>

        <div className="flex flex-wrap px-3 my-5">
          {listBooked.bookings ? listBooked.bookings.map(el => (
            <div key={el.booking_uid} className=" w-full my-3 rounded-md bg-slate-100">
              <div className="flex flex-row px-3 py-6 relative">
                <div className="max-w-7xl">
                  <h1 className="text-xl ">{el.name}</h1>
                  <h6 className="detail text-gray-600 text-ellipsis my-3 w-80 leading-5">{el.description}</h6>
                  <p className="text-lg font-semibold text-right text-elemen1">Status {el.status}</p>
                </div>

                <div className="mx-auto mt-10">
                  {/* check in */}
                  <p className="flex text-md items-center text-primary font-semibold leading-8"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> {masa(el.start_date).format('dddd, D MMMM YYYY')}</p>
                  {/* check out */}
                  <p className="flex items-center text-rose-400 text-md font-semibold "><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg> {masa(el.end_date).format('dddd, D MMMM YYYY')}</p>
                  <h4 h4 className="text-lg font-semibold text-gray-700 mt-2 leading-8" >
                  </h4>
                  <h4 className="text-xl font-semibold leading-7 text-gray-800">
                    Total: Rp{numberWithCommas(el.price_total)}
                  </h4>
                </div>
                <div className="absolute right-10">
                  <button onClick={() => { openModal(el.booking_uid) }} className="px-3 py-3 rounded-md bg-rose-400 text-lg text-white hover:bg-rose-500">Cancel</button>
                </div>
              </div>
            </div>
          )) : (<div className='min-h-screen max-w-xl mx-auto'>
            <div className='my-24 text-elemen1'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h1 className='text-xl font-bold text-center'>Maaf anda belum memiliki penyewa villa apapun</h1>
            </div>
          </div>)}
        </div>
      </div>

      {/* Modal Delete */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Anda Yakin Ingin Cancel?
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Jika anda cancel sekarang, Anda akan menggagalkan liburan anda
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-rose-900 bg-rose-100 border border-transparent rounded-md hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
                    onClick={handleCancelBooked}
                  >
                    Hapus
                  </button>
                  <button
                    type="button"
                    className="inline-flex justify-center mx-3 px-4 py-2 text-sm font-medium text-gray-900 bg-gray-100 border border-transparent rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
