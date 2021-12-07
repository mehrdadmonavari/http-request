import { useState } from "react";
import styles from "./NewComment.module.css";

const NewComment = ({ onAddComment }) => {
  /** Initial Parameters */
  const [comment, setComment] = useState({ name: "", email: "", body: "" });

  const setCurrentCommentHandler = (e) => {
    const currentComment = {...comment};
    currentComment[e.target.name] = e.target.value;
    setComment(currentComment);
  };

  return (
    <section className={`col-md-6 p-0`}>
      <div className={`${styles.border_box} ml-3 p-3`}>
        <h3 className="">leave a comment</h3>
        <div className={`row`}>
          <div className="col-md-6 form-group">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              onChange={(e) => setCurrentCommentHandler(e)}
              value={comment.name}
            />
          </div>
          <div className="col-md-6 form-group">
            <label>Email</label>
            <input
              type="text"
              className="form-control"
              name="email"
              onChange={(e) => setCurrentCommentHandler(e)}
              value={comment.email}
            />
          </div>
        </div>
        <div className={`form-group`}>
          <label>Message</label>
          <textarea
            type="textarea"
            className={`form-control`}
            name="body"
            rows="3"
            onChange={(e) => setCurrentCommentHandler(e)}
          >
            {comment.body}
          </textarea>
        </div>
        <button
          className={`btn btn-info text-center`}
          onClick={() => onAddComment(comment)}
        >
          add
        </button>
      </div>
    </section>
  );
};

export default NewComment;
