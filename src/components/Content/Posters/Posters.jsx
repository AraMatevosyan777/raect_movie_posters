import React from 'react';
import '../../../App.css';
import Poster from './Poster';

const Posters = (props) => {
    return(
        <div className="posters">
            {props.posters.map(poster => <Poster poster={poster} getMoviePoster={props.getMoviePoster}/>)}
        </div>
    )
}
export default Posters;