import { getAllMoives } from '../data/movies'
import MovieCart from './MovieCart'

export default function MovieList() {
  const movies = getAllMoives();
  return (
    <div className="content">
      <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
        {movies.map((movie) => (
         <MovieCart key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
