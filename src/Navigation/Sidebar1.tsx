import { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoPersonAdd } from "react-icons/io5"
import { MdDelete } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
import { FaUserEdit } from "react-icons/fa";

import vag_logo1 from '../Static Files/vag_logo1.jpg'


const Sidebar = ( ) => {
    const [ nav, setNav ] = useState<boolean>( false )

    const menuItems: any = [
        { icon: <BsFillPeopleFill size={ 25 } className="mr-4" />, text: "View All Employees"},
        { icon: <IoPersonAdd size={25} className="mr-4" />, text: "Add New Employee" },
        { icon: <FaUserEdit size={25} className="mr-4" />, text: "Update Employee Details" },
        { icon: <MdDelete size={25} className="mr-4" />, text: "Delete Employee" },
    ]

    return (
        <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-md">
                {/* Left side */}
                <div className="flex items-center">

                    <img src={ vag_logo1 } width={ 60 } alt='vag' />

                    <h1 className="text-xl px-2">
                        VAG <span className="font-bold">EMS</span>
                    </h1>

                    <div onClick={() => setNav(!nav)} className="cursor-pointer ml-5 mb-2">
                        <AiOutlineMenu size={ 30 } />
                    </div>

                </div>
                {/* end of left side */ }


                {/* Search Input */}
                <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                    <AiOutlineSearch size={25} />
                    <input
                        className="bg-transparent p-2 w-full focus:outline-none"
                        type="text"
                        placeholder="Search employee"
                    />
                </div>
                {/* end of search input */}


                {/* Mobile Menu */}
                {/* Overlay */}
                { nav ? (
                    <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                ) : (
                    ""
                )}


                {/* Side drawer menu */}
                <div className={ nav ? 
                                    "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                                    : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300" 
                                }
                                >
                    <div className='flex shadow-md p-3'>
                        <AiOutlineClose
                        onClick={() => setNav(!nav)}
                        size={30}
                        className="absolute right-4 mt-4 cursor-pointer"
                        />

                        <img className='mt-3 ml-2' src={ vag_logo1 } width={ 60 } alt='vag' />

                        <h2 className="text-2xl p-4">
                        VAG <span className="font-bold">EMS</span>
                        </h2>
                    </div>

                    <nav>
                    <ul className="flex flex-col p-4 text-gray-800">
                        { menuItems.map(( item: any, index: any ) => {
                        return (
                            <div key={index} className=" py-4">
                            <li className="text-xl flex cursor-pointer  w-[95%] rounded-full mx-auto p-2 hover:text-white hover:bg-black">
                                {item.icon} {item.text}
                            </li>
                            </div>
                        );
                        })}
                    </ul>
                    </nav>
      </div>

        </div>
    )
}



export default Sidebar