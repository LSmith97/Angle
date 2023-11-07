import "./CommentsList.css";
import CommentContainer from "../CommentContainer";

function CommentsList({ comments }) {
  return (
    <>
      {comments.map((comment) => (
        <CommentContainer key={comment._id} comment={comment} />
      ))}
    </>
  );
}

export default CommentsList;
