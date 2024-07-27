import { useContext } from "react";
import { PostList } from "../store/post-list-store";

const Header = () => {
  const { postList } = useContext(PostList);

  return (
    <header className="header">
      {postList.length !== 0 && `MY POSTS`}
      {postList.length === 0 && (
        <p>
          Hey!! Looks like you dont have any posts
          <br /> Kindly navigate to <span>Create Post</span> to add a new post
        </p>
      )}
    </header>
  );
};

export default Header;
