
import React, { useContext } from 'react';
import { MovieSearchContext } from '../../context/MovieContext';
import displayCardStyle from './DisplayCard.module.css';





const DisplayCard = ({ info }) => {
    const { setErrorMessage, nomination, setNomination } = useContext(MovieSearchContext);

    ///what happen when nomination button is clicked

    const handleNomination = (title) => {
        if (nomination.length < 5) {
            setNomination([...nomination, { title: info.Title, poster: info.Poster }])
        }
        ///send nomination error if try to add more than 5
        else {
            setErrorMessage("Maximum Nomination reached!")

        }
    }

    return (
        <div className={displayCardStyle.resultDisplay}>
            <div className={displayCardStyle.title}>{info.Title}</div>
            <img id={displayCardStyle.poster} src={info.Poster} alt={info.title} />
            <div id={displayCardStyle.poster.infoDisplay}>
                <p>Year: {info.Year}</p>
                <p>Type:{info.Type}</p>
                <p>imdbID: {info.imdbID}</p>
                {/*filter if any tiltle in nomination fits the current title, if there is more than one, disable button*/}
                <button disabled={nomination.filter(nominate => nominate.title === info.Title).length ? (true) : (false)} onClick={() => handleNomination(info.Title)}>Nominate</button>
            </div>
        </div>
    )



}

export default DisplayCard