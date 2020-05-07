import React, { useState } from 'react';
import '../../App.css';

const Search = (props) => {

    const [value, setValue] = useState('');
    const onSubmit=(e)=>{
        e.preventDefault();
        if(value.trim()){
        props.setSearchValue(value);
        }
    }


    return(
        <form onSubmit={onSubmit} className="search">
            <input type={value}  onChange={(e) => setValue(e.currentTarget.value)}/>
        </form>
    )
}
export default Search;