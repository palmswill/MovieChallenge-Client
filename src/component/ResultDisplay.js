import React, { useContext } from 'react';
import { MovieSearchContext } from '../context/MovieContext';
import DisplayCard from './ResultDisplayCard/DisplayCard';
import resultDisplayStyle from './ResultDisplay.module.css';
import Loader from 'react-loader-spinner';


///display container displaying  search result 
const ResultDisplay = () => {

    const { nomination, setNomination, setErrorMessage, setSearchResult, setSearchWord, searchWord, searchResult } = useContext(MovieSearchContext);

    const handleClearSearch = () => {
        setSearchResult([]);
        setSearchWord("");

    }
    const handleClearNomination = () => {
        setErrorMessage("");
        setNomination([]);

    }
    

    ///if searching, display result according to year of release, else,display empty text
    return (
        <div>
            <div className={resultDisplayStyle.nominationCount}> Current Nomination Count: {nomination.length}/5 <button onClick={() => handleClearNomination()}>Remove all nominations</button><button onClick={() => { handleClearSearch() }}>Clear Search</button></div>
            {searchWord.length ? (
                //// determine if search appear
                <div className="resultDisplay">
                    {searchResult.length ? (
                        //// if searchResult apear, display result, if not display loading screen
                        <div>
                            <div className={resultDisplayStyle.searchTitle}>{"Result for: \"" + searchWord + "\""}</div>
                            <div className={resultDisplayStyle.resultDisplayGrid}>
                            {
                                searchResult.sort((a, b) => 
                                b.Year - a.Year)
                                .map(result => { return (<DisplayCard key={result.imdbID} info={result} />) })}</div>
                        </div>) : (
                            <div className={resultDisplayStyle.emptyDisplay}>
                                <Loader
                                    id="loader"
                                    type="Grid"
                                    color="#00BFFF"
                                    height={50}
                                    width={50}
                                />
                            </div>
                        )}

                </div>
            ) : (
                    /// if no search, create empty display
                    <div className={resultDisplayStyle.emptyDisplay}>
                        <h1>Enter Your Favorite Movie to Start Nomination!</h1>
                    </div>
                )
            }
        </div>







    )
}

export default ResultDisplay;