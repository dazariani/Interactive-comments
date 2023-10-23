import { dataProps } from "./data-types";

export const sortData = (data: dataProps) => {
  data.comments
    .sort((a, b) => (a.score < b.score ? 1 : a.score > b.score ? -1 : 0))
    .forEach((com) =>
      com.replies.sort((a, b) =>
        a.score < b.score ? 1 : a.score > b.score ? -1 : 0
      )
    );
};
