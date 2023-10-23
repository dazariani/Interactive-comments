import { dataProps } from "../../data-types";
import { useRef } from "react";
import { sortData } from "../../sortData";
import {
  Container,
  TextField,
  AvatarAndBtnBox,
  Avatar,
  SendBtn,
} from "./newCommentField-types";

interface Props {
  data: dataProps;
  setData: (props: dataProps) => void;
  newComFieldValue: string;
  setNewComFieldValue: (props: string) => void;
}

function NewCommentField(props: Props) {
  const { data, setData, newComFieldValue, setNewComFieldValue } = props;
  const commentFieldRef = useRef<HTMLTextAreaElement>(null);

  // Add new comment function
  const addNewComment = () => {
    if (
      commentFieldRef.current &&
      /([^\s])/.test(commentFieldRef?.current.value)
    ) {
      let newData = { ...data };
      newData.comments.push({
        id: Date.now(),
        content: newComFieldValue,
        createTime: Date.now(),
        createdAt: "0 seconds ago",
        score: 0,
        user: {
          image: {
            png: data.currentUser.image.png,
          },
          username: data.currentUser.username,
        },
        replies: [],
      });
      sortData(newData);
      setData(newData);
      setNewComFieldValue("");
    }
  };

  return (
    <Container>
      <TextField
        ref={commentFieldRef}
        placeholder="Add a comment"
        value={newComFieldValue}
        onChange={(e) => {
          setNewComFieldValue(e.target.value);
        }}
        onKeyUp={() => {
          if (commentFieldRef.current) {
            commentFieldRef.current.style.height =
              String(commentFieldRef.current?.scrollHeight) + "px";
          }
        }}
      ></TextField>
      <AvatarAndBtnBox>
        <Avatar src={data.currentUser.image.png} />
        <SendBtn onClick={addNewComment}>SEND</SendBtn>
      </AvatarAndBtnBox>
    </Container>
  );
}

export default NewCommentField;
