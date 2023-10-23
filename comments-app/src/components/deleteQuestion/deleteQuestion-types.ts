import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  position: fixed;
  top: 30vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  background-color: ${(props) => props.theme.White};
  border-radius: 8px;
`;
export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: normal;
  color: ${(props) => props.theme.DarkBlue};
  margin-bottom: 20px;
`;
export const QuestionText = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.GrayishBlue};
  margin-bottom: 20px;
`;
export const BtnsBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
export const NoBtn = styled.button`
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.GrayishBlue};
  color: ${(props) => props.theme.White};
  padding-inline: 24px;
  padding-block: 12px;
`;
export const YesBtn = styled(NoBtn)`
  background-color: ${(props) => props.theme.SoftRed};
`;
