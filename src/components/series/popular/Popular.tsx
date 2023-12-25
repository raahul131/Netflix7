import axios from "axios";
import { API_OPTIONS } from "../../../utils/constants";
import { useEffect, useState } from "react";
import Card from "../../common/Card";
import { Link } from "react-router-dom";

const Popular = () => {
  const [popularSeries, setPopularSeries] = useState([]);
  useEffect(() => {
    getPopularSeries();
  }, []);

  const getPopularSeries = () => {
    axios
      .get(`https://api.themoviedb.org/3/tv/popular`, API_OPTIONS)
      .then((res) => {
        setPopularSeries(res?.data?.results);
        // console.log(res?.data?.results);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="text-white text-2xl">
      <h1 className="text-white select-none px-4 md:px-16 text-base md:text-xl lg:text-2xl font-semibold">
        Popular TV Series
      </h1>
      <div className="flex overflow-x-scroll scroll-hide pl-4 md:pl-16 mt-3">
        <div className="flex flex-row gap-3">
          {popularSeries.map((data) => (
            <Link to={"/popularseries/" + data.id} key={data.id}>
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

export default Popular;
