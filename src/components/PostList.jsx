import Post from "./Post";
import { useContext } from "react";
import { PostList as PostListContext } from "../store/post-list-store";
const PostList = ({toggleSelectedTab}) => {
  const { postList } = useContext(PostListContext);
  return (
    <div className="post-container">
      {postList.map((post) => (
        <Post key={post.id} post={post} toggleSelectedTab={toggleSelectedTab} />
      ))}
    </div>
  );
};

export default PostList;
