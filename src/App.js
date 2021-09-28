import './App.css';
import React from 'react';
import Title from './components/Title/Title';
import MovieList from './components/MovieList/MovieList';
import Checkbox from './components/Checkbox/Checkbox';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';

function App(props) {
  const checkedHandler = (state) => {
    console.log('I am checkedHandler from App', state);
  }

  return (  
    <Router>
      <Switch>
        <Route path='/home'>
          <MovieList props={props}/>
        </Route>
        <Route path='/checkbox'>
          <Title titleText={'Welcome on Checbox example'} />
          <Checkbox checkedHandler={checkedHandler}/>
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

export default App;
