import { useContext } from "react"
import { MovieContext } from "../contexts/MovieContext"
import MovieCard from '../components/MovieCard'
import { v4 as uuidV4} from 'uuid'
import { Link } from "react-router-dom"

const MoviePage = ()=> {

    const [movies, setMovies] = useContext(MovieContext) // [movies, setMovies]

    return(
        <div>
            {movies.map(movie=><Link to={`/movies/${movie.Title}`}><MovieCard key={uuidV4()} movie={movie}/></Link>)}
        </div>
    )
}

export default MoviePage