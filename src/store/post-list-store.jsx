import { createContext, useReducer } from "react";
import { v4 } from "uuid";

// Context Obj
export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  editPost: () => {},
});

// Reducer function
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_NEW_POST") {
    newPostList = [action.payload, ...currPostList];
  } else if (action.type == "UPDATE_POST") {
    newPostList = currPostList.map((post) =>
      post.id === action.payload.postId
        ? {
            ...post,
            title: action.payload.title,
            body: action.payload.body,
            tags: action.payload.tags,
          }
        : post
    );
  }
  return newPostList;
};

// Context Provider component
const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  const addPost = (title, body, tags) => {
    dispatchPostList({
      type: "ADD_NEW_POST",
      payload: {
        id: Math.random() * Date.now(),
        reaction: Math.floor(Math.random() * 50),
        userId: v4(),
        title,
        body,
        tags,
      },
    });
  };
  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const editPost = (postId, title, body, tags) => {
    dispatchPostList({
      type: "UPDATE_POST",
      payload: {
        postId,
        title,
        body,
        tags: tags
          .split("#")
          .filter((tag) => tag !== "")
          .map((tag) => tag.trim()),
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList,
        addPost,
        deletePost,
        editPost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
