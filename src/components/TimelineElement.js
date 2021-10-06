import React from 'react'

const TimelineElement = ({name}) => {
    return (
        <div className='timeline-el hover:bg-gray-100 w-100 rounded border-t border flex flex-row justify-between items-center px-3 py-3'>
            <img className='w-16 h-16  rounded-full' src='https://source.unsplash.com/random' alt='random'></img>
            <span className='text-2xl px-5'>{name}</span>
            <button className='w-36 h-16 text-2xl text-white hover:bg-purple-700 rounded-full bg-red-700'>Takip et</button>
        </div>
    )
}

export default TimelineElement
