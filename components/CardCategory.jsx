import React, { useState, useEffect } from 'react'
import { FaHeart } from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';
import villas from "../img/villa.jpg";
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import {numberWithCommas} from '../utils/numberWithCommas';

function CardCategory(props) {

  const router = useRouter();

  const [name] = useState(props.name);
  const [description] = useState(props.description);
  const [price] = useState(props.price);
  const [image] = useState(props.image);
  const [id] = useState(props.id);


  return (
    <Link href={`/category/detail/${id}`}>
      <a>
        <div className="max-w-md md:max-w-2xl py-4" >
          <div className="flex justify-between bg-white shadow-xl md:flex">
            <div className='flex w-2/6 p-2 items-center'>
              <Image
                src={image}
                alt="villa"
                width="265px"
                height="205px"
              />
            </div>
            <div className='flex w-4/6 justify-between pl-2 py-2'>
              <div>
                <p className="font-bold text-xl md:text-2xl">{name}</p>
                <p className="text-gray-700 md:text-lg">{description}</p>
                <div>
                <p className="text-lg text-gray-700 font-bold">Rp. {numberWithCommas(price)}</p>
                </div>
              </div>
                  <div className="mt-3 pr-5 text-gray-600 text-sm md:text-base"><FaHeart /></div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CardCategory;