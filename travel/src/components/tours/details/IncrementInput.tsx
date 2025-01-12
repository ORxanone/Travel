'use client'
import React from 'react'

const IncrementInput = ({ item, setItem, title }: any) => {
    return (
        <div className="flex items-center justify-between">
            <span className="text-gray-600">{title}</span>
            <div className="flex items-center gap-3">
                <button
                    onClick={() => setItem(Math.max(0, item - 1))}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                    -
                </button>
                <span className="w-6 text-center">{item}</span>
                <button
                    onClick={() => setItem(item + 1)}
                    className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-md"
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default IncrementInput