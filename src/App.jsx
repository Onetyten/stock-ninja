import { useState,useContext} from 'react'
import Header from './Components/Header'
import Card from './Components/Card'
import Chart from './Components/Chart'
import MyStocks from './Components/MyStocks'
import Details from './Components/Details'
import Nav from './Components/Nav'
import SideBar from './Components/SideBar'
import { MyProvider } from './APIS/Context'
import { ApiInfo } from './APIS/Context'



function App() {
  const {} = useContext(ApiInfo)
  const [showSide,setShowSide] = useState(true)
  return (
    <MyProvider>
      <main className='w-screen flex flex-col md:flex-row bg-gradient-to-tr from-my-Charcoal to-my-mossy-green text-white '>
        <div className='w-screen h-16 md:w-2/6 md:min-h-screen '>
          <Nav/>
        </div>
        <div className='grid w-full min-h-screen grid-cols-1 md:grid-cols-3 auto-rows-[70px] auto-cols-fr gap-6 font-quicksandrelative'>
          <div className='row-span-2'>
            <Header showSide ={showSide} setShowSide = {setShowSide}/>
          </div>
          <div className='row-span-3 mt-2'>
            <Details/>
          </div>
          <div>
            <Chart/>
          </div>
          
        </div>
      </main>
    </MyProvider>
  )
}

export default App
