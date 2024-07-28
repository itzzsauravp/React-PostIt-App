import { PostList as PostListContext } from "../store/post-list-store";
import { useContext } from "react";
import Post from "./Post";
import Header from "./Header";

const PostList = () => {
  const { postList } = useContext(PostListContext);
  return (
    <div className="post-container">
      <Header />
      <div>
        {postList.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
