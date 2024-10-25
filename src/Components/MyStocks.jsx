import React, { useContext } from 'react'
import Card from './Card'
import { ApiInfo } from '../APIS/Context'

export default function MyStocks({currency}) {
  const price = 300
  const change = -30
  const changePercent  = 0.0145
  currency = "USD"
  const{mockCompanyDetails} = useContext(ApiInfo)
  return (
    <Card>
      <div className='relative'>
        <span className='absolute left-4 text-neutral-500 text-lg '>
          {mockCompanyDetails.ticker}
        </span>
        <div className='w-full h-full flex items-center justify-around'>
          <span className='text-3xl flex items-center'>
            {price}
            <span className='text-xl text-neutral-400'>{currency}</span>
          </span>
          <span className={`text-lg ${change >0 ? "text-my-green-light" : "text-my-orange"} `}>
            {change}
            <span>
              ({changePercent}%)
            </span>
          </span>
        </div>
      </div>
    </Card>
  )
}