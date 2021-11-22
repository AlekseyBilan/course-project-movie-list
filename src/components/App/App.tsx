import './App.scss';
import * as React from 'react';
import Title from '../Title/Title';
import Checkbox from '../Checkbox/Checkbox';
import Checkbox2 from '../Checkbox/Checkbox2';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import UseState from '../Hooks/UseState';
import Search from '../Search/Search';
import UseEffect from '../Hooks/UseEffect';
import UseRef from '../Hooks/UseRef';
import Sort from '../Sort/Sort';
import Test from '../Test';

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

  searchHandler = (searchQuery: string) => {
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
            <Sort items={this.state.items}/>
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
          <Route path='/test'>
            <Test/>
          </Route>
          <Route path='/checkbox'>
            <Title titleText={'Welcome on Checkbox example'} />
            <Checkbox checkedHandler={this.checkedHandler} isChecked />
            <Link to='/home'>go home</Link>
          </Route>        
          <Route path='/'>
            <Title titleText={'Welcome at Movie-list App'} />
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
