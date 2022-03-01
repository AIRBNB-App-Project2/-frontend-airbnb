import React, { useEffect, useState, Fragment } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
// import DateRangePicker from "../../../components/DateRangePicker";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import villa from "../../../img/villa.jpg";
import p1 from "../../../img/p1.jpg";
import p2 from "../../../img/p2.jpg";
import p3 from "../../../img/p3.jpg";
import p4 from "../../../img/p4.jpg";
import Navbar from '../../../components/navbar'
import { Dialog, Transition } from '@headlessui/react'
import Swal from 'sweetalert2'



export default function DetailItem(props) {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState([]);
    const [idRoom, setIdRoom] = useState('')


    const router = useRouter()
    const { id } = router.query
    const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal(id) {
        setIsOpen(true)
        setIdRoom(id)
    }

    useEffect(() => {
        if (!getToken) {
            router.push('/')
        }
        const findRoom = props.rooms.data
        if (findRoom) {
            setName(findRoom.name);
            setAddress(findRoom.address);
            setOwner(findRoom.owner_room);
            setPrice(findRoom.price);
            setDescription(findRoom.description);
            // setImage(findRoom.Image.url);
            // console.log(findRoom.Image);
        }
    }, [props]);

    function handleDelete() {
        axios
            .delete(`http://18.140.1.124:8081/room/${idRoom}`, {
                headers: {
                    Authorization: "Bearer " + getToken,
                },
            })
            .then((response) => {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Anda berhasil menghapus data villa ',
                    showConfirmButton: false,
                    timer: 1500
                })
                setIsOpen(false)
                router.push('/hosted')
            })
            .catch((error) => console.log("error"));

    }

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-10">
                <div className="inline-flex my-3">

                    <button onClick={() => { router.push('/hosted') }} className="py-3 px-3 mx-3 text-primary hover:text-elemen1"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8S" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg></button>
                    <h1 className="text-4xl font-bold items-center py-3">Detail {name}</h1>
                </div>
                <div className="flex justify-center h-[500px]">
                    <div className="flex w-2/4 pr-2">
                        <Image src={villa} alt="villa" width="619px" height="500px" className="rounded-l-xl" />
                    </div>
                    <div className="flex w-1/4 pr-1 flex-col justify-between">
                        <Image src={p1} alt="p1" width="295px" height="246px" />
                        <Image src={p3} alt="p2" width="295px" height="246px" />
                    </div>
                    <div className="flex w-1/4 pl-1 flex-col justify-between">
                        <Image src={p2} alt="p3" width="295px" height="246px" className="rounded-tr-xl" />
                        <Image src={p4} alt="p4" width="295px" height="246px" className="rounded-br-xl" />
                    </div>
                </div>

                <div className="flex justify-between mt-10">
                    <div className="w-2/4">
                        <h1 className="text-4xl font-semibold tracking-wide">{name}<span className="text-xl mx-5 text-gray-700">Tuan Rumah: {owner}</span></h1>
                        <h1 className="text-2xl mt-3 text-gray-500 font-medium leading-8">Rp {numberWithCommas(price)} / malam</h1>
                        <p className="text-xl font-light mt-2 text-gray-500 leading-loose">{address}</p>
                        <p className="text-xl font-light mt-1 text-gray-500 leading-loose">{description}</p>
                    </div>
                    {/* Area Action */}
                    <div className="relative">
                        <div className="flex h-max">
                            <div className="px-5 py-2 h-16 bg-white drop-shadow-md rounded-md">
                                <div className="flex py-3">
                                    <button className='mx-3 text-primary hover:text-orange-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg></button>
                                    <button onClick={() => { openModal(id) }} className='mx-3 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                    </svg></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="max-w-full py-10 my-10 bg-slate-100">
                <div className="px-10">
                    <h1 className="text-2xl text-gray-700 font-semibold">Riwayat Penyewaan </h1>
                    <div className="mt-5 py-5 rounded-md bg-slate-50 ">
                        <ul className="">
                            <li className="px-5 h-32 flex" >
                                <div className="min-h-80 aspect-w-1 aspect-h-1  overflow-hidden ">
                                    <Image src={p1} alt="img-villa" width={150} height={150} className="w-full h-full object-cover" />
                                </div>
                                <div className="ml-5 mt-3 items-center text-gray-600">
                                    <h2 className="text-xl font-semibold">Title Villa</h2>
                                    <p className="text-md font-base leading-6">Date Reserve</p>
                                    <p className="text-md font-base leading-6">Price Payment</p>
                                </div>
                            </li>
                        </ul>
                    </div>
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
                                    Anda Yakin Ingin Menghapus?
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">
                                        Jika anda menghapus sekarang, data akan hilang secara permanent
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-rose-900 bg-rose-100 border border-transparent rounded-md hover:bg-rose-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-rose-500"
                                        onClick={handleDelete}
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


export async function getServerSideProps(router) {
    const { id } = router.query

    const res = await axios.get(`http://18.140.1.124:8081/room/${id}`);
    const rooms = await res.data;
    return {
        props: {
            rooms,
        }
    }
}