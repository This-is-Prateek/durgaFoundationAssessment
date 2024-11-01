import React from 'react'

const Card = (props) => {
  return (
    <div className='cardContainer flex gap-3 w-96 h-48 p-3 rounded-xl bg-gradient-to-tl from-gray-200'>
      <div>
        <img src="profile.svg" alt="profile picture" className='w-10'/>
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex flex-col'>
            <div className='font-bold'>{props.name}</div>
            <div className='text-sm'>{props.role}</div>
        </div>
        <div className='flex gap-2'>
            <div className='text-gray-500'>Email:</div>
            <div>{props.email}</div>
        </div>
        <div className='flex mt-auto gap-3'>
            <button className='px-3 py-1 rounded-sm border-2 border-black hover:bg-black hover:text-white'>Block</button>
            <button className='px-3 py-1 rounded-sm bg-black text-white hover:border-2 hover:border-black hover:bg-white hover:text-black'>Details</button>
        </div>
      </div>
    </div>
  )
}

export default Card
