import React from 'react';
import './MoviePoster.css';

const MoviePoster = (props) => {
    return(
        <div className='moviePage'>
            <div className='movieTitle'><h3>{props.moviePoster.Title}</h3></div>
            <div className='moviePoster'>
                <img src={props.moviePoster.Poster}/>
            </div>
            <div className='aboutMovie'>
                <div className="movieItem">
                    <div>Year</div>
                    <div>{props.moviePoster.Year}</div>
                </div>
                <div className="movieItem">
                    <div>Released</div>
                    <div>{props.moviePoster.Released}</div>
                </div>
                <div className="movieItem">
                    <div>Runtime</div>
                    <div>{props.moviePoster.Runtime}</div>
                </div>
                <div className="movieItem">
                    <div>Genre</div>
                    <div>{props.moviePoster.Genre}</div>
                </div>
                <div className="movieItem">
                    <div>Writer</div>
                    <div>{props.moviePoster.Writer}</div>
                </div>
                <div className="movieItem">
                    <div>Actors</div>
                    <div>{props.moviePoster.Actors}</div>
                </div>
                <div className="movieItem">
                    <div>Plot</div>
                    <div>{props.moviePoster.Plot}</div>
                </div>
                <div className="movieItem">
                    <div>Language</div>
                    <div>{props.moviePoster.Language}</div>
                </div>
                <div className="movieItem">
                    <div>Country</div>
                    <div>{props.moviePoster.Country}</div>
                </div>
                <div className="movieItem">
                    <div>Awards</div>
                    <div>{props.moviePoster.Awards}</div>
                </div>
                 
            </div>
            
        </div>
    )
}

export default MoviePoster;