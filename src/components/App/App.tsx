import './App.scss';
import * as React from 'react';
import { Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import NotFound from '../NotFound/NotFound';
import Search from '../Search/Search';
import Sort from '../Sort/Sort';

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
          <Route path='/home'>
            <Search searchHandler={this.searchHandler}/>
            <Sort items={this.state.items}/>
          </Route>
          <Route path='*' component={NotFound}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
