import { useState } from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import Chart from './Components/Chart'
import MyStocks from './Components/MyStocks'
import Details from './Components/Details'
import Nav from './Components/Nav'
import { MyProvider } from './APIS/Context'



function App() {
  
  return (
    <MyProvider>
      <main className='w-screen flex flex-col md:flex-row'>
        <div className='w-screen h-16 md:w-2/6 md:min-h-screen '>
          <Nav/>
        </div>
        <div className='grid bg-my-Dark-teal w-full min-h-screen grid-cols-1 md:grid-cols-3 auto-rows-[70px] auto-cols-fr gap-6 font-quicksand text-white '>
        </div>
      </main>
    </MyProvider>
  )
}

export default App
