import './styles/home.scss'
import { IoIosReturnRight } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Image from 'next/image'
import Link from 'next/link'
import HomeProfile from '../../public/assets/logo/home.png'
export default function Home() {
  return (
    <div className="pt-24">
      <div className="section">
        <div className="firstCol">
          <h2>From Us </h2>
          <p className='services'><span><IoIosReturnRight /></span><span>FOR BEST AI TOOLS</span></p>
          <p className='services'><span><IoIosReturnRight /></span><span>FOR BEST AI TOOLS</span></p>
          <p className='services'><span><IoIosReturnRight /></span><span>FOR BEST AI TOOLS</span></p>
          <p className='services'><span><IoIosReturnRight /></span><span>FOR BEST AI TOOLS</span></p>
          <Link href='/blog'><button type="button" className='button'><span>Visit Us</span><span><IoIosArrowForward className='arrow' /></span></button>
          </Link>
        </div>
        <div className="secondCol">
          <Image src={HomeProfile} className='homeprofile' />
        </div>
      </div>
    </div>
  )
}