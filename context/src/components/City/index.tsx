import styled from "styled-components";
import { CityProps } from "../../types";
import { Loading, Message } from "..";

export default function City(props: CityProps) {
  return (
    <>
      {props.status === "done" ? (
        <WrapperSld>
          {props.name} - {props.uf}
        </WrapperSld>
      ) : props.status === "loading" ? (
        <Loading />
      ) : props.status === "error" ? (
        <Message text={"Problemas ao obter a cidade"} />
      ) : (
        ""
      )}
    </>
  );
}

const WrapperSld = styled.div`
  margin: 20px 0px 0px 0px;
  font-size: 16px;
  font-weight: bold;
`;
