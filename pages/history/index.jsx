// import DateRangePicker from "../../components/DateRangePicker";
import { HiChevronLeft } from "react-icons/hi";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../components/navbar'
import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils/numberWithCommas";
import { useRouter } from "next/router";
import { masa } from 'masa';



export default function Index() {
  const data = {
    villaName: "Villa Premium A3",
    category: [
      "4-6 tamu",
      "Seluruh rumah",
      "4 kamar",
      "3 kamar mandi",
      "Wifi",
      "Dapur",
      "Parkir gratis",
    ],
    price: 4000000,
    nights: 2,
  };

  const router = useRouter()
  const listBooked = useSelector(({ listUser }) => listUser)
  console.log(listBooked);
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

        <div className="flex flex-wrap  px-3 my-5">
          {listBooked.bookings ? listBooked.bookings.map(el => (
            <div key={el.booking_uid} className=" w-full my-3 rounded-md bg-slate-100">
              <div className="flex flex-row px-3  py-6 relative">
                <div className="basis-1/3">
                  <h1 className="text-xl ">{el.name}</h1>
                  <h6 className="detail text-gray-600 text-ellipsis my-3 w-80 leading-5">{el.description}</h6>
                </div>

                <div className="mx-6 mt-10">
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
                  <button className="px-3 py-3 rounded-md bg-rose-400 text-lg text-white hover:bg-rose-500">Cancel</button>
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
    </>
  );
}
