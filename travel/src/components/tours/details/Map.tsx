import React from 'react'
import Image from 'next/image'

const Map = () => {
  return (
    <div className='flex m-12 gap-10'>
      <div className='relative w-[600px] h-[400px]'>
        <Image 
          src="/seabeauty.png" 
          alt="Tourfoto"
          fill
          className='object-cover'
        />
      </div>
      <div className='relative w-1/2 h-[400px]'>
        <Image 
          src="/tourfoto.png" 
          alt="map"
          fill
          className='object-cover'
        />
      </div>
    </div>
  )
}
export default Map
