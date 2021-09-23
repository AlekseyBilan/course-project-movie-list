import './App.css';
import React from 'react';
import Title from './components/Title';
import MovieList from './components/MovieList/MovieList';

function App(props) {
  console.log('props = ', props);
  return (  
    <div className="App">
      <Title titleText={'Main title'}/>
      <MovieList props={props}/>
    </div>
  );
}

export default App;
