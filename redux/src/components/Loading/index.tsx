import styled from "styled-components";

export default function Loading() {
  return <LoadingSld>Carregando...</LoadingSld>;
}

const LoadingSld = styled.div`
  margin: 20px 0px;
  font-size: 16px;
`;
