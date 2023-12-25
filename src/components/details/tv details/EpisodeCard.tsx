import { IMG_CDN_URL } from "../../../utils/constants";
import FALLBACKIMAGE from "../../../assets/hero.jpg";
import { SyntheticEvent } from "react";

interface ComponentsProps {
  name: string;
  episodeNumber: number;
  poster: string;
  overview: string;
}

const EpisodeCard = ({
  name,
  episodeNumber,
  poster,
  overview,
}: ComponentsProps) => {
  const handleErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACKIMAGE;
  };
  return (
    <div className="text-white grid grid-cols-12 items-center">
      <h1 className="text-lg font-semibold col-span-1">{episodeNumber}.</h1>
      <div className="w-64 col-span-3">
        <img
          src={IMG_CDN_URL + poster}
          alt=""
          className="rounded-md"
          onError={handleErrorImage}
        />
      </div>
      <div className="flex flex-col col-span-8">
        <h1 className="text-xl font-bold -mt-5">{name}</h1>
        <p className="text-zinc-400 mt-2">{overview}</p>
      </div>
    </div>
  );
};

export default EpisodeCard;
