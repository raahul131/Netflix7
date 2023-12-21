import { useEffect, useState } from "react";
import { API_OPTIONS } from "../../../../utils/constants";

interface DetailsProps {
  detailId: string;
}

const DetailVideo = ({ detailId }: DetailsProps) => {
  const [trailerId, setTrailerId] = useState(null);

  useEffect(() => {
    getTrailer();
  }, [detailId]);

  const getTrailer = async () => {
    try {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${detailId}/videos?language=en-US`,
        API_OPTIONS
      );
      const json = await data.json();

      // Check if json and json.results are defined
      if (json && json.results) {
        const filterData = json.results.filter(
          (video: { type: string }) => video.type === "Trailer"
        );

        // Check if filterData is not empty
        const trailer = filterData.length ? filterData[0] : json.results[0];

        // Check if trailer is defined before accessing its key
        if (trailer) {
          setTrailerId(trailer.key);
          //   console.log(trailer);
        } else {
          //   console.error("No trailer found in the video results:", json.results);
        }
      } else {
        // console.error("Invalid API response:", json);
      }
    } catch (error) {
      //   console.error("Error fetching movie videos:", error);
    }
  };

  return (
    <div className="">
      <iframe
        className="brightness-90 border-white/30 border-[1px]"
        src={
          "https://www.youtube.com/embed/" +
          trailerId +
          "?&autoplay=1&mute=1&rel=0&controls=0&modestbranding=0"
        }
        width={900}
        height={450}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default DetailVideo;
