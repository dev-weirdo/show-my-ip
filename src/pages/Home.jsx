import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { ShowDetails, Loader } from "../components/index";
import Flip from "react-reveal/Flip";

const Home = () => {
  const [showIpDetails, setShowIpDetails] = useState(false);
  const {
    isLoading: loadUserIp,
    data: userIp,
  } = useQuery(["userIp"], () =>
    fetch("https://api.ipgeolocation.io/getip").then((res) => res.json())
  );

  if (loadUserIp) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen">
      <div className="flex flex-col justify-center items-center pt-10 gap-3">
        <h1 className="text-2xl">Your IP address is:</h1>
        <p className="text-4xl">{userIp.ip}</p>
      </div>

      <div className="my-7 mx-3 md:mx-0">
        <Flip left opposite collapse when={showIpDetails}>
          <ShowDetails ip={userIp?.ip} />
        </Flip>
      </div>

      <div className="w-full flex justify-center">
        <button
          onClick={() => setShowIpDetails(!showIpDetails)}
          className="btn btn-md lg:btn-md"
        >
          {showIpDetails ? "Hide" : "Show"} Details
        </button>
      </div>
    </div>
  );
};

export default Home;
