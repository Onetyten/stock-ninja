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
      <main className='grid bg-my-Dark-teal w-full min-h-screen bg-gradient-to-tr from-my-Charcoal to-my-mossy-green grid-cols-1 md:grid-cols-3 auto-rows-[70px] auto-cols-fr gap-6 font-quicksand text-white '>
        <div>
          <Nav/>
        </div>
      </main>
    </MyProvider>
  )
}

export default App
