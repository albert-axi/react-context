import { createContext, useState } from 'react'

const MovieContext = createContext(['Spiderman', 'Marvel', 'Ironman'])

const MovieContextProvider = props => {

    const [movies, setMovies] = useState([]) // [movies, setMovies]
    
    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}

export { MovieContext, MovieContextProvider }