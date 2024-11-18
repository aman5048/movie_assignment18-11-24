import { useEffect, useState } from "react";
import { Card } from "../common";

export const MovieList = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch(`https://dummyapi.online/api/movies`);
      const res = await data.json();
      console.log(res);
      return res;
    }
    getData().then((res) => {
      setMovies(res);
    });
  }, []);
  return (
    <>
        <div className="grid grid-cols-4 mx-10 gap-4">
          {movies.map((movie) => {
            return (
               <div key={movie.id}>
                   <Card  movie={movie}/>
               </div>
            );
          })}
        </div>
    </>
  );
};
