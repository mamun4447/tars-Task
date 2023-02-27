import React from "react";
import { BsSearch } from "react-icons/bs";

const Header = ({ search }) => {
  return (
    <div>
      <header className="bg-white dark:bg-zinc-800 ">
        <div className="w-full bg-center bg-cover h-[38rem] ">
          <img
            className="absolute w-full h-[92vh] dark:bg-zinc-800"
            src="https://s3-alpha-sig.figma.com/img/e743/8927/0934542578d7a5804676ffdeb1326d02?Expires=1678060800&Signature=mASvbVHWxIjfqBGYdVIOJnGCycNlEsKo5U-UVxAn00Y7kSkR9UKZk-btPL8~2tbwDlvG1aUOhXW2YSIAiy2CprrdEhV1HU6Krpn-08b1MT4I20zbv8umbARDkRcDt1oJswxdfW-g70mGzPnK3vs5-vmHECmyRXi-crGrWGkpZyi-P8FLyOF1KwAxkbZXgg-pkhJH0TB4z8BEW1dHIDWCPQOjj6Bpee4fzwTmfXL2KnMg5UILoxNA7GU9ab1tiDgXDjtazG9b5opic8lRvoQarXN9IXXhPtKuvuL2wCf9PcleJpl4qtYpWTO27HLk4R0~S6GLPzTyK9-GCNkGvgdTyw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
            alt=""
          />
          <div className="flex items-center justify-center w-full h-full bg-gray-900/40 relative px-5">
            <div className="text-center">
              <h1 className="text-3xl font-semibold text-white lg:text-4xl ">
                Download High Quality Images by creators
              </h1>
              <p className="text-slate-300">
                Over 2.4 million+ stock Images by our talented community
              </p>
              <div className="flex justify-center items-center gap-3">
                <p className="text-white text-3xl">
                  <BsSearch />
                </p>
                <input
                  className="h-12 my-3 w-full rounded-full px-4 dark:bg-[#4F4F4F] border border-[#858484] shadow-2xl"
                  type="text"
                  placeholder="Search high resolution Image, categories and wallpapers "
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
