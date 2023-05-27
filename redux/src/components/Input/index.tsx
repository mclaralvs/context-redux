import styled from "styled-components";

interface Props {
  value: string;
  set: Function;
  operation: Function;
}

export default function Input({ value, set, operation }: Props) {
  return (
    <WrapperSld>
      <LabelSld htmlFor="city">Nome da cidade</LabelSld>
      <InputSld id="city" placeholder="Cidade" value={value} onChange={e => set(e.target.value)} />
      <ButtonSld onClick={() => operation()}>buscar</ButtonSld>
    </WrapperSld>
  );
}

const WrapperSld = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const LabelSld = styled.label`
  font-size: 14px;
  margin-bottom: 2px;
`;

const InputSld = styled.input.attrs({ type: "text" })`
  border: 1px solid #555;
  border-radius: 5px;
  padding: 5px;
  font-weight: bold;
  font-family: calibri;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
`;

const ButtonSld = styled.button`
  align-self: center;
  width: 50%;
  padding: 6px;
  margin-top: 5px;
  font-weight: bold;
  border-radius: 5px;
  font-size: 16px;
  border: 1px solid #2F4F4F;
  background-color: #2F4F4F;
  color: #fff;
  &:hover {
    opacity: 0.8;
  }
`;
