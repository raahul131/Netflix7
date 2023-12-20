import { IMG_CDN_URL } from "../../utils/constants";

const Card = ({ title, poster }) => {
  return (
    <div className="relative w-52">
      <img
        src={IMG_CDN_URL + poster}
        alt={title}
        className="object-cover cursor-pointer border-[1px] border-white/30 rounded-md"
      />
      <h4 className="text-white text-xs font-medium mt-2">{title}</h4>
    </div>
  );
};

export default Card;
