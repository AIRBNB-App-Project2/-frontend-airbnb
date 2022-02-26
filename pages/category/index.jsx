import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import CardCategory from '../../components/CardCategory';
import Image from 'next/image';
import Map from '../../components/Map';
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router';


export default function Category() {

  const [showOption, setShowOption] = useState(false);

  const router = useRouter()
  // const { query } = router.query
  console.log(router.query.category);

  function handleOnClick() {
    setShowOption(!setShowOption);
  }
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4 flex justify-start clearfix">
        <div className='flex flex-col w-2/4'>
          <h1 className='text-4xl'>Category Name</h1>

          <div className=''>
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
            <CardCategory />
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