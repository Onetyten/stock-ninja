import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ApiInfo } from '../APIS/Context'

export default function Details() {
  const{mockCompanyDetails} = useContext(ApiInfo)
  const detailList = {
    name : "Name",
    country :"Country",
    currency :"Currency",
    exchange : "Exchange",
    ipo: "IPO Date",
    marketCapitalization:"Market Capitalization",
    finnhubIndustry:"Industry"

  }
  const convertToBillion=(number)=>{
    return (number/1000).toFixed(2);
  }
  return (
    <Card>
      <ul className='w-full h-full flex flex-col justify-between divide-y-2 no-underline list-none'>
        {Object.keys(detailList).map((item)=>{
          return(
            <li key={item } className='flex-1 flex justify-between items-center no-underline'>
              <span className='no-underline'>
                {detailList[item]}
              </span>
              <span className='no-underline'>
                {item==="marketCapitalization" ? `${convertToBillion(mockCompanyDetails[item])}B` : mockCompanyDetails[item]}
              </span>
            </li>
          )
        })}
      </ul>

    </Card>
  )
}
