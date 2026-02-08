import React, { useState } from 'react'
import { Menu } from 'lucide-react';
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import {ScrollTrigger} from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// t1.to(".homeImg1",{x:-300,duration:2})


const Home = () => {
    
  const[color,ChangeColor] = new useState('#000');
 
  const getRandomColor= () =>{
     return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
 
  return (
    <div  >
      <div className='page2 w-full h-[100vh] ' style={{backgroundColor:color}}>
          <button className='text-white bg-amber-700' onClick={()=>{
             ChangeColor(getRandomColor())
          }}>Change background Color</button>
      </div>
    </div>
  )
}
export default Home



