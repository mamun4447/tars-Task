import React, { useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Photos from "./Photos";

const Home = () => {
  const [search, setSearch] = useState();
  const [photos, setPhotos] = useState([]);
  return (
    <div className="dark:bg-zinc-800">
      <NavBar setSearch={setSearch} />
      <Header search={search} />
      <Photos photos={photos} search={search} setPhotos={setPhotos} />
    </div>
  );
};

export default Home;
