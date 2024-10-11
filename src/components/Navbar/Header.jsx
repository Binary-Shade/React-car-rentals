
import { FaHeart } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BsFillCarFrontFill } from "react-icons/bs";

const Header = () => {
	return (
		<div className="w-full flex flex-col text-white bg-gray-900 overflow-hidden">
			<div className="m-4 w-full lg:px-[310px] px-1 flex items-center gap-3 justify-between ">
        <div className="flex justify-items-center items-center gap-3">
        <BsFillCarFrontFill />
				<Link to='/'><p className="font-semibold whitespace-nowrap">Stanch Rentals</p></Link>
        </div>
        <div className="flex w-36 px-4 py-1 lg:w-max">
      </div>
				<div className="flex mr-6">
          <div className="hidden lg:flex items-center justify-between gap-5">
                      <Link to={'/search'}><FaSearch /></Link>
                      <FaHeart />
                      <IoMdSettings />
                      <IoNotifications />
                      <FaUser />
                      <span className="">Davis John</span>
          </div>
          <div className="block md:hidden">
          <Link to={'/search'}><FaSearch /></Link>
          </div>
        </div>
			</div>
		</div>
	);
};

export default Header;