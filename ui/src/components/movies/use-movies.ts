import { useContext } from 'react';
import { MoviesContext, MoviesContextState } from './movie.context';

const useMovies = (): MoviesContextState =>
  useContext<MoviesContextState>(MoviesContext);

export default useMovies;
