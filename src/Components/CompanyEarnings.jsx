import { React,useState,useContext} from 'react'
import { ApiInfo } from '../APIS/Context'


export default function CompanyEarnings() {
    const [price,setPrice]= useState(10)
    const [change,setChange]= useState(0)
    const [changePercent,setChangePercent] = useState(0)
    const{mockCompanyDetails,stockQuote,setStockQuote,companyProfile} = useContext(ApiInfo)

  return (
    <div>
        <div className='w-full h-full flex items-center justify-between'>
            <div className='text-md flex flex-col items-end gap-1'>
              <p className=''>
                High price of the day: {stockQuote?.h||"0"}
              </p>
              <p>
                Low price of the day: {stockQuote?.l||"0"}
              </p>
              <p>
                Open price of the day:{stockQuote?.o||"0"}
              </p>
              <p>
                Previous close price: {stockQuote?.pc||"0"}
              </p>
            </div>
          </div>
    </div>

  )
}
