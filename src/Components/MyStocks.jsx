import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { ApiInfo } from '../APIS/Context'
import SideBar from './SideBar'

export default function MyStocks({currency}) {
  const [price,setPrice]= useState(10)
  const [change,setChange]= useState(0)
  const [changePercent,setChangePercent] = useState(0)
  currency = "USD"
  const{mockCompanyDetails,stockQuote,setStockQuote,companyProfile} = useContext(ApiInfo)




  useEffect(
    ()=>{
      if (stockQuote != null){
        setPrice(Math.floor(stockQuote.c) )
        setChange(stockQuote.d)
        setChangePercent(stockQuote.dp)
      }
      
    },[stockQuote]
  )


  return (
      <div className='relative pt-6'>
        <div className='w-full h-full flex flex-col gap-6 md:gap-2 items-center justify-center'>
          <div className='text-3xl flex items-end gap-1 font-semibold'>
             {price||"0"}
            <span className='text-sm text-neutral-400 pb-1'>{companyProfile?.currency}</span>
          </div>
          

          

          <span className={`text-lg font-bold flex items-end  gap-2  bg-gray-800 p-3 rounded-full bg-opacity-45 ${change >0 ? "text-lime-400" : "text-my-orange"} `}>
            <i class={`fa-solid ${change > 0?"fa-sort-up":"fa-sort-down"}`}></i>
            <span>
              {change}
              ({changePercent}%)
            </span>
          </span>

          <SideBar/>


        </div>
      </div>
  )
}