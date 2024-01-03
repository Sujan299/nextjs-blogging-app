'use client'
import Image from 'next/image'
import Link from 'next/link'
import '../styles/navbar.scss'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react';
import logo from '../../../public/assets/logo/logo.png'
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const handleNav = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <nav className='fixed w-full h-24 shadow-xl bg-white'>
            <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
                <Link href='/' className='logo'>
                    Digital<span className='ai'>Ai</span><span className='blend'>Blend</span>
                </Link>
                <div className="">
                    <ul className='hidden sm:flex'>
                        <Link href='/blog'>
                            <li className='ml-10 uppercase hover: text-xl link'>Blogging</li>
                        </Link>
                        {/* <Link href='/about'>
                            <li className='ml-10 uppercase hover: border-b text-xl link'>My Journey</li>
                        </Link> */}
                        <Link href='/contact'>
                            <li className='ml-10 uppercase hover: text-xl link'>Contact</li>
                        </Link>
                    </ul>
                </div>
                <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
                    <AiOutlineMenu size={25} />
                </div>
            </div>
            <div className={
                menuOpen ?
                    'fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500'
                    : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
            }>
                <div className="flex w-full items-center justify-end">
                    <div className="cursor-pointer">
                        <AiOutlineClose size={25} onClick={handleNav}/>
                    </div>
                </div>
                <div className="flex-col py-4">
                    <ul>
                        <Link href='/blog'>
                            <li onClick={handleNav}
                            className='py-4 cursor-pointer'
                            >
                                Blog
                            </li>
                        </Link>
                        {/* <Link href='/about'>
                            <li onClick={handleNav}
                            className='py-4 cursor-pointer'
                            >
                                categories
                            </li>
                        </Link> */}
                        <Link href='/contact'>
                            <li onClick={handleNav}
                            className='py-4 cursor-pointer'
                            >
                                Contact
                            </li>
                        </Link>
                    </ul>
                </div>

            </div>
        </nav>
    )
}