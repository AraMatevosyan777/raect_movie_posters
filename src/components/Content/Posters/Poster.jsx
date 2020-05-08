import React from 'react';
import '../../../App.css';
import posterImg from '../../../assets/img/movie_img.png';
import { NavLink } from 'react-router-dom';

const Poster = (props) => {
    return(
        <div className="poster">
            <h3>{props.poster.Title}</h3>
            <NavLink to='./movie_poster'>
            <img onClick={()=> props.getMoviePoster(props.poster.Title)} src={props.poster.Poster === "N/A" ? posterImg : props.poster.Poster}/>
            </NavLink>
            <p>{props.poster.Year}</p>
        </div>
    )
}
export default Poster;