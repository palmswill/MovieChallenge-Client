import React, { useContext } from 'react';
import { MovieSearchContext } from '../context/MovieContext';

import DetailedDisplay from './NominationCardDisplay/DetailedDisplay';

///the display of movie nominations screen when nomination is selected
const MovieNomination = () => {

    const { nomination } = useContext(MovieSearchContext);

  



    return (
    <div id="movieNomination">
        {nomination.map(nominate => {
            return (
                <DetailedDisplay key={nominate.title} title={nominate.title} />
            )
        })}
    </div>
    )






}

export default MovieNomination