export interface dataProps {
  currentUser: {
    image: {
      png: string;
    };
    username: string;
  };
  comments: {
    id: number;
    content: string;
    createTime?: number;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
      };
      username: string;
    };
    replies: {
      id: number;
      content: string;
      createTime?: number;
      createdAt: string;
      score: number;
      replyingTo: string;
      user: {
        image: {
          png: string;
        };
        username: string;
      };
    }[];
  }[];
}
