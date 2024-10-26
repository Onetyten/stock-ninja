import React, { useState } from 'react'
import { ApiInfo } from '../APIS/Context'


export default function SearchResults({results}) {
  return (
    <ul className='absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll bg-my-mossy-green border-my-Dark-teal custom-scrollbar z-20'>
        {
            results.map((item)=>{
                return(
                    <li key={item.symbol} className='cursor-pointer text-xs p-4 m-2 flex items-center justify-between rounded-md hover:bg-my-Charcoal '>
                        <span>
                            {item.description}
                        </span>
                        <span>
                            {item.symbol}
                        </span>
                        
                    </li>
                )
            })
        }

    </ul>
  )
}
