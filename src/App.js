import './App.css';
import React, {Component} from 'react';
import Title from './components/Title/Title';
import MovieList from './components/MovieList/MovieList';
import Checkbox from './components/Checkbox/Checkbox';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Test from './components/Test';
import Search from './components/Search/Search';
import {apiKey, getMoviesUrl, language} from './AppSettings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        searchResults: null,
    };
  }

  checkedHandler = (state) => {
    console.log('I am checkedHandler from App', state);
  }

  getData = (searchQuery) => {
    return async () => {
      const result = await fetch(`${getMoviesUrl}?api_key=${apiKey}&language=${language}&query=${searchQuery}`);
      const movies = await result.json();
      console.log('M = ', movies);
      return movies;
    };
  }

  searchHandler = (searchQuery) => {
    console.log('1 URL = ', `${getMoviesUrl}?api_key=${apiKey}&language=${language}&query=${searchQuery}`)
    
    console.log('I am checkedHandler from App', searchQuery);

    this.setState( () => {
      searchResults: this.getData(searchQuery)
    }
  )
  }

  render() {
    return (  
      <Router>
        <Switch>
          <Route path='/search'>
            <Search searchHandler={this.searchHandler}/>
          </Route>
          <Route path='/home'>
            <MovieList props={this.props}/>
          </Route>
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/checkbox'>
            <Title titleText={'Welcome on Checbox example'} />
            <Checkbox checkedHandler={this.checkedHandler}/>
            <Link to='/home'>go home</Link>
          </Route>        
          <Route path='/'>
            <Title titleText={'Welcome on blblabla'} />
            <Link to='/home'>go home</Link>
            <Link to='/checkbox'>go checkbox</Link>
          </Route>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
