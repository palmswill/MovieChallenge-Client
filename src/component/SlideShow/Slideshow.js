import React,{useContext} from 'react';
import { MovieSearchContext } from '../../context/MovieContext';
import slideShowStyle from './SlideShow.module.css';



const SlideShow=()=>{
    const {nomination}=useContext(MovieSearchContext);





    return nomination.length===5?(
        <div className={slideShowStyle.slideShowContainer}>
            {nomination.map((value,index)=>{
                return(
                    <div className={slideShowStyle.slide}>
                        <div className={slideShowStyle.numbertext}>{index+1}/5</div>
                        <img src={value.poster} alt={value.title}/>
                        <div className={slideShowStyle.text}>{value.title}</div>
                    </div>
                )
            }
            )}
            <br/>
            {nomination.map( nominate=>{
                return (<span className={slideShowStyle.dot}></span>)
            }
            )}
        </div>
    ):(<div></div>)






}

export default SlideShow