import React, { useContext, useState } from 'react'
import { ApiInfo } from '../APIS/Context'
import Card from './Card'
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

export default function Chart() {
  const {mockHistoricalData,ConverUnixTimeStampToDate} = useContext(ApiInfo)
  const [data,setData] = useState(mockHistoricalData)
  const [filter,SetFilter] = useState("1W")
  const formatData = ()=>{
    return data.c.map((item,index)=>{
      return{
        value: item.toFixed(2),
        date: ConverUnixTimeStampToDate(data.t[index])
      }
    })
  }
  return (
    <Card>
      <div className='h-full'>
        <ResponsiveContainer>
          <AreaChart data={formatData(data)}>
            <defs>
              <linearGradient id='chartColor' x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" />

              </linearGradient>
            </defs>
            <Area type="monotone" dataKey="value" stroke="#26c753" fillOpacity={1} strokeWidth={0.5}/>
            <Tooltip/>
            <XAxis dataKey={"date"}/>
            <YAxis domain={["dataMin","dataMax"]}/>
           </AreaChart>

        </ResponsiveContainer>
      </div>
    </Card>
  )
}
