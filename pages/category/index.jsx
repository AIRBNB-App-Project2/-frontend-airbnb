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

export const Map = dynamic( import("../../components/Map"), {ssr: false});
// const OpenMap = dynamic( import("../../components/OpenMap"), {ssr: false});

export default function Category(props) {

  const room = props.rooms.data;
  const router = useRouter();
  const categories = router.query.category;
  // categories.charAt(0).toUpperCase() + categories.slice(1);
  // categories.replace(/^./, categories[0].toUpperCase());

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex justify-start clearfix">
        <div className='flex flex-col w-2/4'>
          <h1 className='text-4xl'>{categories}</h1>

          <div className=''>
            {room.map((el) => (
              <CardCategory
                key={el.room_uid}
                name={el.name}
                description={el.description}
                price={el.price}
                id={el.room_uid}
              />
            ))}
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