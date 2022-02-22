import React from 'react'
import Navbar from './navbar'
import Footer from "./footer";
// import allStore from '../store/actions';
// import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router';


function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout