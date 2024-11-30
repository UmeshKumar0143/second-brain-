import { CiShare2 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";

export default function Navbar(){
    
    return <div className="container ">
        <div className=" sm:flex justify-between sm:flex-row flex-col  p-5 "> 
            <div className="">
            <h1 className="sm:text-3xl text-center text-xl font-bold uppercase tracking-wide   ">All Notes </h1>
            </div>
            <div className="flex justify-center items-center mt-3 sm:mt-0 gap-5">
                <button className="sm:text-xl  text-base font-semibold px-2 py-2 sm:px-4 sm:py-2 bg-purple-300 flex items-center justify-center gap-2 rounded-xl text-purple-500" ><CiShare2/>Share Brain</button>
                <button className="sm:text-xl  text-base font-semibold px-2 py-2 sm:px-4 sm:py-2 bg-purple-600 flex items-center justify-center gap-2 rounded-xl text-white" ><FaPlus/>Add Content</button>
            </div>
        </div>
        
    </div>
}