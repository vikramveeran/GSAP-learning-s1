import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
gsap.registerPlugin(ScrollTrigger);


const Index2 = () => {
 
  useGSAP(()=>{
    gsap.from('.Index2 div',{
        scale:2,
        opacity:0,
        duration:2,
         
        scrollTrigger:{
           trigger:'.Index2 div',
           scroller:'body',
           scrub:2,
        }
    })
    gsap.from('.Index2 div:nth-child(2)',{
       transform:"translateY(-7rem)",
        duration:2,
        top:"100px",
       scrollTrigger:{
          trigger:'.Index2 div:nth-child(2)',
           
       }
    })

  },[])

  return (
    <div className=''>
      <div className='Index2 bg-sky-500 w-full h-screen flex justify-between  items-center gap-20 p-3 place-content-center'>
       <div className='w-40 h-40 bg-amber-800 rounded-2xl flex   items-center place-content-center '>1</div>
       <div  className='w-40 h-40 bg-red-800 rounded-2xl flex   items-center place-content-center' >2</div>
       <div  className='w-40 h-40 bg-blue-800 rounded-2xl flex   items-center place-content-center'>3</div>
     </div>
    </div>
  )
}

export default Index2
