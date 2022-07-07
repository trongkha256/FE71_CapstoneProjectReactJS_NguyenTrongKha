import { AppDispatch, RootState } from 'configStore';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getMovieShowing } from 'Slices/movie';


type Props = {}

const MovieShowing = (props: Props) => {

    const { movies, isLoading, error } = useSelector((state: RootState) => state.movie);

    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(getMovieShowing());
    }, [])

    if (isLoading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {movies.map((movie) => {
                return <p key={movie.maPhim}>{movie.tenPhim}</p>
            })}
        </div>
    )
}

export default MovieShowing