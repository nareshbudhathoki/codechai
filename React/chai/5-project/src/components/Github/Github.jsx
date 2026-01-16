import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([]);
  // useEffect(()=>{
  //   fetch('https://api.github.com/users/nareshbudhathoki')
  //   .then((res) => res.json())
  //   .then((data)=> setData(data))
  //   .catch((err)=>console.log("error in fetching data:", err))
  //   .finally(()=>console.log("promise settled"))
  // },[])

  return (
    <>
    <div className='text-center text-3xl m-4 p-4 text-green-500 bg-amber-200'>
      Github followers: {data.followers}
      <img className='mt-4 ml-7' src={data.avatar_url} alt="github profile" width={300} height={300} />
    </div>
    </>
  )
}

export default Github;

export const gitubInfoLoader = async()=>{
    const response = await fetch('https://api.github.com/users/nareshbudhathoki')
    return response.json();
}
