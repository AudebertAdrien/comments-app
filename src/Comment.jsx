import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function Comment() {

  const [newComment, setnewComment] = useState("");
  const [comments, setComments] = useState([
    { id: 1, message: "First comment" },
    { id: 2, message: "Second comment" },
    { id: 3, message: "Third comment" },
  ]);

  const [warning, setWarning] = useState(false);


  function handleSubmit(e) {
    e.preventDefault();
    if (newComment !== "") {
      warning && setWarning(false);
      setComments([
        ...comments,
        {
          id: uuidv4(),
          message: newComment,
        },
      ]);
    } else {
      setWarning(true);
    }
    setnewComment("")
  }

  const warningMsg = warning && (
    <div className="alert alert-danger" role="alert">
      This is a danger alert—check it out!
    </div>
  );

  const myComments = comments.map((comment) => {
    return (
      <li className="list-group-item" key={comment.id}>
        {comment.message}
      </li>
    );
  });

  return (
    <div>
      {warningMsg}
      <div className="container p-5">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Write a Comment</label>
            <input
              className="form-control"
              type="text"
              value={newComment}
              onChange={(e) => setnewComment(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit" value="Submit">
            Submit
          </button>
        </form>
        <ul className="list-group mt-3">{myComments}</ul>
      </div>
    </div>
  );
}
