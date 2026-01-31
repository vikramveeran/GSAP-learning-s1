import React from 'react'
import { Menu } from 'lucide-react';
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);



// t1.to(".homeImg1",{x:-300,duration:2})



const Home = () => {
    
  useGSAP(()=>{
     gsap.to('.name span',{

      scrollTrigger:{
        trigger:'.page2',
        backgroundColor:"red",
      },
        y:20,
         opacity:1,
         stagger:-0.1,
        //  duration:2,
       repeat:-1,
       yoyo:true,
     })
  })

  return (
    <div  >
      <div className='page1 w-full h-[100vh] bg-fuchsia-700'>
        
      </div>
      <div className='page2 w-full h-[100vh] bg-black '>
          <h1 className='name relative text-white flex justify-center top-100 items-center space-x-10'><span>V</span><span>I</span><span>K</span><span>R</span><span>A</span><span>M</span></h1>
      </div>
    </div>
  )
}

export default Home



