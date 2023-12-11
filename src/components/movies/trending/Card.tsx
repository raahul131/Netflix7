import { IMG_CDN_URL } from "../../../utils/constants";

const Card = ({ title, poster }) => {
  return (
    <div className="w-28 relative">
      <img
        src={IMG_CDN_URL + poster}
        alt={title}
        className="rounded-md cursor-pointer object-cover hover:scale-105 duration-200 transition"
      />
    </div>
  );
};

export default Card;
