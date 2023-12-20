import PopularMovies from "../movies/popular/PopularMovies";
import TopRatedMovies from "../movies/top  rated/TopRated";
import Trending from "../movies/trending/Trending";
import Upcoming from "../movies/upcoming/Upcoming";
import VideoTitle from "./VideoTitle";

const BillBoard = () => {
  return (
    <div>
      <VideoTitle />
      <Trending />
      <PopularMovies />
      <Upcoming />
      <TopRatedMovies />
    </div>
  );
};

export default BillBoard;
