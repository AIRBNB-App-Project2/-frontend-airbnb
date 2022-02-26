import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import villas from "../img/villa.jpg";
import { useRouter } from 'next/router';

function CardCategory(props) {

  const [nameRoom, setNameRoom] = useState('')
  const [price, setPrice] = useState('')
  const [id, setId] = useState('')

  const router = useRouter();

  useEffect(() => {
    setNameRoom(props.nameRooms)
    setPrice(props.prices)
    setId(props.id);

  }, [props])

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  return (
    <Link href={`/category/detail/${id}`}>
      <a>
        <div className="max-w-md md:max-w-2xl py-4" >
          <div className="bg-white shadow-xl md:flex">
            <div className='p-2 flex items-center'>
              <Image
                src={villas}
                alt="villa"
                width="265px"
                height="205px"
              />
            </div>
            <div className='pl-2 py-2'>
              <div>
                <p className="font-bold text-xl md:text-2xl">{nameRoom}</p>
                <p className="text-gray-700 md:text-lg">6-8 tamu . Seluruh rumah . 5 kamar . 3 kamar mandi . Peralatan mandi . Kolam renang pribadi . Laundry. Wifi . Dapur . Parkir gratis</p>
              </div>
              <div className="">
                <div className="sm:flex sm:justify-between sm:items-center">
                  <div>
                    <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold">Rp {numberWithCommas(`${price}`)} / malam</span></div>
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