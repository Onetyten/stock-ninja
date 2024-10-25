import { createContext, useEffect, useState } from "react";
import { ApiClient,DefaultApi } from "finnhub";

const ApiInfo = createContext({}) 
const api_key = ApiClient.instance.authentications["api_key"]
api_key.apiKey = "cs2dfehr01qpjum5t430cs2dfehr01qpjum5t43g"
const finnhubClient = new DefaultApi()
















const MyProvider = ({children})=>{

    // Data to be displayed on the page like
    const [SearchInput,setSearchInput] = useState("AAPL")
    const [SearchResult,setSearchResult] = useState("")
    const [SearchLoading,setSearchLoading] = useState(true)


    useEffect(()=>{
        setSearchLoading(true)
        // console.log("loading: ",SearchLoading)
        finnhubClient.symbolSearch(SearchInput, (error, data, response) => {
        console.log(data)
        setSearchResult(data)
        setSearchLoading(false)
      });

    },[SearchInput])



    const mockSearchResults=
    {
        "count": 4,
        "result": [
          {
            "description": "APPLE INC",
            "displaySymbol": "AAPL",
            "symbol": "AAPL",
            "type": "Common Stock"
          },
          {
            "description": "APPLE INC",
            "displaySymbol": "AAPL.SW",
            "symbol": "AAPL.SW",
            "type": "Common Stock"
          },
          {
            "description": "APPLE INC",
            "displaySymbol": "APC.BE",
            "symbol": "APC.BE",
            "type": "Common Stock"
          },
          {
            "description": "APPLE INC",
            "displaySymbol": "APC.DE",
            "symbol": "APC.DE",
            "type": "Common Stock"
          }
        ]
      }
    const mockCompanyDetails = 
    {
        "country": "US",
        "currency": "USD",
        "exchange": "NASDAQ/NMS (GLOBAL MARKET)",
        "ipo": "1980-12-12",
        "marketCapitalization": 1415993,
        "name": "Apple Inc", 
        "phone": "14089961010",
        "shareOutstanding": 4375.47998046875,
        "ticker": "AAPL",
        "weburl": "https://www.apple.com/",
        "logo": "https://static.finnhub.io/logo/87cb30d8-80df-11ea-8951-00000000092a.png",
        "finnhubIndustry":"Technology"
    }
     const mockStockQuote= 
{
    "c": 261.74,
    "h": 263.31,
    "l": 260.68,
    "o": 261.07,
    "pc": 259.45,
    "t": 1582641000 
  }

  const convertDateToUnixTimeStamp= (date)=>{
    return Math.floor(date.getTime()/1000)
  }

  const ConverUnixTimeStampToDate=(unixTimeStamp)=>{
    const milliSeconds = unixTimeStamp*1000
    return new Date(milliSeconds).toLocaleDateString
  }

  const createDate = (date,days,weeks,months,years) => {
    let newDate = new Date(date)
    newDate.setDate(newDate.getDate() + days + 7 * weeks)
    newDate.setMonth(newDate.getMonth()+months)
    newDate.setFullYear(newDate.getFullYear()+years)


  } 



    const mockHistoricalData= 
{
    "c": [
      217.68,
      221.03,
      219.89
    ],
    "h": [
      222.49,
      221.5,
      220.94
    ],
    "l": [
      217.19,
      217.1402,
      218.83
    ],
    "o": [
      221.03,
      218.55,
      220
    ],
    "s": "ok",
    "t": [
      1569297600,
      1569384000,
      1569470400
    ],
    "v": [
      33463820,
      24018876,
      20730608
    ]
  }

    
    return(
        <ApiInfo.Provider value={{SearchInput,setSearchInput,SearchResult,setSearchResult, mockSearchResults,mockStockQuote,mockHistoricalData,mockCompanyDetails,convertDateToUnixTimeStamp,ConverUnixTimeStampToDate,createDate}}>
            {children}
        </ApiInfo.Provider>
    )
}

export {ApiInfo,MyProvider}