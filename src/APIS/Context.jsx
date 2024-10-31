import { createContext, useEffect, useState } from "react";
import { ApiClient,DefaultApi } from "finnhub";

const ApiInfo = createContext({}) 
const api_key = ApiClient.instance.authentications["api_key"]
api_key.apiKey = "cs2dfehr01qpjum5t430cs2dfehr01qpjum5t43g"
const finnhubClient = new DefaultApi()
















const MyProvider = ({children})=>{

    // Data to be displayed on the page like
    const [SearchInput,setSearchInput] = useState("AAPL")
    const [SearchResult,setSearchResult] = useState([])
    const [SearchLoading,setSearchLoading] = useState(true)
    const [showSidebar,setShowSidebar] = useState(false)
    const [currentSymbol,setCurrentSymbol] = useState("AAPL")
    const [companyProfile,setCompanyProfile] = useState([])
    const [stockQuote,setStockQuote] = useState()

    const [salesPerShare,setSalesPerShare] = useState([])
    const [earningPerShare,setEarningPerShare] = useState([])
    const [totalRatio,setTotalRatio] = useState([])
    const [roa,setRoa] = useState([])
    const [cashRatio,setCashRatio] = useState([])
    const [grossMargin,setGrossMargin] = useState([])
    const [priceEarning,setPriceEarning] = useState([])
    const [news,setNews] = useState([])




    // eps

    // watchlist data arrays
    const [watchList,setWatchList] = useState([])
    const [watchListData,setWatchListData] = useState([])

    



    useEffect(()=>{
        setSearchLoading(true)
        // console.log("loading: ",SearchLoading)
        finnhubClient.symbolSearch(SearchInput, (error, data, response) => {
        setSearchResult(data)
        setSearchLoading(false)
      });


    },[SearchInput])



    useEffect(()=>{
      finnhubClient.companyProfile2({'symbol': currentSymbol}, (error, companydata, response) => {
      setCompanyProfile(companydata)});

      finnhubClient.quote(currentSymbol, (error, quotedata, response) => {
        setStockQuote(quotedata)
      });

      finnhubClient.companyBasicFinancials(currentSymbol, "all", (error, data, response) => {
        setSalesPerShare(data?.series.annual.salesPerShare)
        setEarningPerShare(data?.series.annual.eps)
        setTotalRatio(data?.series.annual.totalRatio)
        setRoa(data?.series.annual.roa)
        setCashRatio(data?.series.annual.cashRatio)
        setGrossMargin(data?.series.annual.grossMargin)
        setPriceEarning(data?.series.annual.pe)
        console.log(data)
      });

      
      finnhubClient.companyNews(currentSymbol, "2024-09-01", "2024-10-01", (error, data, response) => {
        setNews(data)
        console.log(news)
      });


    },[currentSymbol])


    useEffect(()=>{
      getWatchList()
    },[watchList])


    function getWatchList(){
      if(companyProfile.length ===0){
        return
      }
      const data = {
        watchdata: companyProfile,
        watchquote:stockQuote,
        watchChart:salesPerShare
      }
      if (watchList.includes(data.watchdata.ticker)){
        setWatchListData(prevData=>[...prevData,data])
        console.log(watchListData)
      }  
    }





   function handleShowSideBar(){
    setShowSidebar(!showSidebar)
   }


    
    return(
        <ApiInfo.Provider value={{SearchInput,setSearchInput,SearchResult,setSearchResult,handleShowSideBar,showSidebar,setShowSidebar,SearchLoading,currentSymbol,setCurrentSymbol,companyProfile,setCompanyProfile,stockQuote,setStockQuote,salesPerShare,setSalesPerShare,watchList,setWatchList,watchListData,setWatchListData,earningPerShare,totalRatio,roa,cashRatio,grossMargin,priceEarning,news,setNews}}>
            {children}
        </ApiInfo.Provider>
    )
}

export {ApiInfo,MyProvider}