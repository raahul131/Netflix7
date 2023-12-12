import axios from "axios";
import { useEffect, useState } from "react";
import { API_OPTIONS, IMG_CDN_URL } from "../../../../utils/constants";
import { useParams } from "react-router-dom";
import { BsStarFill } from "react-icons/bs";

const Details = () => {
  const [details, setDetails] = useState("");
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
        setGeneres(res?.data.genres);
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
      <div className="text-white grid grid-cols-12 gap-8 pl-4 md:pl-16 pt-20">
        {/* Image */}
        <div className="col-span-4 p-10 rounded-md">
          <div className="border-[1px] border-white/50">
            <img src={IMG_CDN_URL + details.poster_path} alt="" className="" />
          </div>
        </div>

        {/* details */}
        <div className="col-span-8 p-10">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-semibold">{details.title}</h1>
            <h4 className="text-2xl font-semibold flex items-center gap-4">
              <span>{Math.floor(details?.vote_average)}</span>{" "}
              <span className="text-yellow-500">
                <BsStarFill />
              </span>
            </h4>
          </div>

          <div className="flex items-center gap-5 text-xl">
            <h2 className="text-white/30 pt-2">{details.release_date}</h2>
            <h2 className="text-white/30 pt-2">
              {details.adult === "false" ? "18+" : "16+"}
            </h2>
          </div>

          <div>
            <h1 className="text-2xl font-semibold pt-10 pb-2 border-b-4 w-[102px] border-red-600 cursor-pointer">
              Overview
            </h1>
            <p className="text-neutral-300 pt-2">{details.overview}</p>
          </div>

          <div className="flex pt-7">
            <h2 className="pr-6">Genre</h2>
            {genres.map((data) => (
              <div key={data.id} className="">
                <h3 className="text-white/50 pr-1">{data?.name}.</h3>
              </div>
            ))}
          </div>

          <div className="pt-5">
            <h1 className="text-white select-none text-base md:text-xl lg:text-2xl font-semibold">
              Related
            </h1>
            <div className="flex flex-row gap-5 pt-2 overflow-x-scroll scroll-hide scroll-smooth">
              {similar.map((data) => (
                <img
                  src={IMG_CDN_URL + data.poster_path}
                  alt=""
                  className="rounded-md w-[170px]"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
