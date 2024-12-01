import { CiShare2 } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import AddContent from "./AddContent";
import { useState } from "react";
import { IoMdExit } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navbar(){
    const  [isOpen, setIsOpen] = useState(false); 
    const [isUser, setisUser] = useState("umesh"); 
    const navigate = useNavigate(); 
    const HandleOpen =()=>{
        setIsOpen(true)
    }
    const HandleLogout = ( )=>{
        setisUser(""); 
    }
    return <div className="container ">
        <div className=" sm:flex justify-between sm:flex-row flex-col  p-5 "> 
            <div className="">
            <h1 className="sm:text-3xl text-center text-xl font-bold uppercase tracking-wide   ">All Notes </h1>
            </div>
            {isUser? <div className="flex justify-center items-center mt-3 sm:mt-0 gap-5">
                <button onClick={HandleOpen} className="sm:text-xl  text-base font-semibold px-2 py-2 sm:px-4 sm:py-2 bg-purple-600 flex items-center justify-center gap-2 rounded-xl text-white" ><FaPlus/>Add Content</button>
                <button className="sm:text-xl  text-base font-semibold px-2 py-2 sm:px-4 sm:py-2 bg-purple-300 flex items-center justify-center gap-2 rounded-xl text-purple-500" ><CiShare2/>Share Brain</button>
                 <div className="flex justify-center items-center gap-2"><span className=" rounded-full bg-purple-400 text-white uppercase text-xl w-8  h-8 font-bold  inline-flex justify-center items-center">{isUser.charAt(0)}</span><span className="text-xl font-bold capitalize tracking-tighter">{isUser}</span></div>
                <button onClick={HandleLogout} className="sm:text-lg  text-base font-semibold px-2 py-2 sm:px-3 sm:py-2 bg-red-500 flex items-center justify-center gap-2 rounded-xl text-white" >Log out<IoMdExit /></button>
            </div>: <div className="flex gap-4">
                    <button onClick={()=>navigate('/login')} className="px-3 py-2 bg-purple-400 text-white font-semibold text-xl rounded-xl ">Log in </button>
                    <button onClick={()=>navigate('/register')} className="px-3 py-2 bg-purple-400 text-white font-semibold text-xl rounded-xl ">Register</button>
                </div>}
            {isOpen && <AddContent setIsOpen = {setIsOpen} />}
        </div>
        
    </div>
}