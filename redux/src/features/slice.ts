import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CityProps, ForecastProps, WeatherForecastProps, WeatherProps } from "../types";
import { AppThunk } from "./store";
import { listCities, weatherForest } from "../services/Weather";

const slice = createSlice({
    name: "Slice",
    initialState: {
        city: {
            status: "empty",
            name: "",
            uf: ""
        } as CityProps,

        forecasts: {
            status: "empty",
            updated: "",
            forecasts: [] as ForecastProps[]
        } as WeatherForecastProps,
        
    } as WeatherProps,
    reducers: {
        setCity: (state, action: PayloadAction<CityProps>) => {
            state.city = action.payload;
        },

        setForecast: (state, action: PayloadAction<WeatherForecastProps>) => {
            state.forecasts = action.payload;
        }
    }
});

export const loadCity =
    (name: string): AppThunk<void> =>
        async (dispatch, getState) => {
            dispatch(setCity({
                status: "loading",
                id: "",
                name: "",
                uf: ""
            }));
            const res = await listCities(name);
            dispatch(setCity(res));
        };

export const loadForecast = (): AppThunk<void> =>
    async (dispatch, getStat) => {
        const res = getStat();

        dispatch(setForecast({
            status: "loading",
            updated: "",
            forecasts: []
        }));

        const forecasts = await weatherForest(res.city.id);

        dispatch(setForecast(forecasts));
    }

export const { setCity } = slice.actions;

export const { setForecast } = slice.actions;

export default slice.reducer;