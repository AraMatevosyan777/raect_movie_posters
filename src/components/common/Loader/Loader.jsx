import React from 'react';
import '../../../App.css';
import loader from '../../../assets/img/loader.svg';

const Loader = () => {
    return(
        <div className="loader">
            <img src={loader}/>
        </div>
    )
}
export default Loader;