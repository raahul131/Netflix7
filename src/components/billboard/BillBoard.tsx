import PopularMovies from "../movies/popular/PopularMovies";
import TopRatedMovies from "../movies/top  rated/TopRated";
import Trending from "../movies/trending/Trending";
import Upcoming from "../movies/upcoming/Upcoming";
import AiringTodayTV from "../series/airing today/AiringTodayTV";
import Popular from "../series/popular/Popular";
import TopRated from "../series/top rated/TopRated";
import VideoTitle from "./VideoTitle";

const BillBoard = () => {
  return (
    <div>
      <VideoTitle />
      <Trending />

      {/* TV'S */}
      <TopRated />

      <PopularMovies />

      {/* TV'S */}
      <AiringTodayTV />

      <Upcoming />
      <TopRatedMovies />

      {/* TV'S */}
      <Popular />
    </div>
  );
};

export default BillBoard;
