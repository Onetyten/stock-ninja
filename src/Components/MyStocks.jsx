import React, { useContext } from 'react'
import Card from './Card'
import { ApiInfo } from '../APIS/Context'

export default function MyStocks({currency}) {
  const price = 300
  const change = 30
  const changePercent  = 0.0145
  currency = "USD"
  const{mockCompanyDetails} = useContext(ApiInfo)
  return (
      <div className='relative'>
        {/* <span className='absolute left-4 text-neutral-500 text-lg '>
          {mockCompanyDetails.ticker}
        </span> */}
        <div className='w-full h-full flex items-center justify-between'>
          <div className='text-3xl flex items-end gap-1'>
            {price}
            <span className='text-sm text-neutral-400 pb-1'>{currency}</span>
          </div>

          <span className={`text-sm flex items-end gap-2 ${change >0 ? "text-my-green-light" : "text-my-orange"} `}>
            <i class="fa-solid fa-sort-up"></i>
           
            <span>
              {change}
              ({changePercent}%)
            </span>
          </span>
        </div>
      </div>
  )
}