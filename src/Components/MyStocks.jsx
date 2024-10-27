import React, { useContext, useEffect, useState } from 'react'
import Card from './Card'
import { ApiInfo } from '../APIS/Context'

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
        console.log(companyProfile.currency
        )
      }
      
    },[stockQuote]
  )


  return (
      <div className='relative'>
        {/* <span className='absolute left-4 text-neutral-500 text-lg '>
          {mockCompanyDetails.ticker}
        </span> */}
        <div className='w-full h-full flex items-center justify-between'>
          <div className='text-3xl flex items-end gap-1'>
             {price||"0"}
            <span className='text-sm text-neutral-400 pb-1'>{companyProfile.currency
            }</span>
          </div>

          <span className={`text-sm flex items-end gap-2 ${change >0 ? "text-my-green-light" : "text-my-orange"} `}>
            <i class={`fa-solid ${change > 0?"fa-sort-up":"fa-sort-down"}`}></i>
           
            <span>
              {change}
              ({changePercent}%)
            </span>
          </span>
        </div>
      </div>
  )
}