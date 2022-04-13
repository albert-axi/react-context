import { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { useParams } from "react-router-dom";

const MovieShow = () => {
    const {movieId} = useParams()
    const [movies, setMovies] = useContext(MovieContext)
    const movie = movies.find(m=>m.Title === movieId)

    return(
        <div>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
        </div>
    )
}

export default MovieShow