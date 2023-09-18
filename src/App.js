import MovieList from './MovieList';
import Header from './Header';
import { movies } from './movies';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <MovieList list ={movies}/>
    </div>
  );
}

export default App;