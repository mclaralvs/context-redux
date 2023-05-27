export type StatusProps = "empty" | "loading" | "done" | "error";

export interface CityProps {
    status: StatusProps;
    id: string;
    name: string;
    uf: string;
}

export interface ForecastProps {
    date: string;
    min: string;
    max: string;
    iuv: string;
}

export interface WeatherForecastProps {
    status: StatusProps;
    updated: string;
    forecasts: ForecastProps[]
}

export interface WeatherProps {
    city: CityProps;
    forecasts: WeatherForecastProps;
}