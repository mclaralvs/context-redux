import { CityProps, ForecastProps, WeatherForecastProps } from '../types';
import api from './api';

export async function listCities(city: string): Promise<CityProps> {
    await sleep(1000);
    try {
        const { data } = await api.get(`/listaCidades?city=${city}`);
        const XMLParser = require('react-xml-parser');
        let { children } = new XMLParser().parseFromString(data);
        if (children.length > 0) {
            return {
                status: "done",
                name: children[0].children[0].value,
                uf: children[0].children[1].value,
                id: children[0].children[2].value,
            };
        }
        return {
            status: "error",
            name: "",
            uf: "",
            id: "",
        };
    }
    catch (e: any) {
        return {
            status: "error",
            name: "",
            uf: "",
            id: "",
        }
    }
};

export async function weatherForest(id: string): Promise<WeatherForecastProps> {
    await sleep(1000);
    try {
        const { data } = await api.get(`/cidade/${id}/previsao.xml`);
        const XMLParser = require('react-xml-parser');
        let { children } = new XMLParser().parseFromString(data);
        if (children.length > 0) {
            const forecasts: ForecastProps[] = [];
            for (let i = 3; i <= 6; i++) {
                forecasts.push({
                    date: dateFormat(children[i].children[0].value),
                    max: children[i].children[2].value,
                    min: children[i].children[3].value,
                    iuv: children[i].children[4].value
                } as ForecastProps);
            }
            return {
                status: "done",
                updated: dateFormat(children[2].value),
                forecasts: forecasts
            };
        }
        return {
            status: "error",
            updated: "",
            forecasts: []
        };
    }
    catch (e: any) {
        return {
            status: "error",
            updated: "",
            forecasts: []
        }
    }
};

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function dateFormat(date: string){
    const d = date.split("-");
    return `${d[2]}/${d[1]}/${d[0]}`;
}