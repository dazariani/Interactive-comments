import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  background-color: ${(props) => props.theme.White};
  border-radius: 8px;
`;
export const TextField = styled.textarea`
  width: 100%;
  min-height: 100%;
  overflow: hidden;
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.LightGray};
  padding: 12px;
  margin-bottom: 16px;
  @media (min-width: 768px) {
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      border-width: 1px;
      border-color: ${(props) => props.theme.ModerateBlue};
    }
    &:focus {
      outline: none;
      cursor: auto;
    }
  }
`;
export const AvatarAndBtnBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Avatar = styled.img`
  width: 32px;
  @media (min-width: 768px) {
    width: 40px;
  }
`;
export const SendBtn = styled.button`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  color: ${(props) => props.theme.White};
  background-color: ${(props) => props.theme.ModerateBlue};
  padding-inline: 29px;
  padding-block: 11px;
  border-radius: 8px;
  border: none;
  @media (min-width: 768px) {
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.LightGrayishBlue};
    }
  }
`;
