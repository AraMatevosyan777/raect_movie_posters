import React, { useState } from 'react';
import  '../../../App.css';
import classNames from 'classnames';

const Paginator = (props) => {
    let pagesCount = Math.ceil(props.totalPostersCount/10);
    let pages=[]
    for(let i = 1; i<= pagesCount; i++){
        pages.push(i)
    }
    let portionSize = 10;
    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    return(
        <div className='paginator'>
            {portionNumber > 1 &&
               <a onClick={() => { setPortionNumber(portionNumber - 1) }}>&laquo;</a>
            }
            {pages.filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map(page => <a onClick={()=> props.getPosters(page)} 
                className={classNames(props.page === page && 'selectedPage')}>{page}</a>)
            }
            {portionCount > portionNumber &&
               <a onClick={() => { setPortionNumber(portionNumber + 1) }}>&raquo;</a>
            }
        </div>
    )
}
export default Paginator;