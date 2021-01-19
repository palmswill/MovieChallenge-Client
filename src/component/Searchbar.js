import React, { useState, useContext } from 'react';

import { MovieSearchContext } from '../context/MovieContext';

///the top search section
const SearchBar = () => {

    const { setErrorMessage, setSearchWord, errorMessage } = useContext(MovieSearchContext);

    ///capturing the searchvalue inside the search bar
    const [searchValue, setSearchValue] = useState("");



    ///check search value if submbitted, check its validity and  send the  value to moviecontext, then clear searchbar whether value is valid or not.
    const handleSubmit = (e) => {

        e.preventDefault();
        if (searchValue.length) {
            ///check if submit value is only English/Number/Space, if so, submit to moviecontext 
            if (!/^[a-zA-Z0-9 ]+$/.test(searchValue)) {
                setErrorMessage("Entry must only be English or Number!")
            }
            else {
                setSearchWord(searchValue);
            }
            setErrorMessage("");
            setSearchValue("");
        }
    }
    ///detect searchvalue in searchbar, if changed update the search value
    const handleSearchBarChange = (e) => {
        setSearchValue(e.target.value);
    }

    const ErrorDisplay = (message) => {
        return message.length > 1 ?
            ///if error is reaching 5 nomination, display green alert, all other errors display red
            (message === "You have now reached 5 Nomination" ? (<div className="alert-green searchFlex">{message}</div>) : (

                <div className="alert-red searchFlex">{message}</div>)) : (<div className="alert-empty searchFlex"></div>)

    }



    return (
        <div id="searchArea">
            <form className="searchFlex" onSubmit={handleSubmit}>
                <input id="searchBar" value={searchValue} onChange={handleSearchBarChange} type="text" placeholder="Search for your farovite movie!" name="search" />
                <button id="searchButton" type="submit"><i className="fas fa-search"></i></button>
            </form>
            <div>{
                ErrorDisplay(errorMessage)
                }
            </div>
        </div>
    )

}



export default SearchBar