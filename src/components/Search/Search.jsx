import React, {Component} from 'react';
import Button from '../Button/Button';


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: null,
            searchResults: null,
        };

        this.btnClickHandler = this.btnClickHandler.bind(this);
        this.keyUpHendler = this.keyUpHendler.bind(this);
    }

    btnClickHandler = () => {
        console.log('Yeah!', this.state.searchQuery);
        this.props.searchHandler(this.state.searchQuery)
    };

    keyUpHendler = (e) => {
        if(e.keyCode === 13 && this.state.searchQuery ){
            this.btnClickHandler();
        } else {
            this.setState({
                searchQuery: e.target.value,
            })
        }
    };

    render() {
        return (
            <div className='search-container'>
                <input 
                    className="search-query"
                    type="text"
                    placeholder="Type search query here, to get results"
                    onKeyUp={this.keyUpHendler}
                />
                <Button
                    type="button"
                    text="Search" 
                    onClick={this.btnClickHandler}
                    cName={'btn search-button'}
                    disabled={false}
                />
            </div>
        )
    }
}

export default Search;