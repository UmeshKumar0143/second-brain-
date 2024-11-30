import { DiVim } from "react-icons/di";
import { FaBars, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoDocumentTextOutline, IoLinkSharp } from "react-icons/io5";
import { LuBrain } from "react-icons/lu";

export default function Sidebar(){

    const items = [
        {title: "Tweets", icon: <FaXTwitter />},
        {title: "Videos", icon: <FaYoutube/> },
        {title: "Documents", icon: <IoDocumentTextOutline /> },
        {title: "Links", icon: <IoLinkSharp /> },
        
    ]

    return <div className=" sm:border-r-2 sm:w-[300px]  sm:h-screen" >
        <div className="container p-5 ">
            <div className="flex  justify-between items-center">
            <div className="flex items-center sm:ml-5   gap-2 ">
            <LuBrain className="text-3xl text-purple-500 " />
            <h1 className="text-3xl font-bold  gap-2 tracking-tight leading-none"> SecondBrain </h1>
            </div>
            <span className="text-2xl sm:hidden  "><FaBars /></span>
            </div>
         
            <div className="mt-12 sm:flex hidden  flex-col gap-6 ">
            {
                items.map((item,index)=> <div key={index} className="hover:cursor-pointer hover:bg-purple-100 px-5 py-2 transition-all duration-200 ease-in-out  rounded-xl">
                    <span className="inline-flex  justify-center items-center text-2xl  gap-4">{item.icon}{item.title}</span>
                </div> )
            }
            </div>
        </div>
    </div>
}