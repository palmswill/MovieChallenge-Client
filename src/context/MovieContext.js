import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';


export const MovieSearchContext = createContext();


const MovieSearchContextProvider = (props) => {
    ///the word used when hit the search bar
    const [searchWord, setSearchWord] = useState("");
    ///the result of the search
    const [searchResult, setSearchResult] = useState([]);
    ///If any error message apear 
    const [errorMessage,setErrorMessage]=useState("");
    ///NominationList,capture nomination in local storage, if not then init state with any empty list
    const [nomination,setNomination]=useState(JSON.parse(localStorage.getItem("nomination"))||[]);


   

    useEffect(() => {
        ///send nomination to local storage if changes
        
            localStorage.setItem("nomination",JSON.stringify(nomination));
        
    }, [nomination])


    


    /// Search for Movie List when Receiving the search word (Submitted by Searchbar.js),if error, clear searchword.
    useEffect(() => {
        const fetchMovie = async () => {
            await axios.get("https://www.omdbapi.com/?apikey=de8db41f&s=" + searchWord)
                .then(res => {
                    if (res.data.Response === "False") {
                        setErrorMessage(res.data.Error.slice(0, -1) + " for  " + searchWord)
                        setSearchWord("")
                    }
                    else {
                        setSearchResult(res.data.Search)
                        setErrorMessage("")
                        

                    }
                })
        }
        ///intentionally delay search to show loading animation;
        if (searchWord.length>1){
            setSearchResult([]);
            setTimeout(()=>{
                fetchMovie()
            },100)
        }
    }, [searchWord])



    return (
        <MovieSearchContext.Provider value={{ searchWord,setSearchResult, setSearchWord, searchResult,errorMessage, setErrorMessage,nomination,setNomination }}>
            {props.children}
        </MovieSearchContext.Provider>
    )

}

export default MovieSearchContextProvider

