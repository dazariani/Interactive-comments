import { dataProps } from "../../data-types";
import { useRef } from "react";
import { sortData } from "../../sortData";
import {
  Container,
  Field,
  CloseText,
  AvatarBtnBox,
  Avatar,
  Button,
} from "./replyField-types";

interface Props {
  data: dataProps;
  setData: (props: dataProps) => void;
  setIsReplyOn: (props: string | number) => void;
  replyFieldValue: string;
  setReplyFieldValue: (props: string) => void;
  replies: object[] | undefined;
  username: string;
}

function ReplyField(props: Props) {
  const fieldRef = useRef<HTMLTextAreaElement>(null);

  const {
    data,
    setData,
    setIsReplyOn,
    replyFieldValue,
    setReplyFieldValue,
    replies,
    username,
  } = props;

  // Add reply function
  const addReply = () => {
    if (fieldRef.current && /([^\s])/.test(fieldRef?.current.value)) {
      replies?.push({
        id: Date.now(),
        content: replyFieldValue,
        createTime: Date.now(),
        createdAt: "0 seconds ago",
        score: 0,
        replyingTo: username,
        user: {
          image: {
            png: data.currentUser.image.png,
          },
          username: data.currentUser.username,
        },
      });
      let newData = { ...data };
      sortData(newData);
      setData(newData);
      setIsReplyOn("");
      setReplyFieldValue("");
    } else {
      setIsReplyOn("");
      setReplyFieldValue("");
    }
  };

  return (
    <Container>
      <CloseText
        onClick={() => {
          setIsReplyOn("");
          setReplyFieldValue("");
        }}
      >
        Close
      </CloseText>
      <Field
        ref={fieldRef}
        name="reply"
        value={replyFieldValue}
        onChange={(e) => setReplyFieldValue(e.target.value)}
        onKeyUp={() => {
          if (fieldRef.current) {
            fieldRef.current.style.height =
              String(fieldRef.current?.scrollHeight) + "px";
          }
        }}
      />
      <AvatarBtnBox>
        <Avatar src={data.currentUser.image.png} />
        <Button onClick={addReply}>REPLY</Button>
      </AvatarBtnBox>
    </Container>
  );
}

export default ReplyField;
