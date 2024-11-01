import React, { useState,useContext } from 'react'
import { ApiInfo } from '../APIS/Context'
import Spinner from './Spin@1x-1.0s-200px-200px.gif'


export default function SearchResults({results}) {
    const{SearchLoading,currentSymbol,setCurrentSymbol,companyProfile,setCompanyProfile} = useContext(ApiInfo)
    if (SearchLoading){
        return(
            <div className='absolute top-12 w-full rounded-md h-16 justify-center overflow-y-scroll bg-white  custom-scrollbar z-50 p-3 flex'>
                Loading <img src={Spinner} className='ml-3 w-8 h-8'  alt="" />
            </div>
        )
    }
  return (
    <ul className='absolute top-12 border-2 w-full rounded-md h-64 overflow-y-scroll  border-my-Dark-teal bg-white custom-scrollbar z-20'>
        {
            results.map((item)=>{
                if(!item.symbol.includes("."))
                return(
                    <li key={item.symbol} className='cursor-pointer text-xs p-4 m-2 flex items-center justify-between rounded-md hover:bg-slate-300' onClick={()=>{
                        setCurrentSymbol(item.symbol)
                        console.log(currentSymbol)
                    }}>
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
