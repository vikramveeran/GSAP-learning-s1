import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import React from 'react'
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Index = () => {
  return (
      <div className='Index1  bg-amber-500 w-full h-screen flex justify-center items-center'>
       <h1 className='IndexH1 bg-sky-500 h-10 text-center py-1.5 px-2 rounded-2xl'>Hi My Name is vikram</h1>
  </div>
  )
}
export default Index
