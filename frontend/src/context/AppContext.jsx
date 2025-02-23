import { createContext } from "react";
import { hairdresser } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = (props) => {


    const value = {
        hairdresser
        
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )


}


export default AppContextProvider;