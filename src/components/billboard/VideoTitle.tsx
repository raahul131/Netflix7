import { FaPlay } from "react-icons/fa";
import { ImInfo } from "react-icons/im";

import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";
import VideoBackGround from "./VideoBackGround";

const VideoTitle = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing",
      API_OPTIONS
    );
    const json = await data.json();

    if (json.results && json.results.length > 0) {
      // const randomIndex = Math.floor(Math.random() * json.results.length);
      const randomMovie = json.results[3];
      setMovie(randomMovie);
      // console.log(randomMovie);
    }
  };

  if (!movie) {
    return (
      <div>
        <p className="text-white">Loading...</p>
      </div>
    );
  }

  const { title, overview, id } = movie;

  return (
    <div>
      <VideoBackGround movieId={id} />
      <div className="absolute top-[20%] md:top-[30%] ml-4 md:ml-16">
        <p className="text-white text-xl md:text-5xl h-full w-[50%] lg:text-6xl font-bold drop-shadow-xl">
          {title}
        </p>
        <p className="text-white text-[8px] md:text-xl mt-3 md:mt-8 w-[90%] md:w-[80%] lg:w-[50%] drop-shadow-xl">
          {overview}
        </p>

        <div className="flex items-center gap-3 mt-3 md:mt-6">
          <button className="flex flex-row items-center bg-white rounded-md py-2 md:py-3 px-3 md:px-6 w-auto text-xs md:text-lg font-semibold gap-2 md:gap-3 transition hover:bg-opacity-80">
            <span>
              <FaPlay size={20} />
            </span>
            Play
          </button>
          <button className="bg-white text-white bg-opacity-30 flex flex-row items-center rounded-md py-2 md:py-3 px-3 md:px-6 w-auto text-xs md:text-lg font-semibold hover:bg-opacity-20 transition gap-1 md:gap-3">
            <span>
              <ImInfo size={20} />
            </span>
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
