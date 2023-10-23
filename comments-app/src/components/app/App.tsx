import { useState, useEffect } from "react";
import Comment from "../comment/Comment";
import { commentData } from "../../data";
import { ThemeProvider } from "styled-components";
import NewCommentField from "../newCommentField/NewCommentField";
import { dataProps } from "../../data-types";
import { timeDifference } from "../../timeDifference";
import PageMask from "../pageMask/PageMask";
import DeleteQuestion from "../deleteQuestion/DeleteQuestion";
import { Container, RepliesBox } from "./app-styles";

interface Props {
  ModerateBlue: string;
  SoftRed: string;
  LightGrayishBlue: string;
  PaleRed: string;
  DarkBlue: string;
  GrayishBlue: string;
  LightGray: string;
  VeryLightGray: string;
  White: string;
}
const defaultTheme: Props = {
  ModerateBlue: "rgb(84, 87, 182)",
  SoftRed: "rgb(237, 100, 104)",
  LightGrayishBlue: "rgb(195, 196, 239)",
  PaleRed: "rgb(255, 184, 187)",

  DarkBlue: "rgb(50, 65, 82)",
  GrayishBlue: "rgb(103, 114, 126)",
  LightGray: "rgb(234, 236, 241)",
  VeryLightGray: "rgb(245, 246, 250)",
  White: "rgb(255, 255, 255)",
};

// Get comments list from localStorage
const setLocalStorage = () => {
  let localList = localStorage.getItem("dataList");
  if (localList) {
    let newLocalList: dataProps = JSON.parse(localList);
    newLocalList.comments
      .sort((a, b) => (a.score < b.score ? 1 : a.score > b.score ? -1 : 0))
      .forEach((com) =>
        com.replies.sort((a, b) =>
          a.score < b.score ? 1 : a.score > b.score ? -1 : 0
        )
      );
    return newLocalList;
  } else {
    return commentData;
  }
};

function App() {
  const [data, setData] = useState<dataProps>(setLocalStorage());
  const [isReplyOn, setIsReplyOn] = useState<string | number>("");
  const [replyFieldValue, setReplyFieldValue] = useState<string>("");
  const [newComFieldValue, setNewComFieldValue] = useState<string>("");
  const [isDeleteMsgOn, setIsDeleteMsgOn] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(0);

  // Set comments list on localStorage
  useEffect(() => {
    localStorage.setItem("dataList", JSON.stringify(data));
  }, [data]);

  // Set time passed after reply or comment was added to data,  and rerender every minute to see result
  useEffect(() => {
    const interval = setInterval(() => {
      data.comments.forEach((com) => {
        if (com.createTime) {
          com.createdAt = timeDifference(Date.now(), com.createTime);
        }
        com.replies.forEach((rep) => {
          if (rep.createTime)
            rep.createdAt = timeDifference(Date.now(), rep.createTime);
        });
      });
      setData({ ...data });
    }, 1000 * 60);
    return () => clearInterval(interval);
  }, []);

  // Increas/reduce score and set to data when plus/minus is clicked
  const updateScore = (
    e: React.MouseEvent<Element, MouseEvent>,
    id: number,
    plusElem: HTMLImageElement | null,
    minusElem: HTMLImageElement | null
  ) => {
    e.preventDefault();
    let newData;
    newData = { ...data };
    newData.comments.forEach((com) => {
      if (com.id === id) {
        if (plusElem && e.target === plusElem) {
          com.score = com.score + 1;
        }
        if (minusElem && e.target === minusElem && com.score !== 0) {
          com.score = com.score - 1;
        }
      }
      com.replies.forEach((rep) => {
        if (rep.id === id) {
          if (plusElem && e.target === plusElem) {
            rep.score = rep.score + 1;
          }
          if (minusElem && e.target === minusElem && rep.score !== 0) {
            rep.score = rep.score - 1;
          }
        }
      });
    });
    setData(newData);
  };

  // Update and set content to data after editting reply comment or main comment
  const updateAfterEdit = (id: number, newContent: string) => {
    let newData;

    newData = { ...data }; // creates new value

    newData.comments.forEach((com) => {
      if (com.id === id) {
        if (/([^\s])/.test(newContent)) {
          com.content = newContent;
        }
      }
      com.replies.forEach((rep) => {
        if (rep.id === id) {
          if (/([^\s])/.test(newContent)) {
            rep.content = newContent;
          }
        }
      });
    });
    setData(newData);
  };

  // Delete reply comment or main comment
  const handleReplyDelete = (id: number) => {
    let newData;
    newData = { ...data };
    newData?.comments.forEach((com, ind, arr) => {
      if (com.id === id) {
        arr.splice(ind, ind + 1);
      }
      com.replies.forEach((rep, ind, arr) => {
        if (rep.id === id) {
          arr.splice(ind, ind + 1);
        }
      });
    });
    setData(newData);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container>
        {isDeleteMsgOn && (
          <DeleteQuestion
            setIsDeleteMsgOn={setIsDeleteMsgOn}
            handleReplyDelete={handleReplyDelete}
            deleteId={deleteId}
          />
        )}
        {isDeleteMsgOn && <PageMask />}
        {data.comments.map((comment) => {
          const {
            id,
            content,
            createdAt,
            score,
            replies,
            user: {
              image: { png },
              username,
            },
          } = comment;

          return (
            <div key={id} style={{ width: "100%" }}>
              <Comment
                data={data}
                setData={setData}
                id={id}
                replies={replies}
                content={content}
                createdAt={createdAt}
                score={score}
                username={username}
                png={png}
                setIsReplyOn={setIsReplyOn}
                isActive={isReplyOn === id}
                replyFieldValue={replyFieldValue}
                setReplyFieldValue={setReplyFieldValue}
                updateAfterEdit={updateAfterEdit}
                isDeleteMsgOn={isDeleteMsgOn}
                setIsDeleteMsgOn={setIsDeleteMsgOn}
                setDeleteId={setDeleteId}
                updateScore={updateScore}
              />
              <RepliesBox>
                {replies.length > 0 &&
                  replies.map((repComment) => {
                    const {
                      id,
                      content,
                      createdAt,
                      score,
                      replyingTo,
                      user: {
                        image: { png },
                        username,
                      },
                    } = repComment;
                    return (
                      <Comment
                        key={id}
                        replies={replies}
                        data={data}
                        setData={setData}
                        id={id}
                        content={content}
                        createdAt={createdAt}
                        score={score}
                        username={username}
                        png={png}
                        replyingTo={replyingTo}
                        setIsReplyOn={setIsReplyOn}
                        isActive={isReplyOn === id}
                        replyFieldValue={replyFieldValue}
                        setReplyFieldValue={setReplyFieldValue}
                        updateAfterEdit={updateAfterEdit}
                        isDeleteMsgOn={isDeleteMsgOn}
                        setIsDeleteMsgOn={setIsDeleteMsgOn}
                        setDeleteId={setDeleteId}
                        updateScore={updateScore}
                      />
                    );
                  })}
              </RepliesBox>
            </div>
          );
        })}
        <NewCommentField
          data={data}
          setData={setData}
          newComFieldValue={newComFieldValue}
          setNewComFieldValue={setNewComFieldValue}
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;
