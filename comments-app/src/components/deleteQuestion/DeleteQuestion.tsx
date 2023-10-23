import {
  Container,
  Title,
  QuestionText,
  BtnsBox,
  NoBtn,
  YesBtn,
} from "./deleteQuestion-types";

interface Props {
  setIsDeleteMsgOn: (props: boolean) => void;
  handleReplyDelete: (props: number) => void;
  deleteId: number;
}

function DeleteQuestion(props: Props) {
  const { setIsDeleteMsgOn, handleReplyDelete, deleteId } = props;
  return (
    <Container>
      <Title>Delete comment</Title>
      <QuestionText>
        Are you sure you want to delete this comment? This will remove the
        comment and can’t be undone.
      </QuestionText>
      <BtnsBox>
        <NoBtn onClick={() => setIsDeleteMsgOn(false)}>NO, CANCEL</NoBtn>
        <YesBtn
          onClick={() => {
            handleReplyDelete(deleteId);
            setIsDeleteMsgOn(false);
          }}
        >
          YES, DELETE
        </YesBtn>
      </BtnsBox>
    </Container>
  );
}

export default DeleteQuestion;
