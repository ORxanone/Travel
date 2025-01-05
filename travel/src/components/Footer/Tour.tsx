import React from 'react'
import Footersosial from './Footersosial'
import Image from 'next/image'
import Quicklinks from './Quicklinks'
import Contact from './Contact'
import Copyright from './Copyright'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='bg-[#115779] h-[463] '>
      <div className='flex justify-evenly pt-10'>
        <div>
          <Image src="/Footerlogo.png" alt="Footerlogo" width={180.44} height={48} />
          <p className='mt-6 text-[#E3E3E3]'>Lorem Ipsum is simply dummy text of the printing <br /> and typesetting industry. Lorem Ipsum has been <br /> the industry&aposs standa</p>
          <Link href="#" className=' text-[#D99528] mt-9 block'>Read More</Link>
          <hr className='w-[373] mt-3 mb-3' />
          <Footersosial/>
        </div>
        <div>
          <Quicklinks />
        </div>
        <div>
          <Contact />
        </div>
      </div>
      <Copyright/>
    </div>
  )
}

export default Footer