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

  // const listRoomUid = useSelector(({ listRoomUid }) => listRoomUid);
  const router = useRouter();
  const { id } = router.query;

  const rooms = props.rooms.data;
  console.log(rooms)

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [owner_room, setOwner_Room] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  // const [image, setImage] = useState([]);



  // useEffect(() => {
  //   const findRoom = listRoomUid.find(el => el.room_uid == id);
  //   console.log(findRoom);
    
  //   if (findRoom) {
  //     setName(findRoom.name);
  //     setAddress(findRoom.address);
  //     setOwner(findRoom.owner_room);
  //     setPrice(findRoom.price);
  //     setDescription(findRoom.description);
  //     // setImage(findRoom.Image.url);
  //   }
  // }, [listRoomUid]);

  return (
    <>
      <Navbar />
      <div className="container mx-auto p-10">
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
            <h1 className="text-4xl">{rooms.name}</h1>
            <p className="text-xl font-light mt-2">{rooms.address}</p>
            <p className="text-xl font-light mt-1">{rooms.description}</p>
            <p className="text-xl mt-2">Pemilik : {rooms.owner_room}</p>
          </div>

          <div className="flex flex-col w-max">
            <div className="flex justify-end h-max">
            <form>
              <div className="h-auto p-5 bg-white shadow-xl">
                <div className="flex">
                  <h4 className="font-bold flex  max-w-full">
                    Rp. {numberWithCommas(rooms.price)} / malam
                  </h4>
                </div>
                <div className="flex h-16 mt-2">
                  <div className="flex w-2/4">
                    <DateRangePicker />
                  </div>
                </div>
                <div className="flex">
                  <Link href="/payment">
                    <a className="w-full">
                      <button className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded w-full mt-1">
                        Pesan
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
              </form>
            </div>

            <div className="flex mt-5 max-w-full bg-white shadow-xl h-auto p-5">
              <div className="flex flex-col divide-y divide-slate-700 w-72">
                <h1 className="font-bold">Rp. {numberWithCommas(rooms.price)} x ... malam</h1>
                <h1 className="font-bold"> Total : Rp. ...</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export async function getServerSideProps(router) {
  const {id} = router.query

  const res = await axios.get(`http://18.140.1.124:8081/room/${id}`);
  const rooms = await res.data;
  return {
    props: { 
      rooms,  
    }
  }
}