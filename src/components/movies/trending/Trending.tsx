import axios from "axios";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../../utils/constants";
import Card from "./Card";
import { Link } from "react-router-dom";

const Trending = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/now_playing`, API_OPTIONS)
      .then((res) => {
        setTrendingMovies(res?.data?.results);
        // console.log(res?.data?.results);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="md:-mt-24 lg:-mt-44 lg:relative mt-40">
      <h1 className="text-white select-none px-4 md:px-16 text-base md:text-xl lg:text-2xl font-semibold">
        Trending
      </h1>
      <div className="flex overflow-x-scroll scroll-hide ml-4 md:ml-16 mt-3">
        <div className="flex flex-row gap-3">
          {trendingMovies.map((data) => (
            <Link to={"/movie/" + data.id} key={data.id}>
              <Card title={data.original_title} poster={data.poster_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trending;
