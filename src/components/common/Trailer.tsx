import { useEffect, useState } from "react";
import YouTube from "react-youtube";
import { API_OPTIONS } from "../../utils/constants";
import { useParams } from "react-router-dom";

const Trailer = () => {
  const params = useParams();
  const { id } = params;
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data?.json();
    const filterData = json?.results?.filter(
      (video: { type: string }) => video.type === "Trailer"
    );
    const trailer = filterData?.length ? filterData[0] : json?.results[0];
    setTrailerId(trailer?.key);
    // console.log(trailer);
  };

  const opts = {
    width: "1300",
    height: "560",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="pt-20 flex items-center justify-center bg-black">
      <YouTube videoId={trailerId} opts={opts} />
    </div>
  );
};

export default Trailer;
