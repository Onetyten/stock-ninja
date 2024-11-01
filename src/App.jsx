import { useState,useContext} from 'react'
import Header from './Components/Header'

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
        <main className='max-w-screen overflow-x-hidden flex flex-col min-h-screen pb-9 bg-gradient-to-tr from-white to-slate-300 text-white'>
          <div className=''>
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
