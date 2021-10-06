import React from 'react'
import { TwitterLogo, HomeIcon, Notification,Messages,MyProfile,More} from './icon'

const Sidebar = () => {
    return (
        <div className='sidebar relative text-center text-black border-r-2  w-80 h-screen'>
            <div className='twitter-logo mt-5'>
            <TwitterLogo/>
            </div>
            
            
            <ul className='py-16 space-y-3'>
                <li className='h-16 w-64 rounded-full hover:bg-purple-500 py-5 text-xl mx-auto cursor-pointer font-bold'><HomeIcon/><a href='#'>Home Page</a></li>
                <li className='h-16 w-64 rounded-full hover:bg-purple-500 py-5 text-xl mx-auto cursor-pointer'><Notification/><a href='#'>Notifications</a></li>
                <li className='h-16 w-64 rounded-full hover:bg-purple-500 py-5 text-xl mx-auto cursor-pointer'><Messages/><a href='#'>Messages</a></li>
                <li className='h-16 w-64 rounded-full hover:bg-purple-500 py-5 text-xl mx-auto cursor-pointer'><MyProfile/><a href='#'>My Profile</a></li>
                <li className='h-16 w-64 rounded-full hover:bg-purple-500 py-5 text-xl mx-auto cursor-pointer'><More/><a href='#'>Settings</a></li>
            </ul>
            <div className='profile w-32 h-32 flex justify-center  hover:bg-purple-100 rounded-full hover:opacity-50 absolute bottom-0 left-20 rounded-full '>
                <img className='w-20 h-20 relative self-center hover:opacity-0.9 rounded-full' src='https://source.unsplash.com/random' alt='random'></img>
            </div>
        </div>
    )
}

export default Sidebar
