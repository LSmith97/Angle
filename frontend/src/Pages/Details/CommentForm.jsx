import { useState } from "react";
import { useParams } from "react-router-dom";

function CommentForm({ user }) {
  const { id } = useParams();

  const [formData, setFormData] = useState({
    parentId: id,
    body: "",
    user,
  });

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  return (
    <form className="comment-form">
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
