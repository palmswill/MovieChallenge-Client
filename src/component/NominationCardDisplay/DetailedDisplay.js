
import React, { useContext, useEffect, useState } from 'react';
import { MovieSearchContext } from '../../context/MovieContext';
import detailedDisplayStyle from './DetailedDisplay.module.css';
import axios from "axios";



const DetailedDisplay = ({ title }) => {
    const { nomination, setNomination } = useContext(MovieSearchContext);

    const [info, setInfo] = useState({});





    useEffect(() => {
        const fetchDetail = async () => {
            await axios.get("https://www.omdbapi.com/?apikey=de8db41f&t=" + title+"&plot=full")
                .then(res => {
                    if (res.data.Response === "False") {
                        console.log(res.data.Error)
                    }
                    else {
                        setInfo(res.data)
                    }
                })
            }
            fetchDetail();
        
    }, [title])


    const removeNomination = (title) => {
        setNomination(nomination.filter(name => name.title !== title))

    }

// 



    return Object.keys(info).length?(
        <section id={info.Title+" detail"} className={detailedDisplayStyle.displaygrid}>
            <div className={detailedDisplayStyle.title}>{info.Title}</div>
            <img className={detailedDisplayStyle.poster} src={info.Poster} alt={info.Title}/>
            <div>Language: {info.Language}</div>
            <div>Year of Production: {info.Year}</div>
            <div className={detailedDisplayStyle.genre}>Genre: {info.Genre}</div>
            <div>Meta Score: {info.Metascore}</div>
            <div>Director: {info.Director}</div>
            <div className={detailedDisplayStyle.actors}>Actors: {info.Actors}</div>
            <div className={detailedDisplayStyle.plot} >Main Story: {info.Plot}</div>
            <button className={detailedDisplayStyle.button} onClick={()=>removeNomination(title) }>Remove</button>
        </section>
    ):(
        <section>


        </section>
    )



}

export default DetailedDisplay