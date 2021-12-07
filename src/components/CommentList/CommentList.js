import styles from "./CommnetList.module.css";
import Comment from "../Comment/Comment";

const CommentList = ({ comments, onSelectComment }) => {
  /** Initial Methods */
  const renderComments = () => {
    if (comments.length > 0) {
      return comments.map((comment) => {
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            email={comment.email}
            onSelectComment={() => onSelectComment(comment.id)}
          />
        );
      });
    } else {
      return <h4 className="mx-auto">Loading ...</h4>;
    }
  };

  /** Return Component */
  return (
    <section
      className={`row d-flex flex-wrap justify-content-start align-items-start ${styles.comment_list} ${styles.border_box}`}
    >
      {renderComments()}
    </section>
  );
};

export default CommentList;
