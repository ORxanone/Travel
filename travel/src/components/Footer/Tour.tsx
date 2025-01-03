import React from 'react'
import Footersosial from './Footersosial'
import Image from 'next/image'
const Footer = () => {
  return (
    <div className='bg-[#115779] h-[463] '>
       <Image src="/Footerlogo.png" alt="Footerlogo" />
       <p className='mt-6 w-[430] text-[#E3E3E3]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standa</p>
       <a href="#" className=' text-[#D99528] mt-8 block'>Read More</a>
       <hr className='w-[373] mt-3'/>
       <Footersosial/>
    </div>
  )
}

export default Footer