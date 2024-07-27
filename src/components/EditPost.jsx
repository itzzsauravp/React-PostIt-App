import { useContext, useState } from "react";
import { PostList } from "../store/post-list-store";

const EditPost = ({ post, setCanEdit }) => {
  const { editPost } = useContext(PostList);
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);
  const [tags, setTags] = useState(post.tags.map((tag) => `#${tag}`).join(" "));

  return (
    <div className="postEditPopUp">
      <p>Edit Post</p>
      <form
        action=""
        className="editForm"
        onSubmit={(e) => {
          e.preventDefault;
          editPost(post.id, title, body, tags);
          setCanEdit(false);
        }}
      >
        <div className="fields">
            <input
              type="text"
              className="form-control"
              placeholder="Whats on you mind?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              type="text"
              rows={5}
              className="form-control"
              placeholder="Tell us more..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <input
              type="text"
              className="form-control"
              placeholder="#NoteBook #AddTags #Here"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
        </div>
        <div className="buttons">
          <button type="submit" className="btn btn-success">
            Confirm
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setCanEdit(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditPost;
