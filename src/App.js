import Comments from "./components/Comments/Comments";
import CommentsProvider from "./components/CommentsProvider/CommentsProvider";

const App = () => {
  return (
    <CommentsProvider>
      <Comments />
    </CommentsProvider>
  );
};

export default App;
