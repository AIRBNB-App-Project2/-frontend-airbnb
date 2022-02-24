import React from "react";
import Image from "next/image";
import Link from "next/link";
import DateRangePicker from "../../../components/DateRangePicker";
import villa from "../../../img/villa.jpg";
import p1 from "../../../img/p1.jpg";
import p2 from "../../../img/p2.jpg";
import p3 from "../../../img/p3.jpg";
import p4 from "../../../img/p4.jpg";
import Navbar from '../../../components/navbar'

export default function DetailItem() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-10">
        <div className="flex">
          <div className="w-2/4 pr-2 mb-10">
            <Image
              src={villa}
              alt="villa"
              width="619px"
              height="489px"
              className="rounded-l-xl"
            />
          </div>
          <div className="w-1/4 pr-0.5 flex-col justify-between">
            <Image src={p1} alt="p1" width="295px" height="231px" />
            <Image src={p3} alt="p2" width="295px" height="231px" />
          </div>
          <div className="w-1/4 pl-0.5 flex-col justify-between">
            <Image
              src={p2}
              alt="p3"
              width="295px"
              height="231px"
              className="rounded-tr-xl"
            />
            <Image
              src={p4}
              alt="p4"
              width="295px"
              height="231px"
              className="rounded-br-xl"
            />
          </div>
        </div>

        <div className="flex justify-between">
          <div className="w-2/4">
            <h1 className="text-4xl">Nama Villa</h1>
            <p className="text-xl font-light mt-2">
              Gg. Kresna No.8, Canggu, Kec. Kuta Utara, Kabupaten Badung, Bali
              80361
            </p>
            <p className="text-xl font-light mt-1">
              4-6 tamu . Seluruh rumah . 4 tempat tidur . 3 kamar mandi Wifi .
              Dapur . Parkir gratis
            </p>
            <p className="text-xl mt-2">Nama Pemilik Villa</p>
          </div>

          <div className="flex flex-col w-max">
            <div className="flex justify-end h-max">
              <div className="h-auto p-5 bg-white shadow-xl">
                <div className="flex">
                  <h4 className="font-bold flex  max-w-full">
                    Rp. 4.000.000 / malam
                  </h4>
                </div>
                <div className="flex h-16 mt-2">
                  <div className="flex w-2/4">
                    <DateRangePicker />
                  </div>
                </div>
                <div className="flex">
                  <Link href="/">
                    <a className="w-full">
                      <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full mt-1">
                        Pesan
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>

            <div className="flex mt-5 max-w-full bg-white shadow-xl h-auto p-5">
              <div className="flex flex-col divide-y divide-slate-700 w-72">
                <h1 className="font-bold">Rp. 4.000.000 x 2 malam</h1>
                <h1 className="font-bold"> Total : Rp. 8.000.000</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
