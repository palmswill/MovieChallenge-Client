import React,{useContext} from 'react';
import { MovieSearchContext } from '../context/MovieContext';
import DisplayCard from './ResultDisplayCard/DisplayCard';
import resultDisplayStyle from './ResultDisplay.module.css';


///the grid space for Search Result Cards
const ResultDisplay=()=>{

const {nomination,setNomination,setErrorMessage, errorMessage,setSearchResult,setSearchWord, searchWord,searchResult}=useContext(MovieSearchContext);

const handleClearSearch=()=>{
    setSearchResult([]);
    setSearchWord("");

}
const handleRemoveNomination=()=>{
    setErrorMessage("");
    setNomination([]);

}

///if searching, display result according to year of release, else,display empty text
return searchResult.length?(
    <div className="resultDisplay">
    <div> Current Nomination Count: {nomination.length}/5 <button onClick={()=>handleRemoveNomination()}>Remove all</button><button onClick={()=>{handleClearSearch()}}>Clear Search</button></div>
    <div className={resultDisplayStyle.searchTitle}>{(searchWord.length && !errorMessage.length)?("Result for: \""+searchWord+"\""):("Result for:")}</div>
    <div className={resultDisplayStyle.resultDisplayGrid}>{searchResult.sort((a,b)=>  b.Year-a.Year).map(result=>{return(<DisplayCard key={result.imdbID} info={result}/>)})}</div>
    </div>
):(
    <div className={resultDisplayStyle.emptyDisplay}>
    <div className={resultDisplayStyle.nominationCount}> Current Nomination Count: {nomination.length}/5 <button onClick={()=>setNomination([])}>Remove all</button></div>
    <h1>Enter Your Favorite Movie to Start Nomination!</h1>
    </div>
)









}

export default ResultDisplay;