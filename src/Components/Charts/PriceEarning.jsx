import React, { useContext, useEffect, useState } from 'react'
import { ApiInfo } from '../../APIS/Context'
import Card from '../Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis,CartesianGrid } from 'recharts'
import { format } from 'date-fns';


export default function PriceEarning() {
  const {priceEarning} = useContext(ApiInfo)
  const formatYear = (dateString) => format(new Date(dateString), 'yyyy');


  if (!priceEarning || priceEarning.length === 0) {
    return <div>Loading chart data...</div>;
  }


  return (
  
      <div className='m-9 '>
        <ResponsiveContainer width="100%" height={200}>
          <div className='flex w-full justify-center'>
            <p className='text-my-green-light'>Price Earning</p>
          </div>
          <AreaChart width={500} height={400} data={priceEarning} >
                <Tooltip/>
                <Area dataKey={"v"} type="monotone" stroke={`${priceEarning[0].v>priceEarning[priceEarning.length-1].v? "#26c753":"#ff5e54"}`} strokeWidth={2} fill= {`${priceEarning[0].v>priceEarning[priceEarning.length-1].v? "'#2b4e33'":"#ff5e54"}`}fillOpacity={0.3} />

                <XAxis dataKey={"period"} tickFormatter={formatYear} reversed/>
                
            </AreaChart>
            
        </ResponsiveContainer>
         
      </div>
    
  )
}
