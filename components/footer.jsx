import React from 'react'
import Link from 'next/link'


function Footer() {
    return (
        <>
            <footer className="bg-secondary text-center lg:text-left">
                <div className="text-slate-100 text-center p-4">
                    © 2022 Copyright Created by
                    <Link href='/'><p className="text-primary cursor-pointer">Villoka Grup</p></Link>
                </div>
            </footer>
        </>
    )
}

export default Footer