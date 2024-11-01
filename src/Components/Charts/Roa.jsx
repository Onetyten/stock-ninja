import React, { useContext, useEffect, useState } from 'react'
import { ApiInfo } from '../../APIS/Context'
import Card from '../Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis,CartesianGrid } from 'recharts'
import { format } from 'date-fns';


export default function Roa() {
  const {roa} = useContext(ApiInfo)
  const formatYear = (dateString) => format(new Date(dateString), 'yyyy');


  if (!roa || roa.length === 0) {
    return (
      <div className='text-white bg-black rounded-2xl h-64 font-semibold text-2xl flex justify-center items-center'>
          No chart data available
      </div>);
  }


  return (
  
      <div className='m-3 h-64  md:h-72 bg-black hover:border-4 hover:shadow-md hover:border-white rounded-xl px-2 py-7'>
        <ResponsiveContainer width="100%">
          <div className='flex w-full justify-center'>
            <p className='text-lime-400 font-semibold text-xl'>Return on asset</p>
          </div>
          <AreaChart width={500} height={400} data={roa} >
                <Tooltip/>
                <Area dataKey={"v"} type="monotone" stroke={`${roa[0].v>roa[roa.length-1].v? "#a3e635":"#ff5e54"}`} strokeWidth={2} fill= {`${roa[0].v>roa[roa.length-1].v? "#a3e635":"#ff5e54"}`}fillOpacity={0.3} />

                <XAxis dataKey={"period"} tickFormatter={formatYear} reversed/>
                
            </AreaChart>
            
        </ResponsiveContainer>
         
      </div>
    
  )
}
