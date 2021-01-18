import React, { useContext } from 'react';
import { MovieSearchContext } from '../context/MovieContext';

import DetailedDisplay from './NominationCardDisplay/DetailedDisplay';


const MovieNomination = () => {

    const { nomination } = useContext(MovieSearchContext);



    return (
    <div id="movieNomination">
        {nomination.map(name => {
            return (
                <DetailedDisplay key={name} title={name} />
            )
        })}
    </div>
    )






}

export default MovieNomination