import { useAuth0 } from "@auth0/auth0-react";
import "./CommentContainer.css";
import { Link } from "react-router-dom";

function CommentContainer({ comment }) {
  const { user, isAuthenticated, isLoading } = useAuth0();

  const date = new Date(comment.createdAt);
  const editDate = new Date(comment.updatedAt);

  return (
    <div className="comment-container">
      <div className="comment-header">
        <img
          className="h-10 w-10 rounded-full"
          src={comment.user.picture}
          alt={comment.user.name}
        />
        <p>{comment.user.name}</p>
      </div>
      <p className="comment-body">{comment.body}</p>
      <div className="comment-footer">
        <div className="footer-buttons">
          {isAuthenticated && user.sub === comment.user.sub ? (
            <>
              <Link to={`/comments/${comment._id}/edit`}>
                <p>Edit</p>
              </Link>
              <button>Delete</button>
            </>
          ) : null}
        </div>
        {comment.isEdited ? (
          <p className="date"> Edited on {editDate.toDateString()}</p>
        ) : (
          <p className="date">Posted on {date.toDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default CommentContainer;
