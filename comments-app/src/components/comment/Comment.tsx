import { useRef, useState } from "react";
import PlusIcon from "../../assets/icon-plus.svg";
import MinusIcon from "../../assets/icon-minus.svg";
import ReplyIcon from "../../assets/icon-reply.svg";
import EditIcon from "../../assets/icon-edit.svg";
import DeleteIcon from "../../assets/icon-delete.svg";
import ReplyField from "../replyField/ReplyField";
import { dataProps } from "../../data-types";

import {
  Container,
  PersonalDataBox,
  Anchor,
  Avatar,
  UserName,
  Time,
  ReplyingToName,
  Content,
  ScoreReplyBox,
  ScoreBox,
  ScoreNum,
  PlusImg,
  MinusImg,
  DeleteReplyBox,
  ReplyBox,
  ArrowImg,
  ReplyText,
  DeleteBox,
  DeleteImg,
  DeleteText,
  EditBox,
  EditImg,
  EditText,
  EditFieldBox,
  EditField,
  UpdateBtn,
  YouMark,
} from "./comment-types";

interface Props {
  data: dataProps;
  setData: (props: dataProps) => void;
  id: number;
  content: string;
  createdAt: string;
  score: number;
  username: string;
  png: string;
  replyingTo?: string;
  replies?: object[];
  setIsReplyOn: (props: string | number) => void;
  isActive?: boolean;
  replyFieldValue: string;
  setReplyFieldValue: (props: string) => void;
  updateAfterEdit: (prop1: number, prop2: string) => void;
  isDeleteMsgOn: boolean;
  setIsDeleteMsgOn: (props: boolean) => void;
  setDeleteId: (props: number) => void;
  updateScore: (
    prop: React.MouseEvent<Element, MouseEvent>,
    prop1: number,
    prop2: HTMLImageElement | null,
    prop3: HTMLImageElement | null
  ) => void;
}

function Comment(props: Props) {
  const contentRef = useRef<HTMLTextAreaElement>(null);
  const plusRef = useRef<HTMLImageElement>(null);
  const minusRef = useRef<HTMLImageElement>(null);
  const [isEditOn, setIsEditOn] = useState<boolean>(false);

  const {
    id,
    content,
    createdAt,
    score,
    username,
    png,
    replyingTo,
    replies,
    setIsReplyOn,
    isActive,
    data,
    setData,
    replyFieldValue,
    setReplyFieldValue,
    updateAfterEdit,
    setIsDeleteMsgOn,
    setDeleteId,
    updateScore,
  } = props;

  // Update reply comment or main comment after editing
  const handleEditUpdate = (id: number, value: string | undefined) => {
    if (value !== undefined) {
      updateAfterEdit(id, value);
      setIsEditOn(false);
    } else {
      setIsEditOn(false);
    }
  };

  return (
    <>
      <Container>
        <PersonalDataBox>
          <Anchor href="#">
            <Avatar src={png} />
          </Anchor>
          <Anchor href="#">
            <UserName>{username}</UserName>
          </Anchor>
          {username === "juliusomo" && <YouMark>you</YouMark>}
          <Time>{createdAt}</Time>
        </PersonalDataBox>

        {!isEditOn ? (
          <>
            <Content>
              {replyingTo && (
                <ReplyingToName href="#">
                  {"@" + replyingTo + " "}
                </ReplyingToName>
              )}
              {content}
            </Content>

            <ScoreReplyBox>
              <ScoreBox
                onClick={(e) => {
                  updateScore(e, id, plusRef.current, minusRef.current);
                }}
              >
                <PlusImg src={PlusIcon} ref={plusRef} />
                <ScoreNum>{score}</ScoreNum>
                <MinusImg src={MinusIcon} ref={minusRef} />
              </ScoreBox>
              <DeleteReplyBox>
                {username === "juliusomo" && (
                  <DeleteBox
                    onClick={() => {
                      setDeleteId(id);
                      setIsDeleteMsgOn(true);
                    }}
                  >
                    <DeleteImg src={DeleteIcon} />
                    <DeleteText>Delete</DeleteText>
                  </DeleteBox>
                )}
                {username !== "juliusomo" ? (
                  <ReplyBox onClick={() => setIsReplyOn && setIsReplyOn(id)}>
                    <ArrowImg src={ReplyIcon} />
                    <ReplyText>Reply</ReplyText>
                  </ReplyBox>
                ) : (
                  <EditBox onClick={() => setIsEditOn(true)}>
                    <EditImg src={EditIcon} />
                    <EditText>Edit</EditText>
                  </EditBox>
                )}
              </DeleteReplyBox>
            </ScoreReplyBox>
          </>
        ) : (
          <EditFieldBox>
            <EditField defaultValue={content} ref={contentRef}></EditField>
            <UpdateBtn
              onClick={() => {
                handleEditUpdate(id, contentRef.current?.value);
              }}
            >
              UPDATE
            </UpdateBtn>
          </EditFieldBox>
        )}
      </Container>
      {isActive && (
        <ReplyField
          replyFieldValue={replyFieldValue}
          setReplyFieldValue={setReplyFieldValue}
          setIsReplyOn={setIsReplyOn}
          data={data}
          setData={setData}
          replies={replies}
          username={username}
        />
      )}
    </>
  );
}

export default Comment;
