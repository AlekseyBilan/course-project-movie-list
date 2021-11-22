import React, {useState} from 'react';
import Button from '../Button/Button';
import './Search.scss';
import styled from "styled-components";

const Input = styled.input`
    color: palevioletred;
    font-size: 20px;
    margin: 10px;
    padding: 5px 20px;
    border: 2px solid palevioletred;
    border-radius: 3px;

    ::before {
        content: "🚀";
    }
    
    :hover {
        color: red;
    }

    ::placeholder {
        color: goldenrod;
    }
`;

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
            <h3>Search section:</h3>
            <Input
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