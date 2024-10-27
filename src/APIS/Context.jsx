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
    const [salesdiff,setSalesDiff] = useState(0)

    



    useEffect(()=>{
        setSearchLoading(true)
        // console.log("loading: ",SearchLoading)
        finnhubClient.symbolSearch(SearchInput, (error, data, response) => {
        console.log(data)
        setSearchResult(data)
        setSearchLoading(false)
      });


    },[SearchInput])



    useEffect(()=>{
      finnhubClient.companyProfile2({'symbol': currentSymbol}, (error, companydata, response) => {
      setCompanyProfile(companydata)});

      finnhubClient.quote(currentSymbol, (error, quotedata, response) => {
        console.log(quotedata)
        setStockQuote(quotedata)
      });

      finnhubClient.companyBasicFinancials(currentSymbol, "all", (error, data, response) => {
        console.log(data.series.annual.salesPerShare)
        setSalesPerShare(data.series.annual.salesPerShare)
        setSalesDiff(salesPerShare[1]<salesPerShare[salesPerShare.length-1])
        console.log(salesdiff)
      });

    },[currentSymbol])





   function handleShowSideBar(){
    setShowSidebar(!showSidebar)
   }


    
    return(
        <ApiInfo.Provider value={{SearchInput,setSearchInput,SearchResult,setSearchResult,handleShowSideBar,showSidebar,setShowSidebar,SearchLoading,currentSymbol,setCurrentSymbol,companyProfile,setCompanyProfile,stockQuote,setStockQuote,salesPerShare,setSalesPerShare}}>
            {children}
        </ApiInfo.Provider>
    )
}

export {ApiInfo,MyProvider}