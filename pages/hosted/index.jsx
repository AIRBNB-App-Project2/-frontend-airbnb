import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import CardHosted from '../../components/CardHosted'
import Navbar from '../../components/navbar'
import Router from 'next/router'

function Hosted() {

    const [nameOwner, setNameOwner] = useState('')
    const [emailOwner, setEmailOwner] = useState('')
    const [password, setPassword] = useState('')

    const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    useEffect(() => {
        if (!getToken) {

            Router.push('/')
        }


    }, [])


    return (
        <>
            <Navbar />
            <div className=" mx-auto min-w-xl px-12 py-12 flex justify-start clearfix">
                <div className='flex flex-col w-2/4'>
                    <h1 className='text-4xl font-semibold'>Owner Rooms</h1>

                    <div className='my-5'>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                        <CardHosted></CardHosted>
                    </div>
                </div>

                <div className='w-2/4'>
                    <div className='relative xl:inline-flex xl:max-w-[624px]'>
                        <div className='bg-white drop-shadow-md w-96 px-16 py-10 my-[50px] rounded-md absolute mx-10'>
                            <h1 className='text-gray-800 text-2xl font-semibold'>Owner Profile</h1>
                            <div className='mt-3'>
                                <form className='relative'>
                                    <div className='flex'>
                                        <label className='text-md text-gray-400'>Name Owner
                                            <input type="text" className='py-2 px-3 block border-2 border-elemen1 text-black focus:outline-none rounded-md' onChange={e => { setNameOwner(e.target.value) }} value={nameOwner} />
                                        </label>
                                        <Link href='#'>
                                            <a className='mx-5 my-8 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></a>
                                        </Link>
                                    </div>
                                    <div className='flex'>
                                        <label className='text-md text-gray-400'>Email Owner
                                            <input type="email" className='py-2 px-3 block border-2 border-elemen1 text-black focus:outline-none rounded-md' onChange={e => { setEmailOwner(e.target.value) }} value={emailOwner} />
                                        </label>
                                        <Link href='#'>
                                            <a className='mx-5 my-8 text-primary hover:text-rose-400'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg></a>
                                        </Link>
                                    </div>
                                    <div className='flex'>
                                        <label className='text-md text-gray-400'>Password
                                            <input type="password" className='py-2 px-3 block border-2 border-elemen1 text-black focus:outline-none rounded-md' onChange={e => { setPassword(e.target.value) }} value={password} />
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