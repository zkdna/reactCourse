import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        img={faker.image.avatar()}
        commentText="abcdefgojklmn"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        img={faker.image.avatar()}
        commentText="abcdefgojklmn"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        img={faker.image.avatar()}
        commentText="abcdefgojklmn"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
