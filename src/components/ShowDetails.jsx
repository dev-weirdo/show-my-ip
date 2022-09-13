import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowDetails = ({ ip }) => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    axios.get(`https://ipwho.is/${ip}`).then((res) => setDetails(res.data));
  }, [ip]);

  const { type, continent, country, region, city, connection, flag } = details;

  return (
    <div className="card w-full md:w-96 bg-base-100 shadow-2xl mx-auto">
      <figure className="p-2">
        <img src={flag?.img} alt="ip-flag" className="rounded-xl w-24" />
      </figure>
      <div className="card-body items-start text-center text-lg">
        <h1>ISP: {connection?.isp}</h1>
        <h1>Continent: {continent}</h1>
        <h1>Country: {country}</h1>
        <h1>Region: {region}</h1>
        <h1>City: {city}</h1>
        <h1>Type: {type}</h1>
      </div>
    </div>
  );
};

export default ShowDetails;
