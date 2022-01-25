import React from 'react'
import { TwitterLogo, HomeIcon, Notification, Messages, MyProfile, More } from './icon'

const Sidebar = () => {
    return (
        <div className='sidebar flex flex-col space-between  text-center text-black border-r-2  w-80 h-screen'>
            <div className='twitter-logo mt-5'>
                <TwitterLogo />
            </div>


            <ul className='py-16 space-y-3  '>
                <li className='h-16 w-64 flex flex-row items-center  space-x-3 rounded-full hover:bg-blue-200 py-5 text-xl mx-auto cursor-pointer font-bold'><HomeIcon /><a href='#'>Home Page</a></li>
                <li className='h-16 w-64 flex flex-row items-center  space-x-3 rounded-full hover:bg-blue-200 py-5 text-xl mx-auto cursor-pointer'><Notification /><a href='#'>Notifications</a></li>
                <li className='h-16 w-64 flex flex-row items-center  space-x-3 rounded-full hover:bg-blue-200 py-5 text-xl mx-auto cursor-pointer'><Messages /><a href='#'>Messages</a></li>
                <li className='h-16 w-64 flex flex-row items-center  space-x-3 rounded-full hover:bg-blue-200 py-5 text-xl mx-auto cursor-pointer'><MyProfile /><a href='#'>My Profile</a></li>
                <li className='h-16 w-64 flex flex-row items-center  space-x-3 rounded-full hover:bg-blue-200 py-5 text-xl mx-auto cursor-pointer'><More /><a href='#'>Settings</a></li>
            </ul>
            <div className='profile w-48  h-32 mt-auto flex flex-row  items-center  hover:bg-purple-100 rounded-full hover:opacity-50    '>
                <img className='w-24 object-cover h-16 relative self-center hover:opacity-0.9 rounded-full' src='https://source.unsplash.com/random' alt='random'></img>
                <div className='flex ml-3 w-full flex-col items-center justify-center'>
                    <span className='font-bold'>Onur K.</span>
                    <span className='text-gray-500'>nrk</span>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
        </div>
    )
}

export default Sidebar
