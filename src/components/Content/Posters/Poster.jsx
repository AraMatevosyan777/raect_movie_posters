import React from 'react';
import '../../../App.css';
import posterImg from '../../../assets/img/movie_img.png';

const Poster = (props) => {
    return(
        <div className="poster">
            <h3>{props.poster.Title}</h3>
            <img src={props.poster.Poster === "N/A" ? posterImg : props.poster.Poster}/>
            <p>{props.poster.Year}</p>
        </div>
    )
}
export default Poster;