import React from 'react'
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import villa from "../img/villa.jpg";

function CardCategory() {
  return (
    <Link href="/category/detail/id">
      <a>
        <div className="max-w-md md:max-w-2xl px-2 py-4">
          <div className="bg-white shadow-xl overflow-hidden md:flex">
            <div className='p-2'>
              <Image
                src={villa}
                alt="villa"
                width="265px"
                height="205px"
              />
            </div>
            <div className='pl-4 pt-2'>
              <div>
                <p className="font-bold text-xl md:text-2xl">Nama Villa</p>
                <p className="text-gray-700 md:text-lg">4-6 tamu . Seluruh rumah . 4 kamar . 3 kamar mandiWifi . Dapur . Parkir gratis</p>
              </div>
                <div className="">
                  <div className="sm:flex sm:justify-between sm:items-center">
                    <div>
                      <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold">Rp. 4.000.000 / malam</span></div>
                    </div>
                    <div className="mt-3 pr-5 text-gray-600 text-sm md:text-base"><FaHeart /></div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardCategory