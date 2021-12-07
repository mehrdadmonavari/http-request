import styles from "./Comment.module.css";

const Comment = ({name, email, onSelectComment}) => {
  return (
    <div className={styles.comment}>
      <h4 className="text-black my-1 ">title: hello world</h4>
      <div className={`${styles.comment_text} text-secondary`}>
        username: {name}
      </div>
      <div className={`${styles.comment_text} text-secondary`}>
        email: {email}
      </div>
      <button className={`${styles.comment_btn} btn btn-secondary`} onClick={onSelectComment}>
        show more
      </button>
    </div>
  );
};

export default Comment;
