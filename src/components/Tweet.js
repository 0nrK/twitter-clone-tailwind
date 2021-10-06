import React, { useState } from 'react'
import { Quote, Retweet, Fav, Share } from './icon'

const Tweet = () => {
    const [liked, setLiked] = useState(false)
    const [like, setLike] = useState(2)

    function handleLike() {
        if (liked === false) {
            setLiked(true)
            setLike(like + 1)
        }
        if (liked === true) {
            setLiked(false)
            setLike(like - 1)
        }
    }

    return (
        <div className='tweet flex py-2 my-2  space-x-1 min-h-32 h-auto mx-5 border-gray-extraLight border-b'>
            <img className='w-20 h-20 inline mx-3 hover:opacity-50 rounded-full ' src='https://source.unsplash.com/random' alt='random'></img>
            <div class='flex flex-col'>
                <div className='flex flex-row  justify-between items-center h-9 w-48'>
                    <h4 className='font-bold text-gray text-2xl'>Raskolnikov</h4>
                    <p className='text-gray-600 ml-3 text-xl'>fdsfdsfddate</p>
                </div>
                <p className='text-black h-9 block text-2xl w-auto '>Lorem ipsum kakn qloremas a cxzncxmzncmxzncxzncxmzncmxzn qjer.</p>

                <ul className="flex flex-row items-center max-w-md mt-12 justify-between">
                    <li className="flex items-center group space-x-3 text-gray-dark text-sm ">
                        <div className='group-hover:bg-color-red space-y-3 flex items-center justify-center w-8 h-8 rounded-full'>
                            <span className='rounded-full '><Quote className='w-5 h-5 group-hover:text-primary-base' /></span>
                        </div>
                        <span className='group-hover:text-blue text-xl text-gray pl-5'>231</span>
                    </li>

                    <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-8 h-8 rounded-full'>
                                <span className='rounded-full '><Retweet className='w-5 h-5 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray pl-5'>231</span>                    
                    </li>

                    <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-8 h-8 rounded-full'>
                                <span className='rounded-full '><Fav className='w-5 h-5 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray pl-5'>231</span>                    
                    </li>
                    <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-8 h-8 rounded-full'>
                                <span className='rounded-full '><Share className='w-5 h-5 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray pl-5'>231</span>                    
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Tweet
