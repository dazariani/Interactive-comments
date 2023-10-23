import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  padding-inline: 16px;
  padding-block: 32px;

  @media (min-width: 768px) {
    width: 730px;
    margin: auto;
  }
`;
export const RepliesBox = styled.div`
  border-left: 2px solid #e9ebf0;
  padding-left: 16px;
  @media (min-width: 768px) {
    margin-left: 40px;
    padding-left: 40px;
  }
`;
