import axios from "axios";
import { useEffect, useState } from "react";
import { BsStarFill } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { API_OPTIONS, IMG_CDN_URL } from "../../../../utils/constants";

interface MovieDetails {
  backdrop_path: string;
  title: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  overview: string;
  id: number;
  poster_path: string;
  release_date: string;
  adult: boolean;
}

const UpcomingDetails = () => {
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [similar, setSimilar] = useState([]);
  const [genres, setGeneres] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS)
      .then((res) => {
        setDetails(res?.data);
        setGeneres(res?.data?.genres);
        console.log(res?.data);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  // Get Related Movies
  const getSimilarMovies = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}/similar`, API_OPTIONS)
      .then((res) => {
        setSimilar(res?.data?.results);
        console.log(res?.data?.results);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-8 pt-20 pl-4 text-white md:pl-16">
        {/* Image */}
        <div className="col-span-4 p-10 rounded-md ">
          <div className="border-[1px] border-white/50">
            <img src={IMG_CDN_URL + details?.poster_path} alt="" className="" />
          </div>
        </div>

        {/* details */}
        <div className="col-span-8 p-10">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-semibold">{details?.title}</h1>
            <h4 className="flex items-center gap-4 text-2xl font-semibold">
              <span>{Math.floor(details?.vote_average)}</span>{" "}
              <span className="text-yellow-500">
                <BsStarFill />
              </span>
            </h4>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <h2 className="pt-2 text-white/30">{details?.release_date}</h2>
            <h2 className="pt-2 text-white/30">
              {details?.adult === false ? "18+" : "16+"}
            </h2>
          </div>

          <div>
            <h1 className="text-2xl font-semibold pt-10 pb-2 border-b-4 w-[102px] border-red-600 cursor-pointer">
              Overview
            </h1>
            <p className="pt-2 text-neutral-300">{details?.overview}</p>
          </div>

          <div className="flex pt-7">
            <h2 className="pr-6">Genre</h2>
            {genres.map((data) => (
              <div key={data?.id} className="">
                <h3 className="pr-1 text-white/50">{data?.name}.</h3>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <h1 className="text-base font-semibold text-white select-none md:text-xl lg:text-2xl">
              Related
            </h1>
            <div className="flex flex-row gap-5 pt-2 overflow-x-scroll scroll-hide scroll-smooth">
              {similar.map((data) => (
                <img
                  src={IMG_CDN_URL + data?.poster_path}
                  alt=""
                  className="rounded-md w-[170px] cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcomingDetails;
