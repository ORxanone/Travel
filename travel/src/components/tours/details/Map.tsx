import React from 'react'
import Image from 'next/image'

const Map = () => {
  return (
    <div className='flex ml-10 mr-10 mt-10 gap-10'>
      <div className='relative w-[600px] h-[400px]'>
        <Image 
          src="/seabeauty.png" 
          alt="Tourfoto"
          fill
          className='object-cover'
        />
      </div>
      <div className='relative w-1/2 h-[400px]'>
      <div className='w-full'><iframe width="100%" height="300" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe></div>
      </div>
    </div>
  )
}
export default Map
