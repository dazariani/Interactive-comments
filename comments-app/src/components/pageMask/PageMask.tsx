import styled from "styled-components";

function PageMask() {
  return <Mask></Mask>;
}

export default PageMask;

const Mask = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
