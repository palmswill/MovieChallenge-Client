import React, { useContext, useState, useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner';
import { MovieSearchContext } from '../../context/MovieContext';
import slideShowStyle from './SlideShow.module.css';



const SlideShow = () => {
    const { nomination } = useContext(MovieSearchContext);
    /// the slide index
    const [slide, setSlide] = useState(1);
    ///to hold timeout function
    const timeoutRef = useRef();
    ///determine if slider is loading
    const isLoading=useRef(true);



    

   

    

    
    ///change slide to selected slide, reset all other timer
    const hanldeManualChangeSlide = (index) => {
        window.clearTimeout(timeoutRef.current);
        setSlide(index)


    }


    ////setUp time for slide, changes when slide number changes.
    useEffect(() => {
        if (nomination.length) {
            if (slide < nomination.length) {
                timeoutRef.current = window.setTimeout(() => setSlide(slide + 1), 5000);
            }
            else {
                timeoutRef.current = window.setTimeout(() => setSlide(1), 5000);

            }
        }

    }, [slide, nomination.length]);
    
    ////cleartimeout and restart counting if nomination list change
    useEffect(() => {
        ///notice a significant amount of loading time when nomination is 1,added loader,can hide after image since image does not disappear
        if (nomination.length===1){
             isLoading.current=true;
        }
        return () => window.clearTimeout(timeoutRef.current);


    }, [nomination.length])

    // console.log(slide)


    useEffect(()=>{

    })


    return nomination.length ? (
        <div className={slideShowStyle.slideShowContainer}>
            <div className={slideShowStyle.slideSlot}>
                { <div className={slideShowStyle.Loader}  style={{display:isLoading.current?("block"):("none")}}>
                    <Loader
                        id="loader"
                        type="Grid"
                        color="#00BFFF"
                        height={50}
                        width={50}
                    />

                </div> }
                {nomination.map((value, index) => {
                    return (
                        (index + 1 === slide) ? (
                            <div key={index + 1}  onLoad={()=>isLoading.current=false} className={`${slideShowStyle.slide} ${slideShowStyle.show}`}>
                                <div className={slideShowStyle.numberText}>{index + 1 + "/5"} </div>
                                <img className={slideShowStyle.poster} src={value.poster} alt={value.title} />
                                <div className={slideShowStyle.text}>{value.title}</div>
                            </div>
                        ) : (
                                <div key={index + 1}  onLoad={()=>isLoading.current=false}  className={slideShowStyle.slide}>
                                    <div className={slideShowStyle.numberText}>{index + 1 + "/5"} </div>
                                    <img className={slideShowStyle.poster} src={value.poster} alt={value.title} />
                                    <div className={slideShowStyle.text}>{value.title}</div>
                                </div>

                            )
                    )
                }
                )}

            </div>
            <div style={{ textAlign: "center" }}>{nomination.map((value, index) => {
                return (
                    (index + 1 === slide) ?
                        (<span key={index + 1} className={`${slideShowStyle.dot} ${slideShowStyle.active}`}></span>) :
                        (<span key={index + 1} onClick={() => hanldeManualChangeSlide(index + 1)} className={slideShowStyle.dot}></span>)
                )
            }
            )}</div>
        </div>
    ) : (<div></div>)






}

export default SlideShow