import React, { useContext, useState } from 'react'
import { ApiInfo } from '../APIS/Context'
import Card from './Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from 'recharts'
import { format } from 'date-fns';


export default function Chart() {
  const {salesPerShare} = useContext(ApiInfo)
  const formatYear = (dateString) => format(new Date(dateString), 'yyyy');

  if (!salesPerShare || salesPerShare.length === 0) {
    return <div>Loading chart data...</div>;
  }

  return (
  
      <div className=''>
        <ResponsiveContainer width="100%" height={200}>
          <div className='flex w-full justify-center'>
            <p>Sales per share</p>
          </div>
          <AreaChart width={500} height={400} data={salesPerShare} >
                <Tooltip/>
                <Area dataKey={"v"} type="monotone" stroke={`${salesPerShare[0].v>salesPerShare[salesPerShare.length-1].v? "#26c753":"#ff5e54"}`} strokeWidth={2} fill= {`${salesPerShare[0].v>salesPerShare[salesPerShare.length-1].v? "'#2b4e33'":"#ff5e54"}`}fillOpacity={0.3} />
                <XAxis dataKey={"period"} tickFormatter={formatYear} reversed/>
                
            </AreaChart>
            
        </ResponsiveContainer>
         
      </div>
    
  )
}
