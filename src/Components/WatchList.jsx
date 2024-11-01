import React, { useEffect } from 'react'
import { ApiInfo } from '../APIS/Context'
import { useContext } from 'react'
import { ResponsiveContainer } from 'recharts'
import { AreaChart } from 'recharts'
import { Tooltip } from 'recharts'
import { XAxis } from 'recharts'
import { Area } from 'recharts'
import { format } from 'date-fns';

export default function WatchList() {
    const{watchList,setWatchList,watchListData,setWatchListData,currentSymbol,setCurrentSymbol} = useContext(ApiInfo)
    const formatYear = (dateString) => format(new Date(dateString), 'yyyy');

    if(watchListData.length === 0){
      return(
        <div className='h-full flex flex-col justify-between px-3 py-10  text-black  m-3  bg-opacity-35 rounded-xl -z-50 shadows-md'>
          <p className='text-lg font-bold'>
              Watchlist
          </p>
          <p className='flex justify-around items-center text-black bg-white p-10 rounded-lg text-lg text-center '>
            Your Stock watchlists will appear here
          </p>
        </div>
      )
    }

    if (!watchListData && watchListData.length === 0 ){
      return(
        <div className='text-black'>
          loading Watchlist
        </div>
      )
    }



  return (
    <div className='h-full flex flex-col justify-between px-3 py-10 text-xs text-black  m-3  bg-opacity-35 rounded-xl -z-50'>
        <p className='text-lg font-bold'>
            Watchlist
        </p>

        {
          watchListData.map((item)=>{
            return(
                  <div className='flex justify-around items-center bg-white p-4 rounded-lg border-2 border-black' onClick={()=>{
                    setCurrentSymbol(item?.watchdata?.ticker)
                    console.log(currentSymbol)
                  }}>
                  <div className='flex text-black flex-col justify-start gap-3'>
                    <p className='text-md font-bold w-28'>{item?.watchdata?.name}</p>
                    <div className='flex justify-start items-center'>
                      <p className='mr-3'>{item?.watchdata?.ticker}</p>
                      <i
                        className="fa-regular fa-eye z-100"
                        onClick={() => {
                          const tickerToRemove = item.watchdata.ticker;

                          // Remove ticker from watchList
                          setWatchList(prevWatchList =>
                            prevWatchList.filter(ticker => ticker !== tickerToRemove)
                          );

                          // Remove data associated with ticker from watchListData
                          setWatchListData(prevWatchListData =>
                            prevWatchListData.filter(data => data.watchdata.ticker !== tickerToRemove)
                          );

                          console.log("Updated watchList:", watchList);
                          console.log("Updated watchListData:", watchListData);
                        }}
                      ></i>
                    </div>
                    
                  </div>

                  <div className=''>
                    <ResponsiveContainer width={50} height={50}>
                      <AreaChart width={500} height={400} data={item.watchChart}>
                            <Area dataKey={"v"} type="monotone"  stroke={`${item?.watchChart[0]?.v>item?.watchChart[item?.watchChart.length-1]?.v? "#a3e635":"#ff5e54"}`}  strokeWidth={2} fill= {"#2b4e33"} fillOpacity={0} />
                        </AreaChart>
                        
                    </ResponsiveContainer>
                  </div>

                  
                  <div className='flex flex-col'>
                      <div className='mb-3'>
                        <p className='text-md text-black font-semibold'>${Math.floor(item?.watchquote?.c )|| "0"}</p>
                      </div>
                      <div>
                        <p className={`${item?.watchquote?.dp<0 ? "text-my-orange" : "text-my-green-light"}`}>{Math.floor(item?.watchquote?.dp) || "0"}%</p>
                      </div>
                  </div>
                </div>






              
            )
          })
        }
        {/* 
            

           





              






              </div>
            )}
              
            
              
          )
  }
        </div> */}

    </div>
  )
}
