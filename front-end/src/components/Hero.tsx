import { FaXTwitter } from "react-icons/fa6"
import { MdDeleteOutline } from "react-icons/md"

export default function Hero(){
    const content = {}

    return <div className="container">
        <div className="">
            <div className="w-[400px] h-[450px] p-4 rounded-xl bg-slate-300 shadow shadow-lg">
                <div className="flex  justify-between items-center">
                    <h1 className="text-xl inline-flex  justify-center  items-center gap-2 font-semibold"><FaXTwitter/>Tweets</h1>
                        <span className="text-white hover:cursor-pointer hover:scale-105 text-2xl" ><MdDeleteOutline /></span>
                </div>
                <div className="imed">
                    
                </div>
            </div>
        </div>
    </div>
}