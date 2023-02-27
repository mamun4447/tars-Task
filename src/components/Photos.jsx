import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import SingleCard from "./SingleCard";

const Photos = ({ photos, setPhotos, search }) => {
  const [singleInfo, setSingleInfo] = useState({});
  // console.log(photos);

  useEffect(() => {
    fetch(
      "https://api.unsplash.com/photos/?client_id=dr5WmeiEi4TlSoXS3MGr30H5rXNwrTe3g0ZTpmFczFo"
    )
      .then((res) => res.json())
      .then((data) => {
        if (search) {
          data = data.filter((singleData) =>
            singleData.alt_description.slice(2, -1).includes(search)
          );
          setPhotos(data);
        } else {
          setPhotos(data);
        }
      });
  }, [search, setPhotos]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:mx-auto mx-4  py-5 gap-5 justify-center items-center dark:bg-zinc-800 px-20">
      {photos.map((photo) => (
        <SingleCard
          search={search}
          key={photo.id}
          setSingleInfo={setSingleInfo}
          photo={photo}
        />
      ))}
      <Modal singleInfo={singleInfo} />
    </div>
  );
};

export default Photos;
