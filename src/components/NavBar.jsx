import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

const NavBar = ({ setSearch }) => {
  const [theme, setTheme] = useState("light");

  const searchField = (e) => {
    e.preventDefault();

    const text = e.target.value;
    // console.log(e.target.value);
    setSearch(text.toLowerCase());
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleMode = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="navbar bg-base-100 flex flex-row justify-between gap-10 dark:bg-[#232323] dark:text-slate-300 px-20">
      <div className="">
        <a href="/" className="btn btn-ghost normal-case text-xl">
          Image Gallery
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control flex flex-row items-center justify-center gap-3">
          <input
            onChange={searchField}
            type="text"
            name="searchValue"
            placeholder="Search"
            className="input input-bordered dark:bg-[#4F4F4F] border border-[#858484]"
          />
          <p className="text-2xl">
            <FaSearch />
          </p>
        </div>
      </div>
      <div>
        <ul className="flex flex-row gap-5 items-center justify-center">
          <li>Explore</li>
          <li>Collection</li>
          <li>Community</li>
          <p className="flex items-center justify-center">
            <li>Dark Mood</li>
            <div onChange={handleMode} className="form-control">
              <label className="label cursor-pointer">
                <input type="checkbox" className="toggle" />
              </label>
            </div>
          </p>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
