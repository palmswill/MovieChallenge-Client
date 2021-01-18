
import React,{useContext} from 'react';
import { MovieSearchContext } from '../../context/MovieContext';
import displayCardStyle from './DisplayCard.module.css';





const DisplayCard=({info})=>{
    const {errorMessage,setErrorMessage,nomination,setNomination}=useContext(MovieSearchContext);

    ///what happen when nomination button is clicked

    const handleNomination=(title)=>{
        if (nomination.length<5){
        setNomination([...nomination,title])
        if (errorMessage.length){
            setErrorMessage("");
        }
        if (nomination.length===4){
            setErrorMessage("You have now reached 5 Nomination")

        }

        }
        ///send nomination error if try to add more than 5
        else{
            setErrorMessage("Maximum Nomination reached!")

        }
    }
    

    return(
        <div className={displayCardStyle.resultDisplay}>
        <div className={displayCardStyle.title}>{info.Title}</div>
        <img id={displayCardStyle.poster} src={info.Poster} alt={info.title}/>
        <div id={displayCardStyle.poster.infoDisplay}>
            <p>Year: {info.Year}</p>
            <p>Type:{info.Type}</p>
            <p>imdbID: {info.imdbID}</p>
            <button disabled={nomination.includes(info.Title)} onClick={()=>handleNomination(info.Title)}>Nominate</button> 
        </div>    
        </div>
    )



}

export default DisplayCard