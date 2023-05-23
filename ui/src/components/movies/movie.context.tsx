import React, { useEffect, useMemo, useState } from 'react';
import useNotify from '../notification/use-notify';
import { Movie } from '../../types';
import { instance } from '../../axios.config';

export type MoviesContextState = {
  movies: Movie[];
  loading: boolean;
};

const initialMovies: MoviesContextState = {
  movies: [],
  loading: true,
};

export const MoviesContext = React.createContext<MoviesContextState>(initialMovies);

type Props = {
  children?: React.ReactNode;
};


const MoviesContainer = ({ children }: Props) => {

  const notify = useNotify();

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchMovies = instance({ 
    url: '/movie',
    method: 'GET'
   })
   
  useEffect(() => {
    setLoading(true)
    fetchMovies
    .then(({ data: resolved }) => {
        const { data, error } = resolved
        if (error) {
            notify(error, 'error')
            return
        }
        setMovies(data)
    })
    .catch(() => {
      notify('An unexpected error occurred', 'error');
    })
    .finally(() => setLoading(false))
  }, []);

  const context = useMemo<MoviesContextState>(
    () => ({
      movies,
      loading,
    }),
    [loading, movies],
  );
  return <MoviesContext.Provider value={context}>{children}</MoviesContext.Provider>;
};

export default MoviesContainer;
