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
        <div  className='row-span-3 mt-2 md:col-span-2 md:row-span-5'>
            <CompanyEarnings/>
            <Chart/>
            <EarningChart/>
            <Roa/>
            <CashRatio/>
            <GrossMargin/>
            <PriceEarning/>
            <TotalRatio/>
            
        </div>
    </div>
  )
}
