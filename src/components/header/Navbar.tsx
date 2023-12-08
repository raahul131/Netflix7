import { useEffect, useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { BsBell } from "react-icons/bs";

import Logo from "../../assets/Logonetflix.png";
import MobileMenu from "./MobileMenu";
import userIcon from "../../assets/userIcon.jpg";
import UserProfile from "./UserProfile";
import { Link } from "react-router-dom";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 gap-10 ${
          showBackground ? "bg-zinc-900 bg-opacity-90" : ""
        }`}
      >
        <Link to="/">
          <img src={Logo} alt="logo" className="h-4 md:h-11" />
        </Link>
        <div className="flex-row gap-7 hidden md:flex text-white">
          <p className="cursor-pointer hover:text-gray-300 transition">Home</p>
          <p className="cursor-pointer hover:text-gray-300 transition">
            TV Shows
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition">
            Movies
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition">
            New & Popular
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition">
            My List
          </p>
          <p className="cursor-pointer hover:text-gray-300 transition">
            Browse by Language
          </p>
        </div>
        <div
          onClick={() => setShowMobileMenu((prev) => !prev)}
          className="lg:hidden flex flex-row justify-end items-center gap-3 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          {showMobileMenu && <MobileMenu />}
        </div>

        {/* Profile Menu */}
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsSearch size={18} />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BsBell size={19} />
          </div>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer relative"
            onClick={() => setShowUserProfile((prev) => !prev)}
          >
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md  overflow-hidden">
              <img src={userIcon} alt="" />
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showUserProfile ? "rotate-180" : "rotate-0"
              }`}
            />
            {showUserProfile && <UserProfile />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
