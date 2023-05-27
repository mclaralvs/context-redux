import styled from "styled-components";
import { useState } from "react";
import { Input, City, Forecast } from "../components";
import { CityProps, WeatherForecastProps } from "../types";
import { useContexto } from "../hooks";
import { listCities, weatherForest } from "../services/Weather";

export default function Main() {
	const [input, setInput] = useState("São José dos Campos");
	
	const { city, setCity, forecasts, setForecasts }: { city: CityProps, setCity: Function, forecasts: WeatherForecastProps, setForecasts: Function } = useContexto();

	const loadCity = async (name: string) => {
		setCity({
			status: "loading",
			id: "",
			name: "",
			uf: ""
		});

		const res = await listCities(name);

		setCity(res);

		await loadForecasts(res.id)
	}

	const loadForecasts = async (id: string) => {
		setForecasts({
			status: "loading",
			updated: "",
			forecasts: []
		});

		const res = await weatherForest(id);

		setForecasts(res);
	}

	return (
		<WrapperSld>
			<TitleSld>Previsão do Tempo</TitleSld>

			<Input
				value={input}
				set={setInput}
				operation={() => loadCity(replace(input))}
			/>

			{city && <City {...city} />}

			{forecasts && <Forecast {...forecasts} />}
		</WrapperSld>
	);
}

function replace(text: string) {
	return text
		.toLowerCase()
		.replaceAll(/ã|á|à|â/g, "a")
		.replaceAll("ç", "c")
		.replaceAll(/é|è|ê/g, "e")
		.replaceAll(/í|ì|î/g, "i")
		.replaceAll(/õ|ô|ó/g, "o")
		.replaceAll(/ú|ü/g, "u");
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  box-sizing: border-box;
  background-color: #8fbc8f;
  width: 400px;
`;

const TitleSld = styled.h3`
  padding: 10px 0px;
  margin: 10px 0px 0px 0px;
  text-align: center;
  box-sizing: border-box;
`;