import React, {useState} from 'react';
import Button from '../Button/Button';

function Search (props) {
    const [searchQuery, SetSearchQuery] = useState(null);

    const btnClickHandler = () => {
        props.searchHandler(searchQuery)
    };

    const keyUpHendler = (e) => {
        if(e.keyCode === 13 && searchQuery ){
            btnClickHandler();
        } else {
            SetSearchQuery(e.target.value)
        }
    };

    return (
        <div className='search-container'>
            <input 
                className="search-query"
                type="text"
                placeholder="Type search query here, to get results"
                onKeyUp={keyUpHendler}
            />
            <Button
                type="button"
                text="Search" 
                onClick={btnClickHandler}
                cName={'btn search-button'}
                disabled={false}
            />
        </div>
    )
}

export default Search;