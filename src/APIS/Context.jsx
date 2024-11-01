import { createContext, useEffect, useState } from "react";
import { ApiClient, DefaultApi } from "finnhub";

const ApiInfo = createContext({}); 
const api_key = ApiClient.instance.authentications["api_key"];
api_key.apiKey = "cs2dfehr01qpjum5t430cs2dfehr01qpjum5t43g";
const finnhubClient = new DefaultApi();

const MyProvider = ({ children }) => {
    // Data to be displayed on the page
    const [SearchInput, setSearchInput] = useState(JSON.parse(localStorage.getItem("searchinput")) || "GM");
    const [SearchResult, setSearchResult] = useState(JSON.parse(localStorage.getItem("searchlist")) || []);
    const [SearchLoading, setSearchLoading] = useState(true);
    const [currentSymbol, setCurrentSymbol] = useState("AAPL");
    const [companyProfile, setCompanyProfile] = useState(JSON.parse(localStorage.getItem("companyProfile")) || []);
    const [stockQuote, setStockQuote] = useState(JSON.parse(localStorage.getItem("quotedata")) || []);

    // Chart data metrics with localStorage initialization
    const [salesPerShare, setSalesPerShare] = useState([]);
    const [earningPerShare, setEarningPerShare] = useState([]);
    const [totalRatio, setTotalRatio] = useState([]);
    const [roa, setRoa] = useState([]);
    const [cashRatio, setCashRatio] = useState([]);
    const [grossMargin, setGrossMargin] = useState([]);
    const [priceEarning, setPriceEarning] = useState([]);
    const [news, setNews] = useState([]);

    // Watchlist data arrays
    const [watchList, setWatchList] = useState(JSON.parse(localStorage.getItem("watchList")) || []);
    const [watchListData, setWatchListData] = useState(JSON.parse(localStorage.getItem("watchListData")) || []);

    useEffect(() => {
        setSearchLoading(true);
        finnhubClient.symbolSearch(SearchInput, (error, data, response) => {
            setSearchResult(data);
            setSearchLoading(false);
            localStorage.setItem("searchinput", JSON.stringify(SearchInput));
            localStorage.setItem("searchlist", JSON.stringify(SearchResult));
        });
    }, [SearchInput]);

    useEffect(() => {
        finnhubClient.companyProfile2({ 'symbol': currentSymbol }, (error, companydata, response) => {
            setCompanyProfile(companydata);
            localStorage.setItem("companyProfile", JSON.stringify(companydata));
        });

        finnhubClient.quote(currentSymbol, (error, quotedata, response) => {
            setStockQuote(quotedata);
            localStorage.setItem("quotedata", JSON.stringify(quotedata));
        });

        finnhubClient.companyBasicFinancials(currentSymbol, "all", (error, data, response) => {
            setSalesPerShare(data?.series.annual.salesPerShare);
            setEarningPerShare(data?.series.annual.eps);
            setTotalRatio(data?.series.annual.totalRatio);
            setRoa(data?.series.annual.roa);
            setCashRatio(data?.series.annual.cashRatio);
            setGrossMargin(data?.series.annual.grossMargin);
            setPriceEarning(data?.series.annual.pe);
            console.log(data);
        });

        finnhubClient.companyNews(currentSymbol, "2024-09-01", "2024-10-01", (error, data, response) => {
            setNews(data);
            localStorage.setItem("news", JSON.stringify(data));
            console.log(news);
        });
    }, [currentSymbol]);

    useEffect(() => {
      localStorage.setItem("watchList", JSON.stringify(watchList));
    }, [watchList]);
    
    useEffect(() => {
      localStorage.setItem("watchListData", JSON.stringify(watchListData));
    }, [watchListData]);

    useEffect(() => {
        getWatchList();
    }, [watchList]);

    function getWatchList() {
        if (companyProfile?.length === 0) {
            return;
        }
        const data = {
            watchdata: companyProfile,
            watchquote: stockQuote,
            watchChart: salesPerShare
        };
        if (watchList?.includes(data.watchdata?.ticker)) {
            setWatchListData(prevData => [...prevData, data]);
            console.log(watchListData);
        }
    }

    return (
        <ApiInfo.Provider value={{
            SearchInput,
            setSearchInput,
            SearchResult,
            setSearchResult,
            SearchLoading,
            currentSymbol,
            setCurrentSymbol,
            companyProfile,
            setCompanyProfile,
            stockQuote,
            setStockQuote,
            salesPerShare,
            setSalesPerShare,
            earningPerShare,
            setEarningPerShare,
            totalRatio,
            setTotalRatio,
            roa,
            setRoa,
            cashRatio,
            setCashRatio,
            grossMargin,
            setGrossMargin,
            priceEarning,
            setPriceEarning,
            watchList,
            setWatchList,
            watchListData,
            setWatchListData,
            news,
            setNews
        }}>
            {children}
        </ApiInfo.Provider>
    );
};

export { ApiInfo, MyProvider };
