import axios from "axios";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const initialComments = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "set": {
      return action.comments;
    }
    case "add": {
      const data = { ...action.comment };
      return axios
        .post("http://localhost:3001/comments", data)
        .then((response) => axios.get("http://localhost:3001/comments"))
        .then((response) => {
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    }
    default:
      return state;
  }
};

const CommentsContext = createContext();

const CommentsContextDispatcher = createContext();

const CommentsProvider = ({ children }) => {
  /** Initial Parameters */
  const [comments, commentsDispatch] = useReducer(reducer, initialComments);

  /** CDM */
  useEffect(() => {
    axios
      .get("http://localhost:3001/comments")
      .then((response) => {
        commentsDispatch({ type: "set", comments: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  /** Returne Component */
  return (
    <CommentsContext.Provider value={comments}>
      <CommentsContextDispatcher.Provider value={commentsDispatch}>
        {children}
      </CommentsContextDispatcher.Provider>
    </CommentsContext.Provider>
  );
};

export const useComments = () => {
  return useContext(CommentsContext);
};

export const useCommentsActions = () => {
  return useContext(CommentsContextDispatcher);
};

export default CommentsProvider;
