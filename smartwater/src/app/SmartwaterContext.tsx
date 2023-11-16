import { createContext } from "react";

type SmartwaterContextType = {

}

export const SmartwaterContext = createContext<SmartwaterContextType>(
    {} as SmartwaterContextType
);

export const SmartwaterProvider = ({ children }: any) => {


    return (
        <SmartwaterContext.Provider value={{

        }}>
            {children}
        </SmartwaterContext.Provider>
    );
}