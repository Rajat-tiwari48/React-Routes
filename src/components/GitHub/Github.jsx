import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data= useLoaderData()
    // const [data , setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/Rajat-tiwari48')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])
    return (
        <div className='text-center m-4 text-3xl text-white bg-gray-400 p-4'>Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Git Picture" height={300} />
        </div>
        
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response= await fetch('https://api.github.com/users/Rajat-tiwari48')
    return response.json()
}
