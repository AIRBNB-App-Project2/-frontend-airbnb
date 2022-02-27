import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import DateRangePicker from "../../../components/DateRangePicker";
import { numberWithCommas } from "../../../utils/numberWithCommas";
import villa from "../../../img/villa.jpg";
import p1 from "../../../img/p1.jpg";
import p2 from "../../../img/p2.jpg";
import p3 from "../../../img/p3.jpg";
import p4 from "../../../img/p4.jpg";
import Navbar from '../../../components/navbar'



export default function DetailItem(props) {


    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [owner, setOwner] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    // const [image, setImage] = useState([]);

    const router = useRouter()
    const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

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
        }
    }, [props]);

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
                        <h1 className="text-4xl">{name}</h1>
                        <p className="text-xl font-light mt-2">{address}</p>
                        <p className="text-xl font-light mt-1">{description}</p>
                        <p className="text-xl mt-2">{owner}</p>
                    </div>

                    <div className="relative">
                        <div className="flex h-max">
                            <div className="px-5 py-2 h-16 bg-white drop-shadow-md rounded-md">
                                <div className="flex py-3">
                                    <button className='mx-3 text-primary hover:text-orange-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                    </svg></button>
                                    <button onClick={() => { }} className='mx-3 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
                            <li className="px-5 h-28 flex overflow-hidden" >
                                <div className=" ">
                                    <Image src={p1} alt="img-villa" width={250} height={100} className="w-full h-full object-center object-cover" />
                                </div>
                                <div className="ml-5 mt-3 items-center text-gray-600">
                                    <h2 className="text-xl font-medium">Title Villa</h2>
                                    <h2 className="text-sm font-medium">Date Reserve</h2>
                                    <h2 className="text-sm font-medium">Price Payment</h2>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </div>
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