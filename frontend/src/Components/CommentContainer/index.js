import "./CommentContainer.css";

function CommentContainer({ comment }) {

  const date = new Date(comment.createdAt)
  const editDate = new Date(comment.editedAt)

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
        {comment.isEdited ? (
          <p> Edited on {editDate.toDateString}</p>
        ) : (
          <p>Posted on {date.toDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default CommentContainer;
