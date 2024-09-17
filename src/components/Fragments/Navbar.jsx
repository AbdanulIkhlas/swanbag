import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenuOutline } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { MdOutlineShoppingCart } from "react-icons/md";

const menu = [
  {
    name: "Beranda",
    path: "/",
    active: true,
    icon: "svg/home-nav.svg",
  },
  {
    name: "Produk",
    path: "/product",
    active: false,
    icon: "svg/product-nav.svg",
  },
  {
    name: "Tentang Kami",
    path: "/about",
    active: false,
    icon: "svg/about-nav.svg",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="top-0 relative font-poppins">
        <div className="flex pt-8 md:px-[82px] justify-between items-center lg:px-[134px] w-full ">
          <div className="flex flex-row items-center">
            <IoMenuOutline
              className="h-8 w-[71px] md:hidden"
              onClick={toggleMenu}
            />
            <img
              src="images/logo.png"
              alt=""
              className="h-8 w-[71px] md:h-[72px] md:w-[162px] lg:h-[85px] lg:w-[191px]"
            />
          </div>
          <a href="https://id.shp.ee/BEfJANp" target="_blank">
            <MdOutlineShoppingCart className="h-5 w-5 me-5 md:hidden" />
          </a>
          <div className="hidden md:flex">
            <div className="flex md:mr-10 lg:mr-[76px]">
              {menu.map((item) => (
                <Link
                  to={item.path}
                  key={item.name}
                  className={`md:ml-5 py-4 lg:ml-8 md:text-sm lg:text-base font-medium text-black ${
                    location.pathname === item.path ? "text-primary" : ""
                  } `}
                >
                  {item.name}
                  <span className="flex justify-center">
                    {location.pathname === item.path && (
                      <GoDotFill className="center" />
                    )}
                  </span>
                </Link>
              ))}
            </div>
            <a href="https://id.shp.ee/BEfJANp" target="_blank">
              <MdOutlineShoppingCart className=" md:h-6 md:w-6 sm:hidden md:block mt-4" />
            </a>
          </div>
        </div>
        {isMenuOpen && (
          <div className="fixed inset-0 z-40" onClick={toggleMenu}></div>
        )}
        <SideBar isMenuOpen={isMenuOpen} />
      </nav>
    </>
  );
};

const SideBar = ({ isMenuOpen }) => {
  return (
    <div
      className={`w-[292px] h-screen fixed top-0 z-50 bg-white border-r-2 transition-transform duration-300 ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col pt-5 px-4">
        <img src="images/logo.png" alt="" className="h-[37px] w-[82px] mb-6" />
        <h3 className="text-sm font-bold text-[#8391A1] mb-5">MENU UTAMA</h3>
        <div className="flex flex-col gap-5">
          {menu.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="flex items-center py-3"
            >
              <img src={item.icon} alt="" className="px-5" />
              <p className="text-base font-semibold">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
