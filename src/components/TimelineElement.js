import React from 'react'

const TimelineElement = ({ name }) => {
    return (
        <div className='timeline-el hover:bg-gray-100 w-100 rounded border-t border flex flex-row justify-between items-center px-3 py-3'>
            <img className='w-16 h-16 object-cover  rounded-full' src='https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt='random'></img>
            <span className='text-2xl px-5'>{name}</span>
            <button className='w-36 h-16 text-2xl text-white hover:bg-blue-400 rounded-full bg-blue-500'>Takip et</button>
        </div>
    )
}

export default TimelineElement
