import React from "react";
import { BiLike, BiShareAlt } from "react-icons/bi";
import { FiInfo, FiTwitter } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { HiDownload } from "react-icons/hi";

const Modal = ({ singleInfo }) => {
  const { id, likes, user, urls, alt_description } = singleInfo;
  const tags = [
    "Animals in the wild",
    "Animals images & Pictures",
    "Elephant Images",
    "Nature Images",
    "Animals walking",
    "Natural habitat",
    "Wild",
    "Animal pictures",
    "Animals",
    "Giant animals",
    "Forst animals",
  ];

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 h-full max-w-5xl  dark:bg-zinc-800">
          {/* ===Modal Details=== */}
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-white text-black dark:bg-zinc-800 dark:text-white dark:border-white"
          >
            ✕
          </label>

          {/* ===Modal Details=== */}
          <div className="dark:bg-zinc-800">
            {/* <====Header===> */}
            <div
              className="hero h-96  rounded-md"
              style={{
                backgroundImage: `url(${urls?.thumb})`,
              }}
            >
              <div className="hero-overlay bg-opacity-60  rounded-md"></div>
              <div>
                <div className="flex gap-2 max-w-md absolute left-16 top-80">
                  <button className="btn btn-outline text-white gap-1 hover:bg-[#3CB46E]">
                    <BiShareAlt /> Share
                  </button>
                  <button className="btn btn-outline text-white gap-1 hover:bg-[#3CB46E]">
                    <FiInfo /> Info
                  </button>
                </div>
                <div className="max-w-md absolute right-16 top-80">
                  <button className="btn bg-[#3CB46E] border-none">
                    Download
                  </button>
                </div>
              </div>
            </div>

            {/* <====User Details====> */}
            <div className="flex justify-between mx-2 ">
              <div className="flex items-center">
                <img
                  className="object-cover h-10 rounded-full"
                  src={user?.profile_image?.large}
                  alt="Avatar"
                />

                {/* ===UserName=== */}
                <div className="flex flex-col my-4 dark:text-white">
                  <a href={user?.portfolio_url}>
                    <p
                      className="mx-2 font-semibold text-black dark:text-white"
                      tabIndex="0"
                      role="link"
                    >
                      {user?.name}
                    </p>
                  </a>
                  <p className="text-sm mx-2">@{user?.username}</p>
                </div>
                {/* ===Social=== */}
                <div className="flex gap-4 ml-4">
                  <a
                    href="https://instagram.com/instagram_username"
                    className="text-slate-500 flex  items-center justify-center "
                  >
                    <AiOutlineInstagram />/{user?.instagram_username}
                  </a>
                  <a
                    href="https://twitter.com/twitter_username"
                    className="text-slate-500 flex items-center justify-center"
                  >
                    <FiTwitter />/{user?.twitter_username}
                  </a>
                </div>
              </div>
              <div className="flex gap-4 text-lg text-slate-500 items-center justify-center">
                <p className="flex gap-1 font-bold  items-center justify-center">
                  <HiDownload />
                  1.3K
                </p>
                <p className="flex gap-1 font-bold  items-center justify-center">
                  <BiLike />
                  {likes}K
                </p>
              </div>
            </div>

            {/* <====Tags====> */}
            <div>
              <h1 className="text-xl font-bold my-2">Related tags</h1>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button className="btn text-black bg-slate-300 border-none">
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
