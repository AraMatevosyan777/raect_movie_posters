import React from 'react';
import '../../App.css';
import Search from './Search';
import PostersContainer from './Posters/PostersContainer';
import Paginator from '../common/Paginator/Paginator';

const Content = (props) => {
    return(
        <div className="content">
            <Search setSearchValue={props.setSearchValue}/>
            <div>
                <Paginator totalPostersCount={props.totalPostersCount} getPosters={props.getPosters} page={props.page}/>
                <PostersContainer/>
            </div>
        </div>
    )
}
export default Content;