import axios from "axios";
import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../../utils/constants";
import { Link, useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";
import { FaRegPlayCircle } from "react-icons/fa";
import PlayTime from "./PlayTime";
import Recomendation from "./Recomendation";
import Related from "./Related";
import { FaPlay } from "react-icons/fa";

interface MovieDetails {
  backdrop_path: string;
  title: string;
  genres: { id: number; name: string }[];
  runtime: number;
  vote_average: number;
  overview: string;
  id: number;
}

const Details = () => {
  const [details, setDetails] = useState<MovieDetails | null>(null);
  const [similar, setSimilar] = useState([]);
  const [genres, setGeneres] = useState([]);
  const [recomendation, setRecomendation] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
    getRecomendedMovies();
  }, []);

  const getMovieDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}`, API_OPTIONS)
      .then((res) => {
        setDetails(res?.data);
        setGeneres(res?.data.genres);
        // console.log(res?.data);
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
        // console.log(res?.data?.results);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  // Get Recomendations
  const getRecomendedMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/recommendations`,
        API_OPTIONS
      )
      .then((res) => {
        setRecomendation(res?.data?.results);
        // console.log(res?.data?.results);
      })

      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <div>
      <div className="relative">
        <img
          src={IMG_CDN_URL + details?.backdrop_path}
          alt="backdrop poster"
          className="h-full w-full object-cover opacity-80"
        />

        <div className="bg-gradient-to-r from-black/90 h-full absolute top-0">
          <div className="md:pt-40 px-4 md:px-16">
            <h1 className="text-white text-xl md:text-5xl h-full w-[70%] lg:text-6xl font-bold drop-shadow-xl">
              <div>{details?.title}</div>

              <div className="flex items-center mt-2 text-lg font-normal gap-5">
                <div className="flex gap-0">
                  {genres.map((data) => (
                    <div key={data?.id}>
                      <h3 className="pr-1 text-zinc-400">{data?.name}.</h3>
                    </div>
                  ))}
                </div>

                <div className="flex items-center text-zinc-400 gap-2">
                  <span>
                    <FaRegPlayCircle size={20} />
                  </span>
                  <span className="text-lg">
                    <PlayTime time={details?.runtime} />
                  </span>
                </div>

                <div>
                  <h4 className="flex items-center gap-1 font-normal text-xl">
                    <h1>{Math.floor(details?.vote_average)}</h1>
                    <span className="text-yellow-500 text-lg">
                      <BsStarFill />
                    </span>
                  </h4>
                </div>
              </div>
              <button className="flex flex-row items-center text-black mt-3 md:mt-6 bg-white rounded-md py-2 md:py-3 px-3 md:px-6 w-auto text-xs md:text-lg font-semibold gap-2 md:gap-3 transition hover:bg-opacity-80">
                <Link
                  to={"/trailer/" + details?.id}
                  className="flex items-center gap-2 md:gap-3"
                >
                  <span>
                    <FaPlay size={20} />
                  </span>
                  Play Trailer
                </Link>
              </button>
            </h1>

            <div className="mt-10 text-neutral-400 text-xl font-semibold">
              {/* OVERVIEW */}
              <div>
                <h1 className="text-white border-b-[5px] w-[89px] border-[#e50914]">
                  Overview
                </h1>

                <div className="overflow-hidden text-[8px] md:text-xl mt-2 text-white/75 w-[90%] md:w-[80%] lg:w-[80%] drop-shadow-xl">
                  {details?.overview}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:-mt-40 px-4 md:px-16 relative">
        <h1 className="text-base font-semibold text-white select-none md:text-xl lg:text-2xl">
          More Like This
        </h1>
        <div className="flex flex-row gap-3 pt-2 overflow-x-scroll cursor-pointer scroll-hide scroll-smooth">
          {similar.map((data) => (
            <Related
              key={data.id}
              title={data.title}
              poster={data.backdrop_path}
            />
          ))}
        </div>
      </div>

      <div className="pb-5 px-4 md:px-16 relative mt-3">
        <h1 className="text-base font-semibold text-white select-none md:text-xl lg:text-2xl">
          Recomended
        </h1>
        <div className="relative flex flex-row gap-3 pt-2 overflow-x-scroll cursor-pointer scroll-hide scroll-smooth">
          {recomendation.map((data) => (
            <Recomendation title={data.title} poster={data.backdrop_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Details;
