import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ApiInfo } from '../APIS/Context'

export default function Details() {
  const{companyProfile} = useContext(ApiInfo)
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
      <div className='text-white bg-black rounded-2xl h-64 font-semibold text-2xl flex justify-center items-center'>
        Company Details

      </div>
    )
  }
  return (
      <div className='h-full flex flex-col justify-between p-3 text-sm bg-black m-3 rounded-xl -z-50'>
        {Object.keys(detailList).map((item)=>{
          return(
            <div key={item } className='flex-1 flex justify-between items-center pb-5'>
              <div className='text-white font-semibold'>
                {detailList[item]}
              </div>
              <div className='no-underline text-slate-300 overflow-hidden'>
                {item==="marketCapitalization" ? `${convertToBillion(companyProfile[item])}B` : companyProfile[item]}
              </div>
            </div>
          )
        })}
      </div>

  )
}
