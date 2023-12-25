import { IMG_CDN_URL } from "../../utils/constants";

interface ComponentsProps {
  title: string;
  poster: string;
}

const Card = ({ title, poster }: ComponentsProps) => {
  return (
    <div className="relative w-52">
      <img
        src={IMG_CDN_URL + poster}
        alt={title}
        className="object-cover cursor-pointer rounded-md"
      />
      <h4 className="text-white text-xs font-medium mt-2">{title}</h4>
    </div>
  );
};

export default Card;
