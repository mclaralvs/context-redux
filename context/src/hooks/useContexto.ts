import { useContext } from "react";
import { Contexto } from "../contexts";

function useContexto() {
    const context = useContext(Contexto);
    return context;
}

export default useContexto;