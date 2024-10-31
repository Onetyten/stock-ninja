import React, { useContext, useEffect, useState } from 'react'
import { ApiInfo } from '../../APIS/Context'
import Card from '../Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis,CartesianGrid } from 'recharts'
import { format } from 'date-fns';


export default function Chart() {
  const {salesPerShare} = useContext(ApiInfo)
  const formatYear = (dateString) => format(new Date(dateString), 'yyyy');

  useEffect(()=>{

  },[])

  if (!salesPerShare || salesPerShare.length === 0) {
    return <div>Loading chart data...</div>;
  }


  return (
  
      <div className='m-3 '>
        <ResponsiveContainer width="100%" height={200}>
          <div className='flex w-full justify-center'>
            <p className='text-my-green-light'>Sales per share</p>
          </div>
          <AreaChart width={500} height={400} data={salesPerShare} >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Tooltip/>
                <Area dataKey={"v"} type="monotone" stroke={`${salesPerShare[0].v>salesPerShare[salesPerShare.length-1].v? "#26c753":"#ff5e54"}`} strokeWidth={2} fill= {`${salesPerShare[0].v>salesPerShare[salesPerShare.length-1].v? "'#2b4e33'":"#ff5e54"}`}fillOpacity={0.3} />

                <XAxis dataKey={"period"} tickFormatter={formatYear} reversed/>
                
            </AreaChart>
            
        </ResponsiveContainer>
         
      </div>
    
  )
}
