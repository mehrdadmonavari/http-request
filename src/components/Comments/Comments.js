import { useState } from "react";
import CommentList from "../CommentList/CommentList";
import {
  useComments,
  useCommentsActions,
} from "../CommentsProvider/CommentsProvider";
import FullComment from "../FullComment/FullComment";
import NewComment from "../NewComment/NewComment";
import styles from "./Comments.module.css";

const Comments = () => {
  /** Inital Parameters */
  const comments = useComments();

  const [commentId, setCommentId] = useState(null);

  /** Initial Methods */
  const commentsDispatch = useCommentsActions();

  const selectCommentHndler = (id) => {
    setCommentId(id);
  }

  const addNewCommentHandler = (comment) => {
    commentsDispatch({type: "add", comment: comment});
  }

  return (
    <main className={`${styles.comments} container-fluid`}>
      <CommentList comments={comments} onSelectComment={selectCommentHndler} />
      <section className={`row ${styles.comment_full_new}`}>
        <FullComment commentId={commentId}/>
        <NewComment onAddComment={addNewCommentHandler} />
      </section>
    </main>
  );
};

export default Comments;
