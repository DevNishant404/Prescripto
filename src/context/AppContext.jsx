import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext=createContext()

function ApplicationContext({children}) {

    const value={
        doctors
    }

    return ( 
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
     );
}

export default ApplicationContext;