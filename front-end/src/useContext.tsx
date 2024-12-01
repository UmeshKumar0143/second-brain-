import { createContext, ReactNode, useState } from "react";

interface User {
 name: string   
 password:string
 username: string 
 _id: string

}
interface UserContextType {
    user : User | null; 
    setUser: React.Dispatch<React.SetStateAction<User|null>>; 
}
export const userContext = createContext<UserContextType| undefined>(undefined); 
export function UserContextProvider({children}:{children:ReactNode}){
    const [user, setUser] = useState<User | null>(null)
    return <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
    
}