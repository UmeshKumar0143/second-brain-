import { CiShare2 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

export default function Navbar(){
    return <div className="container ">
        <div className=" flex justify-between   p-5 "> 
            <div className="">
            <h1 className="text-3xl font-bold uppercase tracking-wide   ">All Notes </h1>
            </div>
            <div className="flex justify-center items-center gap-5">
                <button className="text-lg font-semibold px-4 py-2 bg-purple-300 flex items-center justify-center gap-2 rounded-xl text-purple-500" ><CiShare2/>Share Brain</button>
                <button className="text-lg font-semibold px-4 py-2 bg-purple-600 flex items-center justify-center gap-2 rounded-xl text-white" ><FaPlus/>Add Content</button>
            </div>
        </div>
    </div>
}