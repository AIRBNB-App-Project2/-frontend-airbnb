import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import CardCategory from '../../components/CardCategory';
import Image from 'next/image';
import Map from '../../components/Map';
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router';
import axios from "axios";

export default function Category(props) {

  const room = props.rooms.data;
  const router = useRouter();
  const categories = router.query.category;
  // categories.charAt(0).toUpperCase() + categories.slice(1);
  // categories.replace(/^./, categories[0].toUpperCase());

  // const [showOption, setShowOption] = useState(false);
  // const router = useRouter()
  // // const { query } = router.query
  // console.log(router.query.category);

  // function handleOnClick() {
  //   setShowOption(!setShowOption);
  // }
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

  const res = await axios.get(`http://18.140.1.124:8081/room?category=${page}&length=100`);
  const rooms = await res.data;
  return {
    props: {
      rooms,
    }
  }
}