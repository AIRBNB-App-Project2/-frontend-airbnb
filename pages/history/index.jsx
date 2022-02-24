import DateRangePicker from "../../components/DateRangePicker";
import { HiChevronLeft } from "react-icons/hi";
import "react-datepicker/dist/react-datepicker.css";
import Navbar from '../../components/navbar'


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
  return (
    <>
      <Navbar />
      <div className="container mx-8 mb-16">
        <div className="flex items-center mt-16">
          <button className="md:text-4xl sm:text-3xl hover:bg-slate-100">
            <HiChevronLeft />
          </button>
          <h1 className="md:text-4xl sm:text-3xl font-normal ml-3">
            Perjalanan Selesai
          </h1>
        </div>

        <div className="flex flex-wrap justify-center">
          <div className="lg:w-7/12 w-full">
            <div className="md:flex items-center mt-6">
              <img src="https://source.unsplash.com/random/300x200" />
              <div className="md:ml-6">
                <h1 className="text-4xl sm:mb-4">{data.villaName}</h1>
                <div className="detail">{`${data.category}, `}</div>
              </div>
            </div>

            <div className="text-xl mt-6 w-8/12">
              <DateRangePicker />
            </div>

            <h4 className="text-xl font-semibold mt-3">
              Rp. {data.price} x {data.nights} malam
            </h4>
            <h4 className="text-xl font-semibold mt-6">
              Total: Rp. {data.price * data.nights}
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}
