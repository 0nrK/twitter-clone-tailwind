import React,{useState} from 'react'

const ContainerHeading = () => {

    const [tweets, setTweets] = useState([])

    function tweeted(e){
        e.preventDefault()
        const tweet = document.getElementById('tweetInput').value
    }

    return (
        <div className='mx-5'>
            <div className='home-area  h-16  border-b-2 '>
                <h2 className='font-bold text-black text-3xl py-3 px-3'>Home</h2>
            </div>
            <div className='input-area h-44 relative  border-b-2  py-5  flex flex-row justify-between'>
                <img className='w-20 h-20 ml-3 hover:opacity-50 absolute self-center rounded-full ' src='https://source.unsplash.com/random' alt='random'></img>
                <form onSubmit={tweeted}>
                <textarea id='tweetInput' className='rounded-l text-lg  pl-3 pt-3 text-black text-2xl self-center absolute left-32 bottom-12 border-2  flex-1 h-24 w-3/4 overflow-hidden outline-none resize-none' placeholder="What's happening?"></textarea>
                <button className='text-white mb-1 mr-1 rounded-full absolute right-0 bottom-0 bg-blue-500  h-9 w-32' type='submit'>Tweet it</button>
                </form>
            </div>
        </div>
    )
}

export default ContainerHeading
