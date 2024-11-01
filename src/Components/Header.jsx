import React, { useContext, useEffect, useState } from 'react'
import Search from './Search'
import { ApiInfo } from '../APIS/Context'
import MyStocks from './MyStocks'
import SideBar from './SideBar'

export default function Header() {
  const{companyProfile,watchList,setWatchList,stockQuote} = useContext(ApiInfo)
  const [price,setPrice]= useState(10)
  const [change,setChange]= useState(0)
  const [changePercent,setChangePercent] = useState(0)


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
    <div>
      <div className=' p-3 bg-black flex flex-col rounded-b-xl relative backdrop-blur-3xl '>
          <div className='flex items-center w-full justify-center'>
            <h1 className='text-2xl font-semibold text-white'>
                {companyProfile?.name || "Unavailable"} 
            </h1>
            <i
                className={`fa-regular ${watchList.includes(companyProfile?.ticker) ? "fa-eye-slash" : "fa-eye"} text-slate-400 ml-6`}
                onClick={() => {
                    if (!watchList.includes(companyProfile?.ticker)) {
                        setWatchList(prevData => [...prevData, companyProfile?.ticker]);
                    } else {
                        // Remove ticker if it's already in the watch list
                        setWatchList(prevData => prevData.filter(ticker => ticker !== companyProfile.ticker));
                    }
                }}
            ></i>

          </div>


          <div>
            <MyStocks/>
          </div>



         


         
      </div>
    </div>

  )
}
