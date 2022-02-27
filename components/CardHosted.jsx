import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import villas from "../img/villa.jpg";
import { useRouter } from 'next/router';

function CardHosted(props) {

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
                <div className="max-w-md md:max-w-2xl py-2" >
                    <div className="bg-white rounded-md drop-shadow-md md:flex">
                        <div className='px-3 flex items-center'>
                            <Image className='rounded-md'
                                src={villas}
                                alt="villa"
                                width="265px"
                                height="230px"
                            />
                            <div className=' py-1 px-2 font-semibold text-lg text-elemen1 absolute rounded-sm bottom-0 bg-elemen2'><h4 className='text-center italic'>OPEN</h4></div>
                        </div>
                        <div className='px-2 py-2'>
                            <div>
                                <p className="font-bold text-xl md:text-2xl">{nameRoom}</p>
                                <p className="text-gray-700 md:text-md">6-8 tamu . Seluruh rumah . 5 kamar . 3 kamar mandi . Peralatan mandi . Kolam renang pribadi . Laundry. Wifi . Dapur . Parkir gratis</p>
                            </div>
                            <div className="">
                                <div className="sm:flex sm:justify-between sm:items-center">
                                    <div>
                                        <div className="text-lg text-gray-700"><span className="text-gray-900 font-bold">Rp {numberWithCommas(`${price}`)} / malam</span></div>
                                    </div>
                                    <div className="mt-3 pr-5 text-gray-600 text-sm md:text-base">
                                        <button className='mx-3 text-primary hover:text-orange-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg></button>
                                        <button className='mx-3 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link>
    )
}

export default CardHosted