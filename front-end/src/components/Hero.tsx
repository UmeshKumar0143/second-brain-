    import { FaXTwitter, FaYoutube } from "react-icons/fa6"
import { MdDeleteOutline } from "react-icons/md"
import { Link } from "react-router-dom"
export default function Hero(){
    const content = [
        {link: "https://twitter.com/three_cube/status/1847014253511037322",type:"twitter",title:"Job"},
        {link: "https://www.youtube.com/watch?v=1gvGn8NtIpE",type:"youtube",title:"Cyberpunk"},
    ]

    


    return <div className="container">
         <blockquote className="twitter-tweet text-black">
                     <a href="https://x.com/fromAlqama/status/1862510295882641507"></a> 
                </blockquote>
        <div className="flex  gap-8 ">
           {content.map((item,index)=> <div key={index} id="cards" className=" w-[400px] overflow-hidden overflow-y-auto h-[450px] p-4 rounded-xl bg-slate-100  shadow-lg">
                <div className="flex  justify-between border-b-2  pb-2 items-center">
                    <h1 className="text-xl inline-flex  justify-center  items-center gap-2 font-semibold">{item.type=="twitter"? <FaXTwitter/>: <FaYoutube className="text-2xl"/>}{item.type=="twitter"? "Tweets": "Youtube"}</h1>
                        <span className="text-black hover:cursor-pointer hover:scale-110 text-2xl" ><MdDeleteOutline /></span>
                </div>
                <h1 className="text-xl font-semibold text-center mt-4 underline capitalize tracking-wider leading-none "><Link to={item.link} target="_blank" >{item.title}</Link></h1>
                <div className="imbed mt-8  w-full   rounded-xl">
                {item.type =="twitter"? <div><blockquote className="twitter-tweet">
        <a href={item.link}></a> 
      </blockquote></div>:<iframe className="rounded-xl ml-2" width={"350px"} height={"300px"} src={item.link.replace("watch?v=", "embed/")} title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                </div>
            </div>)}
        </div>
      
    </div>
}

