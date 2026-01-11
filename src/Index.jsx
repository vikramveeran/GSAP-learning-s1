import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import React, { useEffect } from 'react'
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);


const Index = () => {

  useEffect(() =>{
     const handleMouseMove = (event) =>{
       const{clientX,clientY} = event;
       gsap.to('.cursor',{
           x:clientX ,
           y:clientY+window.scrollY,
       });
     };
        window.addEventListener('mousemove',handleMouseMove);
 
  return () => {
      window.removeEventListener('mousemove',handleMouseMove);
 
  };
  },[])

 

  return (
      <div className='Index1  bg-amber-500 w-full h-screen flex justify-center items-center'>
       <div className='cursor absolute top-0 left-0 bg-white w-[20px] h-[20px] rounded-2xl z-10'>
       </div>
  </div>
  )
}
export default Index
