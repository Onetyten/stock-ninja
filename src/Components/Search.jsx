import React, { useContext, useState } from 'react'
import { ApiInfo } from '../APIS/Context'
import SearchResults from './SearchResults'


export default function Search() {
    const{mockSearchResults, SearchInput,setSearchInput,SearchResult,setSearchResult,SearchLoading} = useContext( ApiInfo)
    const[input,setInput] = useState("")
    const[bestMatches, setBestMatches] = useState([])


    const clear = ()=>{
        setSearchInput("")

        // setSearchResult([])
    }

    const updateBestMatches = ()=>{
        setSearchInput(input)
        setBestMatches(SearchResult.result)
        console.log(SearchResult.results)

    }



  return ( 
    

    <div className='flex items-center my-4 border-2 rounded-md relative w-full  border-my-Charcoal'>
      <input type="text" value={input} placeholder='Search Stock... ' className='w-full px-4 py-2 focus:outline-none rounded-md bg-my-Dark-teal backdrop-blur-lg text-sm bg-opacity-60' onChange={(event) =>{
        setInput(event.target.value)
        
      }} onKeyDown={(event)=>{
        if (event.key === "Enter"){
          updateBestMatches() 
        }
      }}/>
      {input&&(<i className='fa-x fa-solid absolute right-4 text-my-mossy-green m-1' onClick={clear}></i>)}
      {input&&bestMatches.length>0?<SearchResults results={bestMatches}/>:null}

    </div>
  )
}
