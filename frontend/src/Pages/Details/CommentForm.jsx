import { useState } from "react";
import { useNavigate } from "react-router";
import { useParams } from "react-router-dom";
import { createComment } from "../../Utilities/comment-service";

function CommentForm({ user }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    parentId: id,
    body: "",
    user,
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createComment({ ...formData });
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate(`/posts/{id}`);
    }
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <textarea
        id="body-input"
        rows="4"
        cols="25"
        maxLength="500"
        name="body"
        value={formData.body}
        placeholder="Leave a comment"
        onChange={handleChange}
        required
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;
