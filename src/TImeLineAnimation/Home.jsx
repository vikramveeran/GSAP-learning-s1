import React from 'react'
import { Menu } from 'lucide-react';
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const t1 = gsap.timeline();

// t1.to(".homeImg1",{x:-300,duration:2})


const Home = () => {
    useGSAP(()=>{
t1.to(".homeImg1",{x:-300,duration:2},)
   .to( ".homeImg1",{x:300,duration:3},)

},[])
  return (
    <div className=' w-full h-full overflow-x-hidden'>
      <div className='homeImg  absolute bg-[url(https://images.unsplash.com/photo-1612404748636-568ca4155994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)] w-full h-182 bg-cover overflow-x-hidden'>
      <div className= 'homeImg1 blur-sm bg-[url(https://images.unsplash.com/photo-1612404748636-568ca4155994?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2t5JTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D)]  w-70  h-180 -top-0.5 -right-379 relative '>
         
      </div>
      </div>
    </div>
  )
}

export default Home

