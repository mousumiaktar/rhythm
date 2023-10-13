import { useState } from 'react';
import { BiChevronDown } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import { BsPerson } from "react-icons/bs";
import { RiMenu2Fill } from "react-icons/ri";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);

    return (
        <div>
            <nav className="z-[11] sticky top-0  bg-white" >
                <div className="container mx-auto p-1 relative pt-3">
                    <div className="md:flex md:justify-between md:items-center ">
                        {/* first part */}
                        <div className="flex justify-between items-center">
                            <RiMenu2Fill
                                onClick={() => setOpen(!open)}
                                className="me-3 lg:hidden cursor-pointer  text-4xl text-primary"
                            />
                            <div className="">
                                <img
                                    src="https://i.ibb.co/8BgbNgn/log.webp"
                                    alt="logo"
                                    className="h-12"
                                />
                            </div>
                        </div>
                        {/* second part */}
                        <ul className="hidden lg:flex items-center font-semibold space-x-6">
                            <li className="cursor-pointer">
                                <span>
                                    Home
                                </span>
                            </li>
                            <li className="cursor-pointer group relative">
                                <span className="flex justify-center items-center">
                                    Our Services <BiChevronDown className="text-xl" />
                                </span>
                                <ul className="absolute left-0 hidden group-hover:block bg-white border border-gray-700 p-2 w-48">
                                    <li className=''>
                                        <span className=''>
                                            Music Distribution
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Caller Tune Distribution
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Music Video Distribution in india & worldwide
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li className="cursor-pointer">
                                <span>
                                    Pricing
                                </span>
                            </li>
                            <li className="cursor-pointer">
                                <span>
                                    Contact
                                </span>
                            </li>
                            <li
                                className="flex justify-between gap-2 items-center p-2 border-2 border-red-700 rounded-lg text-red-700"
                            >
                                <BsPerson />
                                Register / Login
                            </li>
                        </ul>
                    </div>
                    {/* mobile navbar */}
                    <div
                        className={`lg:hidden bg-gray-800 w-[280px] md:w-[260px] h-screen absolute ${open
                            ? "-top-4 -left-2 transition-all duration-700 "
                            : "top-0 -left-full transition-all duration-1000 delay-300"
                            }`}
                    >
                        <div className="bg-white p-[17px] flex justify-between items-center">
                            <span className="cursor-pointer">
                                <img
                                    src="https://i.ibb.co/8BgbNgn/log.webp"
                                    alt="logo"
                                    className="h-7"
                                />
                            </span>
                            <IoIosClose
                                className="text-3xl font-bold cursor-pointer"
                                onClick={() => setOpen(!open)}
                            />
                        </div>
                        <ul className="space-y-3 text-sm cursor-pointer">
                            <li
                                className="text-white border-b border-white"
                            >
                                <div
                                    onClick={() => setSubmenuOpen(!submenuOpen)}
                                    className="flex justify-between items-center p-3"
                                >
                                    Home
                                    <span>
                                        <BiChevronDown className="text-2xl" />
                                    </span>
                                </div>
                            </li>
                            <li
                                className="text-white border-b border-white flex justify-between items-center p-3"
                            >
                                Our Services
                                <span>
                                    <BiChevronDown className="text-xl" />
                                </span>
                            </li>
                            <li
                                className="text-white border-b border-white flex justify-between items-center p-3"
                            >
                                Pricing
                                <span>
                                    <BiChevronDown className="text-xl" />
                                </span>
                            </li>
                            <li
                                className="text-white border-b border-white flex justify-between items-center p-3"
                            >
                                Contact
                                <span>
                                    <BiChevronDown className="text-xl" />
                                </span>
                            </li>
                            <li
                                className="flex justify-between items-center p-3 text-white border-b border-white"
                            >
                                Register / Login
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;