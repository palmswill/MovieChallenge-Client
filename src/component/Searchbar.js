import React, { useState, useContext } from 'react';

import { MovieSearchContext } from '../context/MovieContext';


const SearchBar = () => {

    const { setErrorMessage, setSearchWord, errorMessage } = useContext(MovieSearchContext);


    const [searchValue, setSearchValue] = useState("");



///check submit value, id value send value to moviecontext
    const handleSubmit = (e) => {

        e.preventDefault();
        if (searchValue.length) {
            ///check if submit value is English, if so, submit to moviecontext to send to api for search
            if (!/^[a-zA-Z0-9 ]+$/.test(searchValue)) {
                setErrorMessage("Entry must only be English or Number!")
            }
            else {
                setSearchWord(searchValue);
            }
        }
        else {
            setErrorMessage("")
        }
        setSearchValue("");
    }

    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    }

    const ErrorDisplay = (message) => {
        return message.length > 1 ?
        ///if error is reaching 5 nomination, display green alert, all other errors display red
            (message==="You have now reached 5 Nomination"?(<div className="alert-green searchFlex">{message}</div>):(
            
            <div className="alert-red searchFlex">{message}</div>)) : (<div className="alert-empty searchFlex"></div>)

    }



    return (
        <div id="searchArea">
            <form className="searchFlex" onSubmit={handleSubmit}>
                <input id="searchBar" value={searchValue} onChange={handleSearchBarChange} type="text" placeholder="Search for your farovite movie!" name="search" />
                <button id="searchButton" type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div>{
                ErrorDisplay(errorMessage)}
            </div>
        </div>
    )

}



export default SearchBar