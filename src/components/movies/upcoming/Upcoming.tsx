import axios from "axios";
import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../../utils/constants";
import { Link } from "react-router-dom";
import Card from "../../common/Card";

const Upcoming = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    getMovieDetails();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/upcoming`, API_OPTIONS)
      .then((res) => {
        setUpcomingMovies(res?.data?.results);
        // console.log(res?.data?.results);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div className="mt-4">
      <h1 className="px-4 text-base font-semibold text-white select-none md:px-16 md:text-xl lg:text-2xl">
        Upcoming
      </h1>
      <div className="flex mt-3 ml-4 overflow-x-scroll scroll-hide md:ml-16">
        <div className="flex flex-row gap-3">
          {upcomingMovies.map((data) => (
            <Link to={"/upcomingmovies/" + data.id} key={data.id}>
              <Card title={data.original_title} poster={data.backdrop_path} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Upcoming;
