import { createContext, useState } from "react";
import { CityProps, WeatherForecastProps } from "../types";

const Contexto = createContext({} as any);

const Provider = ({ children }: any) => {
    const [city, setCity] = useState<CityProps>({
        status: "empty",
        id: "",
        name: "",
        uf: ""
    });

    const [forecasts, setForecasts] = useState<WeatherForecastProps>({
        status: "empty",
        updated: "",
        forecasts: []
    });

    return (
        <Contexto.Provider
            value={{
                city,
                forecasts,
                setCity,
                setForecasts
            }}>

            {children}
            
        </Contexto.Provider>
    )
}

export { Contexto, Provider };