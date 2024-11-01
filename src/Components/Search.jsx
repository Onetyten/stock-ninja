import React, { useContext, useEffect, useState } from 'react'
import { ApiInfo } from '../APIS/Context'
import SearchResults from './SearchResults'


export default function Search() {
    const{mockSearchResults, SearchInput,setSearchInput,SearchResult,setSearchResult,SearchLoading} = useContext( ApiInfo)
    const[input,setInput] = useState("")
    const[previnput,setPrevInput] = useState("")
    const[preSearch,setPrevSearch] = useState("")
    const[bestMatches, setBestMatches] = useState([])



    const clear = ()=>{
        setInput("")
        setSearchInput(input)
        setBestMatches([])
    }

    const updateBestMatches = ()=>{

        setSearchInput(input)
        if (setSearchResult!=null){
        setBestMatches(SearchResult.result)

        }
        console.log(SearchResult.results)

    }

    useEffect(()=>{
      setBestMatches(SearchResult?.result)
    },[SearchResult])



  return ( 
    

    <div className='flex items-center m-3 relative mt-8 text-black text-lg '>
      <input type="text" value={input} placeholder='Search Stock... ' className='w-full px-4 rounded-full py-4 focus:outline-none backdrop-blur-lg text-sm font-semibold' onChange={(event) =>{
        setInput(event.target.value)
        
      }} onKeyDown={(event)=>{
        if (event.key === "Enter"){
          updateBestMatches() 
        }
      }}/>
      {input&&(<i className='fa-x fa-solid absolute right-4 text-my-mossy-green m-1' onClick={clear}></i>)}
      {/* {input&&bestMatches.length>0?<SearchResults results={bestMatches}/>:null} */}
      {input&&bestMatches?.length>0?<SearchResults results={bestMatches}/>:null}


    </div>
  )
}
