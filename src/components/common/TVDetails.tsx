import axios from "axios";
import { API_OPTIONS, IMG_CDN_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import N from "../../assets/N.png";
import HDIcon from "../../assets/hd.png";
import EpisodeCard from "../details/tv details/EpisodeCard";

interface TVDetails {
  backdrop_path: string;
  name: string;
  overview: string;
  file_path: string;
  last_air_date: string;
  number_of_seasons: string;
}

interface TVPhotos {
  backdrops: { file_path: string }[];
}

interface Season {
  id: string;
  season_number: number;
}

interface SeasonDetails {
  name: string;
  poster_path: string;
}

interface EpisodeDetails {
  name: string;
  episode_number: number;
  still_path: string;
  overview: string;
}

const TVDetails = () => {
  const [tvDetails, setTvdetails] = useState<TVDetails | null>(null);
  const [photos, setPhotos] = useState<TVPhotos>({ backdrops: [] });
  const [genres, setGenres] = useState([]);
  const [season, setSeason] = useState<Season[]>([]);
  const [selectedSeason, setSelectedSeason] = useState<string>("1");
  const [selectedSeasonDetails, setSelectedSeasonDetails] =
    useState<SeasonDetails | null>(null);

  const [episodes, setEpisodes] = useState<EpisodeDetails[]>([]);

  const params = useParams();
  const { id } = params;

  useEffect(() => {
    getSeasonDetail();
  }, [selectedSeason]);

  useEffect(() => {
    getTVDetails();
    getTVImages();
  }, []);

  const getTVDetails = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}`, API_OPTIONS)
      .then((res) => {
        setTvdetails(res?.data);
        setGenres(res?.data?.genres);
        setSeason(res?.data?.seasons);
        // console.log(res?.data?.seasons);
        console.log(res?.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const getTVImages = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/${id}/images`, API_OPTIONS)
      .then((res) => {
        setPhotos({ backdrops: res?.data?.backdrops || [] });
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  const handleSeasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeason(event.target.value);
  };

  const getSeasonDetail = () => {
    if (selectedSeason) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${id}/season/${selectedSeason}`,
          API_OPTIONS
        )
        .then((res) => {
          setSelectedSeasonDetails(res?.data);
          setEpisodes(res?.data?.episodes);
          console.log(res?.data?.episodes);
          console.log(res?.data);
        })
        .catch((err) => {
          console.log("Error", err);
        });
    }
  };

  return (
    <div className="pb-5">
      <div className="relative">
        <img
          src={IMG_CDN_URL + tvDetails?.backdrop_path}
          alt="backdrop poster"
          className="h-[600px] w-full object-cover"
        />

        <div className=" bg-gradient-to-r from-black/50 h-full w-full absolute top-0">
          <div className="md:pt-44 px-4 md:px-16">
            <div className="flex items-center">
              <img src={N} alt="" className="w-28" />
              <h1 className="uppercase text-white text-3xl font-bold tracking-widest">
                Series
              </h1>
            </div>
            <h1 className="text-white text-xl md:text-5xl h-full w-full lg:text-6xl font-bold drop-shadow-xl">
              <span>{tvDetails?.name}</span>
            </h1>
          </div>
          <div className="bg-gradient-to-t from-zinc-900 w-full h-[50%] bottom-0 absolute"></div>
        </div>
      </div>

      <div className="px-4 md:px-16 flex flex-col text-base ">
        <span className="flex gap-3">
          <h2 className="text-zinc-400 z-10 relative">
            {tvDetails?.last_air_date}
          </h2>
          <h2 className="text-zinc-400">
            {tvDetails?.number_of_seasons}
            {tvDetails?.number_of_seasons == "1" ? " Season" : " Seasons"}
          </h2>
          <span>
            <img src={HDIcon} alt="" className="h-6" />
          </span>
        </span>

        <div className="flex gap-0">
          {genres.map((data) => (
            <div key={data?.id}>
              <h3 className="pr-1 text-zinc-400">{data?.name}.</h3>
            </div>
          ))}
        </div>
        <div className="text-zinc-400 pt-2">{tvDetails?.overview}</div>
      </div>

      {/* PHOTOS */}
      <div className="px-4 md:px-16 mt-5 pb-4">
        <h1 className="text-white select-none text-base md:text-xl lg:text-2xl font-semibold pb-2">
          Some Images
        </h1>
        <div className="grid md:grid-cols-6 grid-cols-3 gap-3 ">
          {photos.backdrops.slice(0, 6).map((data) => (
            <div key={data?.file_path}>
              <img
                src={IMG_CDN_URL + data?.file_path}
                alt=""
                className="min-w-72 rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="px-4 md:px-16">
        <div>
          <label className="flex gap-2">
            <span className="text-white/80 text-base md:text-xl lg:text-2xl font-semibold">
              Season
            </span>
            <select
              name="selectedSeason"
              className="bg-transparent text-zinc-400 text-base md:text-xl font-semibold w-14 outline-none border-zinc-400 border-[1px] rounded-sm"
              onChange={handleSeasonChange}
              value={selectedSeason || ""}
            >
              {season.map((data) => (
                <option key={data.id} value={data.season_number}>
                  {data.season_number}
                </option>
              ))}
            </select>
          </label>
          {/* {selectedSeason ? <h1>{selectedSeason}</h1> : "Select a season"} */}
          {selectedSeasonDetails && (
            <div>
              <div className="text-2xl text-white font-semibold pt-7">
                <h1>Episodes</h1>
                {/* <h1>{selectedSeasonDetails.name}</h1> */}
              </div>
              {/* <div>
                <img
                  src={IMG_CDN_URL + selectedSeasonDetails.poster_path}
                  alt=""
                  className="w-72"
                />
              </div> */}

              {/* Episodes */}
              <div className="">
                {episodes.map((data) => (
                  <div className="py-3">
                    <EpisodeCard
                      name={data?.name}
                      episodeNumber={data?.episode_number}
                      poster={data?.still_path}
                      overview={data?.overview}
                    />
                  </div>
                ))}
              </div>
              <div></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TVDetails;
