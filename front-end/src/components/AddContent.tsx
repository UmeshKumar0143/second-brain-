import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
export default function AddContent(){
    const [content, setContent] = useState("youtube"); 

    const handleClose = ()=>{
        
    }
    return <div className="absolute top-0 left-0 h-screen flex justify-center  items-center w-screen bg-opacity-60 bg-gray-100 ">
            <div className="w-[500px] h-[450px] rounded-xl shadow-lg bg-white  absolute ">
                <div className="container mt-5 p-5">
                    <IoCloseSharp onClick={handleClose} className="text-2xl absolute right-5 top-4" />
                    <h1 className="text-2xl text-center font-bold tracking-tighter uppercase text-purple-600 ">Add a new Link  </h1>
                    <div className="mt-3">
                    <label htmlFor="Title" className="text-lg font-medium">Enter your Title: </label>
                    <input id="Title" className="px-4 py-2 text-lg font-bold rounded-lg border-2 w-full focus:outline-purple-400 " placeholder="Title" type="text" />
                    <label htmlFor="link" className="text-lg font-medium">Paste you link: </label>
                    <input id="link" className="px-4 py-2 rounded-lg text-lg  text-blue-400 border-2 w-full focus:outline-purple-400 " placeholder="Paste your link " type="text" />
                    <div className="mt-5">
                        <h1 className="text-center font-bold uppercase  text-lg ">Type</h1>
                        <div className="flex gap-4 mt-3 justify-center">
                        <button onClick={()=>setContent("youtube")}  className={`px-4 py-2 bg-purple-300 hover:scale-110 transition-all ease-in-out duration-100 rounded-xl text-lg font-bold ${content=="youtube"? "bg-purple-500 text-white": "bg-purple-300 text-purple-500"} `}>Youtube</button>
                        <button  onClick={()=>setContent("tweet")} className={`px-4 py-2 bg-purple-300 hover:scale-110 transition-all ease-in-out duration-100 rounded-xl text-lg font-bold ${content=="tweet"? "bg-purple-500 text-white": "bg-purple-300 text-purple-500"} `}>Twitter</button>
                        </div>
                    </div>
                    <button className="w-full bg-purple-500 rounded-xl px-2 py-2 mt-3 text-lg text-white font-bold">Submit</button>
                    </div>
                </div>
            </div>
    </div>
}