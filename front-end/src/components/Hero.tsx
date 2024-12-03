    import { useEffect, useState, } from "react"
import { FaXTwitter, FaYoutube } from "react-icons/fa6"
import { MdDeleteOutline } from "react-icons/md"
import {  Link } from "react-router-dom"
import { BACKEND_URL } from "../config"
import axios from "axios"

interface items {
    _id: string; 
    type: "tweet" | "youtube";
    title: string; 
    link: string; 
}

export default function Hero(){
    const [content , setContent] = useState<items[]>([])
    useEffect(()=>{
        fetch(`${BACKEND_URL}content/api/v1/getContent`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', 
          })
            .then((response) => response.json())
            .then((data) => setContent(data.content)); 

    },[content])
    const user = JSON.parse(localStorage.getItem("user") || "null");
    return <div className="container">
         <blockquote className="twitter-tweet text-black">
                     <a href="https://x.com/fromAlqama/status/1862510295882641507"></a> 
                </blockquote>
        {user  ? <div className="flex flex-wrap   gap-10 ">
           {content.slice().reverse().map((item,index)=> <div key={index} id="cards" className=" w-[350px] overflow-hidden overflow-y-auto h-[450px] flex-shrink p-4 rounded-xl bg-slate-100  shadow-lg">
                <div className="flex  justify-between border-b-2  pb-2 items-center">
                    <h1 className="text-xl inline-flex  justify-center  items-center gap-2 font-semibold">{item.type=="tweet"? <FaXTwitter/>: <FaYoutube className="text-2xl text-red-500"/>}{item.type=="tweet"? "Tweets": "Youtube"}</h1>
                        <button onClick={()=>axios.delete(`${BACKEND_URL}content/api/v1/deletecontent/${item._id}`,{withCredentials: true})} className="text-red-400 hover:cursor-pointer hover:scale-110 text-2xl" ><MdDeleteOutline /></button>
                </div>
                <h1 className="text-xl font-semibold text-center mt-4 underline capitalize tracking-wider leading-none "><Link to={item.link} target="_blank" >{item.title}</Link></h1>
                <div className="imbed mt-8  w-full   rounded-xl">
                {item.type =="tweet"? <div><blockquote className="twitter-tweet">
        <a href={item.link}></a> 
      </blockquote></div>:<iframe className="rounded-xl ml-2" width={"300px"} height={"300px"} src={item.link.replace("watch?v=", "embed/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                </div>
            </div>)}
        </div>: <div className="w-full h-screen flex justify-center items-center "><div><h1 className="text-5xl font-bold capitalize ">Log in First to see content</h1></div></div>}
      
    </div>
}

