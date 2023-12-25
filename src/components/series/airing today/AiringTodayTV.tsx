import { useState, useEffect } from "react";
import axios from "axios";
import { API_OPTIONS } from "../../../utils/constants";
import Card from "../../common/Card";
import { Link } from "react-router-dom";

const AiringTodayTV = () => {
  const [series, setSeries] = useState([]);
  useEffect(() => {
    getAiringTodayTV();
  }, []);

  const getAiringTodayTV = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/airing_today`, API_OPTIONS)
      .then((res) => {
        setSeries(res?.data?.results);
        // console.log(res?.data?.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="text-white text-2xl">
      <h1 className="text-white select-none px-4 md:px-16 text-base md:text-xl lg:text-2xl font-semibold">
        Airing TV Series
      </h1>
      <div className="flex overflow-x-scroll scroll-hide pl-4 md:pl-16 mt-3">
        <div className="flex flex-row gap-3">
          {series.map((data) => (
            <Link to={"/airingTodaySeries/" + data.id}>
              <Card
                key={data?.id}
                title={data?.name}
                poster={data?.backdrop_path}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AiringTodayTV;
