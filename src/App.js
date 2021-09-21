import Movie from './components/Movie/Movie';
import './App.css';
import Title from './components/Title';
//https://www.themoviedb.org/
const filmData =
{
  id: '0001',
  name: 'Riverdale',
  posterUrl: 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg',
  description: 'Set in the present, the series offers a bold, subversive take on Archie, Betty, Veronica and their friends, exploring the surreality of small-town life, the darkness and weirdness bubbling beneath Riverdale’s wholesome facade.'
};

function App(props) {
  return (  
    <div className="App">
      <Title titleText={'Main title'}/>
      <Movie data = {filmData} />
    </div>
  );
}

export default App;
