import { IMG_CDN_URL } from "../../utils/constants";

interface DetailsProps {
  title: string;
  poster: string;
}

const Related = ({ title, poster }: DetailsProps) => {
  return (
    <div className="min-w-[208px]">
      <img
        src={IMG_CDN_URL + poster}
        alt="No image available"
        className="rounded-md object-cover border-[1px] border-white/30 text-white text-center"
      />
      <h1 className="text-white text-xs font-medium mt-2">{title}</h1>
    </div>
  );
};

export default Related;
