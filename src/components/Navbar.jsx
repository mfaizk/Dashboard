import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import Logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="mx-auto lg:mx-20 flex justify-between items-center text-customPurple p-4 md:py-4 py-6 md:px-4 px-6 ">
      <div className="text-customPurple text-lg">
        <img src={Logo} alt="" />
      </div>
      <div className={`md:flex flex-row list-none text-lg gap-10 hidden`}>
        <li className="text-[#dfbfdf]">My Assignment</li>
        <li className="text-[#dfbfdf]">Chat with Mentors</li>
        <li className="text-customPurple flex justify-center items-center gap-1">
          <FaUserCircle /> <h1>ProfileName</h1> <IoIosArrowDown />
        </li>
      </div>
      <div className="md:hidden flex bg-customPurple h-10 w-40 justify-center items-center gap-2 rounded-md">
        <h1 className="text-[#fff] text-xl">ProfileName</h1>
        <IoIosArrowDown color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
