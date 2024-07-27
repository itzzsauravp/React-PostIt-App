import { useContext, useState } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";
import EditPost from "./EditPost";
const Post = ({ post }) => {
  const { deletePost } = useContext(PostList);
  const [canEdit, setCanEdit] = useState(false);

  return (
    <div className="card postCard" style={{ minWidth: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
        <span
          className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
          onClick={() => deletePost(post.id)}
        >
          <h5>
            <MdDelete />
          </h5>
        </span>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge rounded-pill text-bg-primary hastag">
            {tag}
          </span>
        ))}
        <div className="alert alert-success reactions" role="alert">
          {`This post has been viewed by ${post.reaction} people`}
        </div>
        <button
          type="button"
          className="btn btn-warning"
          onClick={() => {
            setCanEdit(true);
          }}
        >
          Edit Post
        </button>
        {canEdit && <EditPost post={post} setCanEdit={setCanEdit} />}
      </div>
    </div>
  );
};

export default Post;
