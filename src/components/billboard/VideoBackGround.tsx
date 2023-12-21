import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../utils/constants";

interface VideoBackgroundProps {
  movieId: number;
}

const VideoBackGround = ({ movieId }: VideoBackgroundProps) => {
  const [trailerId, setTrailerId] = useState<string | null>(null);

  useEffect(() => {
    getMovieVideos();
  }, []);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
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

  return (
    <div className="overflow-x-hidden">
      <iframe
        className="w-screen aspect-video brightness-[60%] md:-mt-[104px]"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?&autoplay=1&mute=1&rel=0&controls=0&modestbranding=0"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
