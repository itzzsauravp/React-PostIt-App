import { useContext, useRef, useState } from "react";
import { PostList } from "../store/post-list-store";
import toast, { Toaster } from "react-hot-toast";
import { BarLoader } from "react-spinners";
const CreatePost = ({ toggleSelectedTab }) => {
  const { addPost } = useContext(PostList);
  const postTitle = useRef("");
  const postBody = useRef("");
  const postTags = useRef("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    const title = postTitle.current.value;
    const body = postBody.current.value;
    const tags = postTags.current.value
      .split("#")
      .filter((tag) => tag !== "")
      .map((tag) => tag.trim());
    addPost(title, body, tags);
    console.log(postTitle);
    setTimeout(() => {
      toast.success("Post Created Successfully");
      postTitle.current.value = "";
      postBody.current.value = "";
      postTags.current.value = "";
    }, 1000);
    setTimeout(() => {
      toggleSelectedTab("Home");
    }, 2000);
  };

  return (
    <form className="createPost create-post-container" onSubmit={handleSubmit}>
      <Toaster position="top-center" reverseOrder={true} />
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="Whats on you mind?"
          ref={postTitle}
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <textarea
          type="text"
          rows={5}
          className="form-control"
          id="body"
          placeholder="Tell us more..."
          ref={postBody}
          autoComplete="off"
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          id="title"
          placeholder="#NoteBook #AddTags #Here"
          ref={postTags}
          autoComplete="off"
        />
      </div>
      <div className="postLoading">
        <button type="submit" className="btn btn-primary">
          Post
        </button>
        <BarLoader loading={loading} size={10} color="#212529" />
      </div>
    </form>
  );
};

export default CreatePost;
