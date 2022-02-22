import React from 'react'
// import Navbar from "../components/navbar";
// import Footer from "../components/footer";
// import allStore from '../store/actions';
// import { useDispatch } from 'react-redux'
// import { useRouter } from 'next/router';


function Layout({ children }) {

    // const dispatch = useDispatch()
    // const router = useRouter()


    return (
        <>
            {/* <Navbar /> */}
            <main>{children}</main>
            {/* <Footer /> */}
        </>
    )
}

export default Layout