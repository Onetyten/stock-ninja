import React from 'react'
import Chart from './Charts/Chart'
import EarningChart from './Charts/EarningChart'
import Roa from './Charts/Roa'
import TotalRatio from './Charts/TotalRatio'
import CashRatio from './Charts/CashRatio'
import GrossMargin from './Charts/GrossMargin'
import PriceEarning from './Charts/PriceEarning'
import CompanyEarnings from './CompanyEarnings'

export default function Analytics() {
  return (
    <div>
        <div  className=' flex flex-col gap-3 md:grid grid-cols-3'>
            <div className='md:col-span-3'>
              <CompanyEarnings/>
            </div>

            <div className='md:col-span-2'>
              <Chart/>  
            </div>

            <div className='md:col-span-1'>
              <EarningChart/>
            </div>

            <div className='md:col-span-3'>
              <Roa/>
            </div>
            <div className='md:col-span-1'>
              <CashRatio/>
            </div>
            <div className='md:col-span-2'>
              <GrossMargin/>
            </div>

            <div className='md:col-span-1'>
              <PriceEarning/>
            </div>
            <div className='md:col-span-2'>
              <TotalRatio/>
            </div>
            
            
        </div>
    </div>
  )
}
