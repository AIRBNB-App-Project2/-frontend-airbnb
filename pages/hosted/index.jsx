import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CardHosted from '../../components/CardHosted'
import Navbar from '../../components/navbar'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

function Hosted() {

    const [nameOwner, setNameOwner] = useState('')
    const [emailOwner, setEmailOwner] = useState('')
    const [password, setPassword] = useState('')

    const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;
    const ownerRooms = useSelector(({ listUser }) => listUser)
    const router = useRouter()

    useEffect(() => {
        if (!getToken) {
            router.push('/')
        }
        if (ownerRooms) {
            setNameOwner(ownerRooms.name)
            setEmailOwner(ownerRooms.email)
            setPassword('privacy')
        }

    }, [getToken])


    return (
        <>
            <Navbar />
            <div className=" mx-auto min-w-xl px-12 py-12 flex justify-start clearfix">
                <div className='flex flex-col w-2/4'>
                    <div className="inline-flex">
                        <button onClick={() => { router.push('/') }} className="py-3 px-3 mx-3 text-primary hover:text-elemen1"><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8S" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg></button>
                        <h1 className='text-4xl py-3 font-semibold'>Owner Rooms</h1>

                        <button className='inline-flex py-2 px-3 text-center rounded-full bg-primary text-md text-white font-medium hover:bg-secondary mt-3 absolute ml-[25rem]' onClick={() => (router.push('/hosted/form'))}><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg> Tambah villa</button>

                    </div>
                    <div className='my-5'>
                        {ownerRooms.rooms ? ownerRooms.rooms.map((el, i) => (
                            <CardHosted key={i} id={el.room_uid} nameRooms={el.name} prices={el.price} descs={el.description} status={el.status} />
                        )) : (<div className='min-h-screen max-w-xl block'>
                            <div className='my-24 text-elemen1'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                </svg>
                                <h1 className='text-xl font-bold text-center'>Maaf anda belum memiliki Villa untuk disewakan</h1>
                            </div>
                        </div>)}
                    </div>
                </div>

                <div className='w-2/4 my-6'>
                    <div className='relative xl:inline-flex xl:max-w-[624px]'>
                        <div className='bg-white drop-shadow-md w-96 px-16 py-10 my-[50px] rounded-md absolute mx-10'>
                            <h1 className='text-gray-800 text-2xl font-semibold'>Owner Profile</h1>
                            <div className='mt-3'>
                                <form className='relative'>
                                    <div className='flex'>
                                        <label className='text-md text-gray-700'>Name Owner
                                            <input type="text" className='py-2 px-3 block border-2 border-elemen1 text-gray-400 focus:outline-none rounded-md' onChange={e => { setNameOwner(e.target.value) }} value={nameOwner} readOnly />
                                        </label>
                                        <Link href='#'>
                                            <a className='mx-5 my-8 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></a>
                                        </Link>
                                    </div>
                                    <div className='flex'>
                                        <label className='text-md text-gray-700'>Email Owner
                                            <input type="email" className='py-2 px-3 block border-2 border-elemen1 text-gray-400 focus:outline-none rounded-md' onChange={e => { setEmailOwner(e.target.value) }} value={emailOwner} readOnly />
                                        </label>
                                        <Link href='#'>
                                            <a className='mx-5 my-8 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></a>
                                        </Link>
                                    </div>
                                    <div className='flex'>
                                        <label className='text-md text-gray-700'>Password
                                            <input type="password" className='py-2 px-3 block border-2 border-elemen1 text-gray-400 focus:outline-none rounded-md' onChange={e => { setPassword(e.target.value) }} value={password} readOnly />
                                        </label>
                                        <Link href='#'>
                                            <a className='mx-5 my-8 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></a>
                                        </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hosted