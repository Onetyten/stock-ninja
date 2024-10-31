import { useState,useContext} from 'react'
import Header from './Components/Header'

import Nav from './Components/Nav'
import SideBar from './Components/SideBar'
import { MyProvider } from './APIS/Context'
import { ApiInfo } from './APIS/Context'
import WatchList from './Components/WatchList'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import HomePage from './Components/HomePage'
import Analytics from './Components/Analytics'
import NotFound from './Components/NotFound'
import News from './Components/News'



function App() {
  const {} = useContext(ApiInfo)
  const [showSide,setShowSide] = useState(true)
  return (
    <Router>
      <MyProvider>
        <main className='w-screen flex flex-col md:flex-row min-h-screen bg-gradient-to-tr from-my-Charcoal to-my-mossy-green text-white '>
          <div className='w-screen h-16 md:w-2/6 md:min-h-screen '>
            <Nav/>
          </div>
          <div className='row-span-1 md:col-span-3'>
            <Header showSide ={showSide} setShowSide = {setShowSide}/>
          </div>


            <Routes>
              <Route path='/' element={<HomePage/>}></Route>
              <Route path='/Analytics' element={<Analytics/>}></Route>
              <Route path='/News' element={<News/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>
              
            </Routes>
            
          
        </main>
      </MyProvider>
    </Router>

  )
}

export default App
