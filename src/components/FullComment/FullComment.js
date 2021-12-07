import axios from "axios";
import _ from "lodash";
import { useEffect, useState } from "react";
import styles from "./FullComment.module.css";

const FullComment = ({ commentId }) => {
  /** Initial Paramenter */
  const [comment, setComment] = useState({});

  /** Initial Metiods */
  const renderComment = () => {
    if (!commentId) {
      return <div>please select a comment !</div>;
    }
    if (commentId && _.isEmpty(comment)) {
      return <div>loding ...</div>;
    }
    if (comment) {
      return (
        <div className={`${styles.border_box} mr-3 p-3`}>
          <div className={`my-1`}>
            <span>Message: {comment.body}</span>
            <span className={`d-block`}></span>
          </div>
          <div className={`my-1`} style={{ fontSize: "13px" }}>
            <span>Name: {comment.name}</span>
            <span></span>
          </div>
          <div className={``} style={{ fontSize: "13px" }}>
            <span>Email: {comment.email}</span>
            <span></span>
          </div>
        </div>
      );
    }
  };

  /** CDM */
  useEffect(() => {
    if (commentId) {
      axios
        .get(`http://localhost:3001/comments/${commentId}`)
        .then((response) => {
          setComment(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [commentId]);

  /** Return Component */
  return <section className={`col-md-6 p-0`}>{renderComment()}</section>;
};

export default FullComment;
