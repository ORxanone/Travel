
import React from 'react'
import { MapPinHouse } from 'lucide-react';
import Link from 'next/link';
import BookingForm from './BookingForm';
import { Rating } from '~/components/ui/rating';
const LocationHeader = () => {
  return (
    <div className='flex gap-20'>
      <div>
        <div className='flex justify-between  mt-5'>
          <div className='flex ml-10'>
            <MapPinHouse />
            <link rel="stylesheet" href="" />
            <span>Budapest,Hungary</span>
            <Link href="#" className='text-red-500 pl-10'>View on map</Link>
          </div>
          
        </div>
        <h1 className='ml-10 font-bold text-cyan-950 mt-5 text-3xl'>Wonders of the west Coast & Kimberly</h1>
      </div>
      <div>
        <BookingForm/>
        <Rating/>
      </div>
    </div>

  )
}

export default LocationHeader