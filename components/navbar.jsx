import React, { useState } from 'react'
import Image from "next/image";
import villoka from '../img/Villoka_white.svg'
// import logosm from '../img/Logosm.svg'
import { Fragment } from 'react'
import { Transition, Disclosure, Menu } from '@headlessui/react'
import {
    MenuIcon,
    XIcon,
    BellIcon,
} from '@heroicons/react/outline'
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios from 'axios';

const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const userNavigation = [
    { name: 'Riwayat', href: '/history' },
    { name: 'Log out', href: '' },

]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function Navbar() {

    const [searchTerm, setSearchTerm] = useState('')
    const router = useRouter()
    const getToken = typeof window !== "undefined" ? localStorage.getItem("token") : null;

    console.log(searchTerm);


    // funtion Logout
    function handleLogout() {
        if (getToken) {
            localStorage.removeItem("token");
            // localStorage.removeItem("dataProfile");
            router.push("/");
        }
    }

    return (
        <div className='py-12 bg-white'>
            <Disclosure as="nav" className="bg-secondary fixed top-0 inset-x-0 z-30">
                {({ open }) => (
                    <>
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="flex items-center justify-between h-24">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <Link href='/'>
                                            <Image
                                                className="h-8 w-8 cursor-pointer"
                                                src={villoka}
                                                alt="Logo-Villoka"
                                            />
                                        </Link>
                                    </div>
                                    {/* Search Input */}
                                    <div className="hidden md:block">
                                        <div className="ml-64 flex space-x-10">
                                            <div className="relative text-gray-600">
                                                <input type="search" placeholder="Cari kota..." className="bg-white h-12 px-5 pr-14 rounded-full text-md focus:outline-none" onChange={e => { setSearchTerm(e.target.value) }} />
                                                <button type="submit" className="absolute right-0 mt-3 mr-4 items-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-elemen1 active:text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                                    </svg>
                                                </button>
                                                {/* result search */}
                                                {searchTerm.length != 0 && (
                                                    <div className='bg-white absolute rounded-md mt-3 py-3 px-4 min-w-full h-40 overflow-y-auto transition ease-in-out'>
                                                        <a className='block text-md text-gray-600 cursor-pointer hover:bg-elemen2 rounded-sm'> Result Search </a>
                                                        <a className='block text-md text-gray-600 cursor-pointer hover:bg-elemen2 rounded-sm'> Result Search </a>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-4 flex items-center md:ml-6">
                                        <button onClick={() => (router.push('/hosted'))}
                                            type="button"
                                            className={classNames(!getToken ? 'hidden' : '', `bg-elemen2 px-4 py-2 mr-3 rounded-lg text-primary hover:text-white hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary`)}
                                        >
                                            <span className="sr-only">View Hosted Rooms</span>
                                            Sewakan Villamu
                                        </button>
                                        <button className={classNames(!getToken ? 'hidden' : '', `p-3 rounded-full text-rose-300`)} onClick={handleLogout}>
                                            <span className="sr-only">Log out Toggle</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                            </svg>
                                        </button>

                                        {/* Profile dropdown */}
                                        <Menu as="div" className="ml-3 relative">
                                            <div>
                                                <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                                    <span className="sr-only">Open user menu</span>
                                                    <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
                                                </Menu.Button>
                                            </div>
                                            <Transition
                                                as={Fragment}
                                                enter="transition ease-out duration-100"
                                                enterFrom="transform opacity-0 scale-95"
                                                enterTo="transform opacity-100 scale-100"
                                                leave="transition ease-in duration-75"
                                                leaveFrom="transform opacity-100 scale-100"
                                                leaveTo="transform opacity-0 scale-95"
                                            >

                                                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-primary ring-1 ring-black ring-opacity-5 focus:outline-none">
                                                    {getToken ? userNavigation.map((item) => (
                                                        <Menu.Item key={item.name}>
                                                            {({ active }) => (
                                                                <Link href={item.href}>
                                                                    <a className={classNames(active ? 'bg-gray-100' : '',
                                                                        'block px-4 py-2 text-sm text-white hover:bg-secondary/30 cursor-pointer'
                                                                    )}>
                                                                        {item.name}
                                                                    </a>
                                                                </Link>
                                                            )}
                                                        </Menu.Item>

                                                    )) : (
                                                        <div className=''>
                                                            <button className='px-[4.5rem] py-2 text-md rounded-md  text-white hover:bg-secondary/30 cursor-pointer' onClick={() => { router.push('/signin') }}>Masuk</button>
                                                            <button className='px-[4rem] my-2 py-2 block mx-auto text-md rounded-md text-elemen1 bg-elemen2 hover:bg-elemen2 hover:text-secondary cursor-pointer' onClick={() => { router.push('/signup') }}>
                                                                Daftar
                                                            </button>
                                                        </div>
                                                    )}
                                                </Menu.Items>
                                            </Transition>
                                        </Menu>
                                    </div>
                                </div>
                                <div className="-mr-2 flex md:hidden">
                                    {/* Mobile menu button */}
                                    <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                        <span className="sr-only">Open main menu</span>
                                        {open ? (
                                            <XIcon className="block h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                        )}
                                    </Disclosure.Button>
                                </div>
                            </div>
                        </div>

                        <Disclosure.Panel className="md:hidden">
                            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                {/* Space for menu navbar */}
                            </div>
                            <div className="pt-4 pb-3 border-t border-gray-700">
                                <div className="flex items-center px-5">
                                    <div className="flex-shrink-0">
                                        <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
                                    </div>
                                    <div className="ml-3">
                                        <div className="text-base font-medium leading-none text-white">{user.name}</div>
                                        <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
                                    </div>
                                    <button
                                        type="button"
                                        className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                                    >
                                        <span className="sr-only">View notifications</span>
                                        <BellIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                    <button className={classNames(!getToken ? 'hidden' : '', `ml-3 flex-shrink-0 p-1 rounded-full text-rose-400`)} onClick={handleLogout}>
                                        <span className="sr-only">Log out Toggle</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="mt-3 px-2 space-y-1">
                                    {userNavigation.map((item) => (
                                        <Disclosure.Button
                                            key={item.name}
                                            as="a"
                                            href={item.href}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                                        >
                                            {item.name}
                                        </Disclosure.Button>
                                    ))}
                                </div>
                            </div>
                        </Disclosure.Panel>
                    </>
                )
                }
            </Disclosure >
        </div>
    )
}
