'use client'
import Link from 'next/link'
import '../styles/footer.scss'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Footer() {
    const address = ' satti kailali'
    return (
        <section className='h-full w-full px-4 2xl:px-16 footer mt-20 pt-10 bg-gray-200'>
            <div className="contact">
                <h2 className='font-bold text-xl md:text-2xl socialconnections'>Links</h2>
                <div className="links mt-4">
                    <Link href='https://www.instagram.com/digitalaiblend/' className='iconsNames'><span className='icon'><AiFillInstagram /></span><span>Instagram</span></Link>
                    <Link href='/' className='iconsNames'><span className='icon'><AiFillTwitterSquare /></span><span>Twitter</span></Link>
                    <Link href='/' className='iconsNames'><span className='icon'><AiFillLinkedin /></span><span>Linkedin</span></Link>
                </div>
            </div>
            <div className="privacy">
                <h2 className='font-bold text-xl md:text-2xl socialconnections'>
                    Explore
                </h2>
                <div className="privacies mt-4 ">
                    <Link href='/' className='iconsNames'><span className='icon'><IoIosCheckmarkCircle /></span><span>Terms and Conditions</span></Link>
                    <Link href='/' className='iconsNames'><span className='icon'><IoIosCheckmarkCircle /></span><span>Privacy and Policy</span></Link>
                    <Link href='/' className='iconsNames'><span className='icon'><IoIosCheckmarkCircle /></span><span>About Us</span></Link>
                    <Link href='/' className='iconsNames'><span className='icon'><IoIosCheckmarkCircle /></span><span>Contact Us</span></Link>
                </div>
            </div>
            <div className="font-bold text-xl md:text-2xl socialconnections">
                <h1>DigitalAi<span>Blend</span></h1>
            </div>
        </section>
    )
}