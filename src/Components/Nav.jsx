import React from 'react'
import Logo from './Logo.png'

export default function () {
  return (
    <div className='bg-my-Charcoal w-full h-full rounded-b-xl border-2 border-t-0 border-my-Dark-teal'>
        <div className='flex justify-between px-2 w-full h-full items-center'>
            <div>
                <img src={Logo} alt="" className='w-10 h-10 rounded-full' />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col justify-center items-center'>
                    <i className="fa-solid fa-house text-my-green-light text-lg"></i>
                    <p className='text-xs text-my-green-light'>Home</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <i className="fa-solid fa-chart-line text-stone-600 text-lg"></i>
                    <p className='text-xs text-stone-600'>Analytics</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <i className="fa-solid fa-wallet text-stone-600 text-lg"></i>
                    <p className='text-xs text-stone-600'>Wallet</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <i className="fa-regular fa-newspaper text-stone-600 text-lg"></i>
                    <p className='text-xs text-stone-600'>Discover</p>
                </div>

            </div>
        </div>

    </div>
  )
}
