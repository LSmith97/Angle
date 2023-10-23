import "./CommentContainer.css"

function CommentContainer({ comment }) {
    return (
      <div class="comment-container">
        <div class="comment-header">
          <p>{comment.userName}</p>
        </div>
        <p class="comment-body">{comment.body}</p>
        <div class="comment-footer">
            {comment.isEdited ? <p> Edited on {comment.timestamps}</p> :
            <p>Posted on {comment.timestamps}</p>} 
        </div>
      </div>
    );
  }

  export default CommentContainer