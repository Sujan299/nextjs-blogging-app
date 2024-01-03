import Image from 'next/image'
import '../styles/sujan.scss'
import Profile from '../../../public/assets/images/two.jpg'
export default function Home() {
  return (
    <div className="home1 ">
      <div className="intro">
        <div className="welcome mt-24 mx-8">
          <h2>Welcome to my vlog....</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non dolorum accusantium, autem eaque ratione quibusdam maiores rem necessitatibus iure distinctio! Reprehenderit ad unde provident praesentium atque nulla autem maiores nesciunt!</p>
        </div>
      </div>
      <div className="my mt-36">
        <div className="myFace">
          <Image src={Profile} />
        </div>
      </div>
    </div>
  )
}