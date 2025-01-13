import React from 'react'

const BookingFormTitle = ({ basePrice }: { basePrice: number}) => {
    return (
        <div className="mb-6">
            <span className="text-2xl font-bold">${basePrice}</span>
            <span className="text-gray-500 text-sm"> / per person</span>
        </div>
    )
}

export default BookingFormTitle