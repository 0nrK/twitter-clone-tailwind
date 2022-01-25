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
        <div className='tweet flex w-full py-2 my-2 space-x-1 min-h-32 h-auto mx-5 border-gray-extraLight border-b'>
            <div className='flex-2 mr-5'>
                <img className='w-24 h-16   inline mx-3 hover:opacity-50 rounded-full ' src='https://source.unsplash.com/random' alt='random'></img>
            </div>
            <div className="flex-9">
                <div class='flex flex-col  '>
                    <div className='flex flex-row  justify-between items-center h-9 w-48'>
                        <h4 className='font-bold text-gray text-2xl'>Raskolnikov</h4>
                        <p className='text-gray-600 ml-3 text-xl'>fdsfdsfddate</p>
                    </div>

                    <p className='text-black h-auto w-full  text-xl pr-3'>Occaecat magna anim elit mollit amet et. Proident reprehenderit qui ipsum eu excepteur nisi aute cillum elit consequat excepteur exercitation.</p>

                    <ul className="flex flex-row items-center  w-full pr-5 mt-8 justify-between">
                        <li className="flex items-center group space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-color-red space-y-3 flex items-center justify-center w-6 h-6 rounded-full'>
                                <span className='rounded-full '><Quote className='w-4 h-4 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:text-blue text-xl text-gray '>1</span>
                        </li>

                        <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-6 h-6 rounded-full'>
                                <span className='rounded-full '><Retweet className='w-4 h-4 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray '>3</span>
                        </li>

                        <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-6 h-6 rounded-full'>
                                <span className='rounded-full '><Fav className='w-4 h-4 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray '>11</span>
                        </li>
                        <li className="flex items-center space-x-3 text-gray-dark text-sm ">
                            <div className='group-hover:bg-primary-light space-y-3 flex items-center justify-center w-6 h-6 rounded-full'>
                                <span className='rounded-full '><Share className='w-4 h-4 group-hover:text-primary-base' /></span>
                            </div>
                            <span className='group-hover:bg-primary-base text-xl text-gray '>7</span>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Tweet
