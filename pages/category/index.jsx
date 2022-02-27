import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import CardCategory from '../../components/CardCategory';
import Image from 'next/image';
// import Map from '../../components/Map';
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import axios from "axios";
import dynamic from 'next/dynamic';
// import OpenMap from '../../components/OpenMap';

export const Map = dynamic(import("../../components/Map"), { ssr: false });
// const OpenMap = dynamic( import("../../components/OpenMap"), {ssr: false});

export default function Category(props) {

  const room = props.rooms.data;
  const router = useRouter();
  const categories = router.query.category;
  const cities = router.query.city;
  // categories.charAt(0).toUpperCase() + categories.slice(1);
  // categories.replace(/^./, categories[0].toUpperCase());

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex justify-start clearfix">
        <div className='flex flex-col w-2/4'>
          <div className="inline-flex">
            <button onClick={() => { router.push('/') }} className="py-3 px-3 mx-3 text-primary hover:text-elemen1"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8S" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg></button>
            <h1 className='text-3xl py-3 font-semibold'>{categories ? `${categories}` : `${cities}`}</h1>
          </div>
          <div className='min-h-screen mx-5'>
            {room ? room.map((el) => (
              <CardCategory
                key={el.room_uid}
                name={el.name}
                description={el.description}
                price={el.price}
                id={el.room_uid}
              />
            )) : (
              <div className='min-h-screen max-w-xl block'>
                <div className='my-24 text-elemen1'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h1 className='text-xl font-bold text-center'>Maaf anda belum memiliki Villa untuk disewakan</h1>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='w-2/4'>
          <div className='fixed hidden xl:inline-flex xl:max-w-[624px] xl:h-full'>
            <Map />
          </div>
        </div>
        <style jsx>{`
        .clearfix:after {content:""; display:table; clear:both;}
        `}</style>
      </div>
    </>
  )
}

export async function getServerSideProps(router) {
  const page = router.query.category
  const city = router.query.city


  const res = await axios.get(`http://18.140.1.124:8081/room?city=${city}&category=${page}&length=100`);

  const rooms = await res.data;
  return {
    props: {
      rooms,
    }
  }
}