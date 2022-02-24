import React, {useState} from 'react';
import { FaHeart } from "react-icons/fa";
import CardCategory from '../../components/CardCategory';
import Image from 'next/image';
import Map from '../../components/Map';

export default function Category() {

  const [showOption, setShowOption] = useState(false);

  function handleOnClick() {
    setShowOption(!setShowOption);
  }
  return (
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
          <div className='fixed hidden xl:inline-flex xl:min-w-[624px] xl:h-full'>
            <Map />
          </div>
        </div>
        <style jsx>{`
        .clearfix:after {content:""; display:table; clear:both;}
        `}</style>
    </div>
  )
}