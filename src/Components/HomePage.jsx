import React from 'react'
import Chart from './Charts/Chart'
import Details from './Details'
import WatchList from './WatchList'
import Search from './Search'

export default function HomePage() {
  return (
    <div>
        <div className='grid w-full min-h-screen grid-cols-1 md:grid-cols-3 auto-rows-auto auto-cols-fr gap-6 font-quicksandrelative'>
            <Search/>
            <div className=''>
                <Details/>
            </div>
            <div  className='row-span-1 mt-2 md:col-span-2 md:row-span-5'>
                <Chart />
            </div>
            <div className='row-span-7 mt-2 md:col-span-3' >
                <WatchList/>
            </div>
        </div>
    </div>
  )
}
