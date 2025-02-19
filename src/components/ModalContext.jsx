import { createContext, useState } from "react"

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
    const [open, setOpen] = useState(0);
}