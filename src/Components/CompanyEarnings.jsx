import { React,useState,useContext} from 'react'
import { ApiInfo } from '../APIS/Context'


export default function CompanyEarnings() {
    const [price,setPrice]= useState(10)
    const [change,setChange]= useState(0)
    const [changePercent,setChangePercent] = useState(0)
    const{mockCompanyDetails,stockQuote,setStockQuote,companyProfile} = useContext(ApiInfo)

  return (
    <div>
        <div className='w-full h-full flex items-center justify-between my-6 '>
            <div className='text-md flex text-center justify-between w-full items-end'>



              <div className=' bg-white text-black w-1/2 m-2 rounded-xl p-2 '>
                <div className='mb-7'>
                  <p className='font-bold' >
                    High price today: 
                  </p>
                  <span className='text-xl text-lime-400 font-bold '>{stockQuote?.h||"0"}</span> 
                </div>

                <div className='mb-7'>
                  <p className='font-bold'>
                    Low price today:
                  </p>
                  <span className='text-xl text-lime-400 font-bold '>{stockQuote?.l||"0"}</span>
                </div>

              </div>

              <div className=' bg-white text-black m-2 w-1/2 rounded-xl p-2'>
                <div className='mb-7'>
                  <p className='font-bold'>
                    Open price today:
                  </p>
                  <span className='text-xl text-lime-400 font-bold '>{stockQuote?.o||"0"}</span>
                </div>

                <div className='mb-7'>     
                  <p className='font-bold'>
                    Old close price:
                  </p>
                  <span className='text-xl text-lime-400 font-bold '>{stockQuote?.pc||"0"}</span>
                </div>

              </div>


            </div>
          </div>
    </div>

  )
}
