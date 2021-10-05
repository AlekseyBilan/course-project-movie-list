import './App.css';
import React, {Component} from 'react';
import Title from './components/Title/Title';
import MovieList from './components/MovieList/MovieList';
import Checkbox from './components/Checkbox/Checkbox';
import Checkbox2 from './components/Checkbox/Checkbox2';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import UseState from './components/Hooks/UseState';
import Search from './components/Search/Search';
import {apiKey, getMoviesUrl, language} from './AppSettings';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        isLoaded: null,
        items: null,
        isChecked: true,
    };
  }

  checkedHandler = (checkBoxState) => {
    console.log('checkBoxState = ', checkBoxState);
    this.setState((state)=>({isChecked: !state.isChecked}))
  }

  searchHandler = (searchQuery) => {
    fetch(`${getMoviesUrl}?api_key=${apiKey}&language=${language}&query=${searchQuery}`)
    .then(res => res.json())
    .then(
      (result) => {
        console.log('result = ', result);
        this.setState({
          isLoaded: true,
          items: result
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  render() {
    console.log('App rendered');
    return (  
      <Router>
        <Switch>
          <Route path='/search'>
            <Search searchHandler={this.searchHandler}/>
          </Route>
          <Route path='/checkbox2'>
            <Checkbox2 onChangeHendler={this.checkedHandler} isChecked={this.state.isChecked}/>
          </Route>
          <Route path='/home'>
          <Search searchHandler={this.searchHandler}/>
            <MovieList props={this.state.items}/>
          </Route>
          <Route path='/hooks'>
            <UseState/>
          </Route>
          <Route path='/checkbox'>
            <Title titleText={'Welcome on Checbox example'} />
            <Checkbox checkedHandler={this.checkedHandler} isChecked />
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
