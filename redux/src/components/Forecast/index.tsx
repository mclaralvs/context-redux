import styled from "styled-components";
import { WeatherForecastProps } from "../../types";
import { Loading, Message } from "..";

export default function Forecast(props: WeatherForecastProps) {
  return (
    <>
      {props.status === "done" ? (
        <WrapperSld>
          <UpdateSld>Atualizado em {props.updated}:</UpdateSld>
          {props.forecasts.map((item) => (
            <ForecastSld key={item.date}>
              {item.date}: {item.min}º - {item.max}º, IUV {item.iuv}
            </ForecastSld>
          ))}
        </WrapperSld>
      ) : props.status === "loading" ? (
        <Loading />
      ) : props.status === "error" ? (
        <Message text={"Problemas ao obter as previsões"} />
      ) : (
        ""
      )}
    </>
  );
}

const WrapperSld = styled.div`
  margin: 20px 0px;
  font-size: 16px;
`;

const UpdateSld = styled.div`
  margin: 5px 0px;
`;

const ForecastSld = styled.div`
  margin: 5px 0px;
`;
