import './App.scss';
import * as React from 'react';
import Title from './components/Title/Title';
import MovieList from './components/MovieList/MovieList';
import Checkbox from './components/Checkbox/Checkbox';
import Checkbox2 from './components/Checkbox/Checkbox2';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import UseState from './components/Hooks/UseState';
import Search from './components/Search/Search';
import UseEffect from './components/Hooks/UseEffect';
import UseRef from './components/Hooks/UseRef';

interface IProps {
}

interface IState {
  isLoaded: boolean,
  items: any,
  isChecked: boolean,
  error: any
}

class App extends React.Component<IProps, IState> {
  constructor(props:IProps) {
    super(props);
    this.state = {
        isLoaded: false,
        items: null,
        isChecked: true,
        error: null,
    };
  }

  checkedHandler = (checkBoxState: boolean) => {
    this.setState((prevstate)=>({isChecked: !prevstate.isChecked}))
  }

  searchHandler = (searchQuery: string) => {//REACT_APP_MOVIE_URL
    fetch(`${process.env.REACT_APP_MOVIE_URL}?api_key=${process.env.REACT_APP_API_KEY}&language=${process.env.REACT_APP_LANGUAGE}&query=${searchQuery}&sort_by=popularity.asc`)
    .then(res => res.json())
    .then(
      (result) => {
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
          <Route path='/usestate'>
            <UseState/>
          </Route>
          <Route path='/useeffect'>
            <UseEffect/>
          </Route>
          <Route path='/useref'>
            <UseRef/>
          </Route>
          <Route path='/checkbox'>
            <Title titleText={'Welcome on Checbox example'} />
            <Checkbox checkedHandler={this.checkedHandler} isChecked />
            <Link to='/home'>go home</Link>
          </Route>        
          <Route path='/'>
            <Title titleText={'Welcome on blblabla'} />
            <Link to='/home'>go home</Link>
            <br/>
            <Link to='/checkbox'>go checkbox</Link>
          </Route>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
