import styled from "styled-components";

export const Container = styled.div`
  background-color: ${(props) => props.theme.White};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-inline: 16px;
  padding-block: 20px 16px;
  margin-bottom: 16px;
  border-radius: 8px;
`;
export const PersonalDataBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;
  margin-bottom: 16px;
`;
export const Anchor = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.DarkBlue};
`;
export const Avatar = styled.img`
  max-width: 32px;
`;
export const UserName = styled.span`
  font-size: 16px;
  font-weight: 500;
  line-height: normal;
`;
export const YouMark = styled.div`
  font-size: 13px;
  font-weight: 500;
  line-height: 1.3;
  border-radius: 2px;
  color: ${(props) => props.theme.White};
  background-color: ${(props) => props.theme.ModerateBlue};
  padding: 2px 6px;
  border-radius: 2px;
`;
export const Time = styled.span`
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.GrayishBlue};
`;
export const ReplyingToName = styled.a`
  color: ${(props) => props.theme.ModerateBlue};
  text-decoration: none;
  font-weight: 700;
`;
export const Content = styled.p`
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  color: ${(props) => props.theme.GrayishBlue};
  text-align: start;
  margin-bottom: 16px;
  align-self: flex-start;
`;
export const ScoreReplyBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const ScoreBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: ${(props) => props.theme.VeryLightGray};
  padding-inline: 12px;
  padding-block: 10px;
  border-radius: 10px;
`;
export const ScoreNum = styled.span``;
export const PlusImg = styled.img`
  padding: 5px;
  @media (min-width: 768px) {
    cursor: pointer;
  }
`;
export const MinusImg = styled(PlusImg)``;
export const DeleteReplyBox = styled.div`
  display: flex;
  gap: 20px;
`;
export const ReplyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.ModerateBlue};
  @media (min-width: 768px) {
    cursor: pointer;
    transition: 0.1s ease-in-out;
    &:hover {
      opacity: 0.5;
    }
  }
`;
export const ArrowImg = styled.img``;
export const ReplyText = styled.span`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;
export const DeleteBox = styled(ReplyBox)`
  color: ${(props) => props.theme.SoftRed};
`;
export const DeleteImg = styled.img``;
export const DeleteText = styled(ReplyText)``;

export const EditBox = styled(ReplyBox)``;
export const EditImg = styled.img``;
export const EditText = styled(ReplyText)``;

// Edit field
export const EditFieldBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
`;
export const EditField = styled.textarea`
  width: 100%;
  height: 170px;
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
export const UpdateBtn = styled.button`
  border: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => props.theme.White};
  background-color: ${(props) => props.theme.ModerateBlue};
  padding-inline: 15px;
  padding-block: 8px;
  border-radius: 8px;
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
