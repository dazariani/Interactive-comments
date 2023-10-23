import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.White};
  padding: 16px;
  margin-block: 10px;
`;
export const Field = styled.textarea`
  font-family: "Rubik", sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.LightGray};
  padding: 12px;
  margin-bottom: 16px;
  overflow: hidden;
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
export const CloseText = styled.span`
  width: 36px;
  align-self: end;
  margin-bottom: 8px;
  font-size: 14px;
`;
export const AvatarBtnBox = styled.div`
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
export const Button = styled.button`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.White};
  background-color: ${(props) => props.theme.ModerateBlue};
  padding-inline: 15px;
  padding-block: 8px;
  border-radius: 8px;
  border: none;
  @media (min-width: 768px) {
    cursor: pointer;
    font-size: 14px;
    padding-inline: 18px;
    padding-block: 12px;
    transition: 0.1s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.LightGrayishBlue};
    }
  }
`;
