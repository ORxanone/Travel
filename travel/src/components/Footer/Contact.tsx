import React from 'react'
import { Clock } from 'lucide-react';
const Contact = () => {
  return (
    <div className='text-[#F9F9F9]'>
      <h2 className="text-2xl font-bold mb-8 mt-5 text-[#D99528]">Contact</h2>
      <p>Phone: +669 4398 4920</p>
      <p className='mt-2'>Email: sahabuddin@gmail.com</p>
      <p className='mt-2'>Address: 947 WashingtonDC,USA</p>
      <p className='flex mt-2'><Clock/>Sat - Fri (9.00am-9.00pm)</p>
    </div>
  )
}

export default Contact