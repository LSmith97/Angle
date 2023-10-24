import "./CommentContainer.css"

function CommentContainer({ comment }) {
    return (
      <div className="comment-container">
        <div className="comment-header">
          <p>{comment.userName}</p>
        </div>
        <p className="comment-body">{comment.body}</p>
        <div className="comment-footer">
            {comment.isEdited ? <p> Edited on {comment.timestamps}</p> :
            <p>Posted on {comment.timestamps}</p>} 
        </div>
      </div>
    );
  }

  export default CommentContainer