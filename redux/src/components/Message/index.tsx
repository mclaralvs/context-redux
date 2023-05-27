import styled from "styled-components";

export default function Message(props:{text:string}) {
  return <MessageSld>{props.text}</MessageSld>;
}

const MessageSld = styled.div`
  margin: 20px 0px;
  font-size: 16px;
`;
