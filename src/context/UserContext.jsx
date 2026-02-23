import { createContext, useState } from "react";


export const UserContext = createContext();


const UserContextProvider = ({ children }) => {

    console.log('hello', 'I am user context');

    const [userName, setUserName] = useState('mohammed');

    return <UserContext.Provider value={{ userName , setUserName}}>
        { children }
    </UserContext.Provider>;

}


export default UserContextProvider;