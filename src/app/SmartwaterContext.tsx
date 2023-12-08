import { createContext, useState } from "react";

type SmartwaterContextType = {
    showModal: boolean
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

export const SmartwaterContext = createContext<SmartwaterContextType>(
    {} as SmartwaterContextType
);

export const SmartwaterProvider = ({ children }: any) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    return (
        <SmartwaterContext.Provider value={{
            showModal, 
            setShowModal
        }}>
            {children}
        </SmartwaterContext.Provider>
    );
}