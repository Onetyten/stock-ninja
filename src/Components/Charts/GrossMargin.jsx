import React, { useContext, useEffect, useState } from 'react'
import { ApiInfo } from '../../APIS/Context'
import Card from '../Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis,CartesianGrid } from 'recharts'
import { format } from 'date-fns';


export default function     GrossMargin() {
  const {grossMargin} = useContext(ApiInfo)
  const formatYear = (dateString) => format(new Date(dateString), 'yyyy');


  if (!grossMargin || grossMargin.length === 0) {
    return (
      <div className='text-white bg-black rounded-2xl h-64 font-semibold text-2xl flex justify-center items-center'>
          No chart data available
      </div>);
  }


  return (
  
      <div className='m-3 h-64 bg-black rounded-xl px-2 py-7'>
        <ResponsiveContainer width="100%">
          <div className='flex w-full justify-center'>
            <p className='text-lime-400 font-semibold text-xl'>Gross Margin</p>
          </div>
          <AreaChart width={500} height={400} data={grossMargin} >
                <Tooltip/>
                <Area dataKey={"v"} type="monotone" stroke={`${grossMargin[0].v>grossMargin[grossMargin.length-1].v? "#a3e635":"#ff5e54"}`} strokeWidth={2} fill= {`${grossMargin[0].v>grossMargin[grossMargin.length-1].v? "#a3e635":"#ff5e54"}`}fillOpacity={0.3} />

                <XAxis dataKey={"period"} tickFormatter={formatYear} reversed/>
                
            </AreaChart>
            
        </ResponsiveContainer>
         
      </div>
    
  )
}
