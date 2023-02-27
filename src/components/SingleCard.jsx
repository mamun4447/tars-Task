import React from "react";
import { FaExpand, FaThumbsUp } from "react-icons/fa";

const SingleCard = ({ photo, setSingleInfo }) => {
  const { likes, user, urls, alt_description } = photo;
  const { name, username, profile_image } = user;
  // console.log(photo);

  return (
    <div className="card w-full  shadow-xl image-full">
      <figure>
        <img className="w-full max-h-60" src={urls.thumb} alt="Shoes" />
      </figure>

      <div className="card-body ">
        <p>{alt_description}</p>
        <label
          onClick={() => setSingleInfo(photo)}
          htmlFor="my-modal-3"
          className="flex items-center justify-center hover:text-2xl hover:text-gray-50"
        >
          <FaExpand />
        </label>

        {/* ===<>===> User <===<>=== */}
        <div className="mt-4">
          <div className="flex w-full justify-between items-center">
            <div className="flex items-center">
              <img
                className="object-cover h-10 rounded-full"
                src={profile_image.large}
                alt="Avatar"
              />
              <div className="flex flex-col">
                <p
                  className="mx-2 font-semibold text-slate-200"
                  tabIndex="0"
                  role="link"
                >
                  {name}
                </p>
                <p className="text-sm mx-2">@{username}</p>
              </div>
            </div>
            <div className="flex gap-1">
              <FaThumbsUp /> {likes}K
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
