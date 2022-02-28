import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import villas from "../img/villa.jpg";
import { useRouter } from 'next/router';
import Swal from 'sweetalert2'
import axios from 'axios';
import { Dialog, Transition, Fragment } from '@headlessui/react'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function CardHosted(props) {

    const [id, setId] = useState('')
    const [nameRoom, setNameRoom] = useState('')
    const [price, setPrice] = useState('')
    const [desc, setDesc] = useState('')
    const [status, setStatus] = useState('')

    const [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    const router = useRouter();

    useEffect(() => {
        setId(props.id);
        setNameRoom(props.nameRooms)
        setPrice(props.prices)
        setDesc(props.descs)
        setStatus(props.status)

    }, [props])


    const numberWithCommas = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }

    return (
        <Link href={`/hosted/detail/${id}`}>
            <a>
                <div className="max-w-md md:max-w-2xl py-2" >
                    <div className="bg-white rounded-md drop-shadow-md md:flex">
                        <div className='px-3 flex items-center'>
                            <div className={classNames(status === 'close' ? 'bg-rose-500/90' : '', `py-1 px-2 font-semibold right-0 top-0 text-lg text-white absolute rounded-sm bg-primary/80 shadow-sm`)}><h4 className=' text-center italic'>{status}</h4></div>
                        </div>
                        <div className='px-2 py-2'>
                            <div className='my-2'>
                                <p className="font-bold text-xl md:text-2xl">{nameRoom}</p>
                                <p className="text-gray-700 md:text-md">{desc}</p>
                            </div>
                            <div className="">
                                <div className="sm:flex sm:justify-between sm:items-center">
                                    <div>
                                        <div className="text-lg text-gray-700"><span className="text-elemen1 font-bold">Rp {numberWithCommas(`${price}`)} / malam</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </Link >
    )
}

export default CardHosted