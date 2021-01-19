import React, { useContext, useState, useEffect, useRef } from 'react';
import Loader from 'react-loader-spinner';
import { MovieSearchContext } from '../../context/MovieContext';
import slideShowStyle from './SlideShow.module.css';



const SlideShow = () => {
    const { nomination } = useContext(MovieSearchContext);
    const [slide, setSlide] = useState(1);
    ///to hold timeout function
    const timeoutRef = useRef();

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
        return () => window.clearTimeout(timeoutRef.current);


    }, [nomination.length])

    // console.log(slide);


    return nomination.length > 1 ? (
        <div className={slideShowStyle.slideShowContainer}>
            <div className={slideShowStyle.slideSlot}>
                <div className={slideShowStyle.Loader}>
                    <Loader
                        id="loader"
                        type="Grid"
                        color="#00BFFF"
                        height={50}
                        width={50}
                    />

                </div>
                {nomination.map((value, index) => {
                    return (
                        (index + 1 === slide) ? (
                            <div key={index + 1} className={`${slideShowStyle.slide} ${slideShowStyle.show}`}>
                                <div className={slideShowStyle.numberText}>{index + 1 + "/5"} </div>
                                <img className={slideShowStyle.poster} src={value.poster} alt={value.title} />
                                <div className={slideShowStyle.text}>{value.title}</div>
                            </div>
                        ) : (
                                <div key={index + 1} className={slideShowStyle.slide}>
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