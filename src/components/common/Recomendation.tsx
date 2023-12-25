import { IMG_CDN_URL } from "../../utils/constants";
import FALLBACKIMAGE from "../../assets/hero.jpg";
import { SyntheticEvent } from "react";

interface DetailsProps {
  title: string;
  poster: string;
}

const Recomendation = ({ title, poster }: DetailsProps) => {
  const handleErrorImage = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = FALLBACKIMAGE;
  };
  return (
    <div className="min-w-[208px]">
      <img
        src={IMG_CDN_URL + poster}
        alt="No image available"
        className="rounded-md object-cover w-52 border-[1px] border-white/30 text-white text-center"
        onError={handleErrorImage}
      />
      <h1 className="text-white text-xs font-medium mt-2">{title}</h1>
    </div>
  );
};

export default Recomendation;
