import styles from "./Comments.module.css";

const Comments = () => {
  return (
    <main className={styles.comments + " container-fluid"}>
      <section className={"row d-flex flex-wrap justify-content-lg-around align-items-start " + styles.comment_list}>
        <div className={styles.comment}>
          <h4 className="text-black my-1">title: hello world</h4>
          <div className={styles.comment_text + " text-secondary"}>username: Mehrdad</div>
          <div className={styles.comment_text + " text-secondary"}>email: Mehrdadmd27@gmail.com</div>
          <button className={styles.comment_btn + " btn btn-secondary"}>show more</button>
        </div>
        <div className={styles.comment}>
          <h4 className="text-black my-1">title: I am mehrdad</h4>
          <div className={styles.comment_text + " text-secondary"}>username: Mehrdad</div>
          <div className={styles.comment_text + " text-secondary"}>email: Mehrdadmd27@gmail.com</div>
          <button className={styles.comment_btn + " btn btn-secondary"}>show more</button>
        </div>
        <div className={styles.comment}>
          <h4 className="text-black my-1">title: comment list</h4>
          <div className={styles.comment_text + " text-secondary"}>username: Mehrdad</div>
          <div className={styles.comment_text + " text-secondary"}>email: Mehrdadmd27@gmail.com</div>
          <button className={styles.comment_btn + " btn btn-secondary"}>show more</button>
        </div>
        <div className={styles.comment}>
          <h4 className="text-black my-1">title: comment list</h4>
          <div className={styles.comment_text + " text-secondary"}>username: Mehrdad</div>
          <div className={styles.comment_text + " text-secondary"}>email: Mehrdadmd27@gmail.com</div>
          <button className={styles.comment_btn + " btn btn-secondary"}>show more</button>
        </div>
        <div className={styles.comment}>
          <h4 className="text-black my-1">title: comment list</h4>
          <div className={styles.comment_text + " text-secondary"}>username: Mehrdad</div>
          <div className={styles.comment_text + " text-secondary"}>email: Mehrdadmd27@gmail.com</div>
          <button className={styles.comment_btn + " btn btn-secondary"}>show more</button>
        </div>
      </section>
      <section></section>
      <section></section>
    </main>
  );
};

export default Comments;
