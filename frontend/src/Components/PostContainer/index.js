import "./PostContainer.css";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { deletePost } from "../../Utilities/post-service";

function PostContainer({ post }) {
  const date = new Date(post.createdAt);
  const editDate = new Date(post.updatedAt);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate()

  async function handleDelete() {
    try {
      const res = await deletePost(post._id)
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="post-container">
      <div className="post-header">
        {post.user ? (
          <>
            <img
              className="h-10 w-10 rounded-full"
              src={post.user.picture}
              alt={post.user.name}
            />
            <p>{post.user.name}</p>
          </>
        ) : null}
        <p className="post-title">{post.title}</p>
      </div>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
      {isAuthenticated && user.sub === post.user.sub ? (
          <div className="footer-buttons">
            <Link to={`/posts/${post._id}/edit`}>
              <button>Edit</button>
            </Link>
            <button >Delete</button>
          </div>
        ) : null}
        <p>
          {post.comments.length} Comment{post.comments.length > 1 ? "s" : null}
        </p>
        {post.isEdited ? (
          <p> Edited on {editDate.toDateString()}</p>
        ) : (
          <p>Posted on {date.toDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default PostContainer;
