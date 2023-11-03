import "./CommentsList.css";
import CommentContainer from "../CommentContainer";

function CommentsList({ comments }) {
  return (
    <div className="comment-list">
      {comments.map((comment) => (
        <CommentContainer key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default CommentContainer;
