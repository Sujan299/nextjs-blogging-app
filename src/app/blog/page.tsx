'use client';
import '../styles/blog.scss'
import Image from 'next/image'
import Link from 'next/link'
import firstArticle from '../../../public/assets/thumnails/firstproject.jpg';
export default function Blog() {
    return (
        <div className="pt-24 blogcollection">
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
            <div className='blogitems'>
                <Link href='/blog/firstblog/'>
                    <Image src={firstArticle} className='blogthumbnail' />
                    <h1>Top 10 web hosting providers !</h1>
                </Link>
                <p>written by <span className='font-bold'><Link href='/sujanch'>Sujan Chaudhary</Link></span></p>
                <p>Updated on:<span className='font-bold'>2023/12/30</span></p>
            </div>
        </div>
    )
}