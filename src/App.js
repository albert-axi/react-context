import './App.css';
import { MovieContext } from './contexts/MovieContext'
import MoviePage from './pages/MoviePage'
import { Route, Switch } from 'react-router-dom'
import MovieShow from './components/MovieShow';
import Nav from './components/Nav';
import { useEffect, useContext } from 'react'

function App() {
  console.log("API: ", process.env.REACT_APP_API_KEY)

  const [movies, setMovies] = useContext(MovieContext)
  console.log(movies)

  useEffect(()=>{
    fetch(`http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=spiderman`)
    .then(r => r.json())
    .then(d => setMovies(d.Search))
  },[])

  return (
    <div className="App">
      <Nav />
      <h1>Movie App</h1>
      
      <Switch>
        <Route path="/movies" exact component={MoviePage} />
        <Route path="/movies/:movieId"  component={MovieShow} />
      </Switch>
   
    </div>
  );
}

export default App;
