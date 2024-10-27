import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ApiInfo } from '../APIS/Context'

export default function Details() {
  const{mockCompanyDetails,companyProfile,setCompanyProfile} = useContext(ApiInfo)
  const detailList = {
    name : "Name",
    country :"Country",
    currency :"Currency",
    exchange : "Exchange",
    marketCapitalization:"Market Capitalization",
    finnhubIndustry:"Industry"

  }
  const convertToBillion=(number)=>{
    return (number/1000).toFixed(2);
  }

  if (!companyProfile){
    return(
      Loading
    )
  }
  return (
      <div className='h-full flex flex-col justify-between p-3 text-xs bg-my-Charcoal m-3  bg-opacity-35 rounded-xl -z-50'>
        {Object.keys(detailList).map((item)=>{
          return(
            <div key={item } className='flex-1 flex justify-between items-center'>
              <div className='text-my-green-light text'>
                {detailList[item]}
              </div>
              <div className='no-underline overflow-hidden'>
                {item==="marketCapitalization" ? `${convertToBillion(companyProfile[item])}B` : companyProfile[item]}
              </div>
            </div>
          )
        })}
      </div>

  )
}
