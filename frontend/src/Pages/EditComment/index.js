import { useParams, useNavigate } from "react-router";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./EditComment.css";
import { updateComment } from "../../Utilities/comment-service";

function EditComment() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, isLoading } = useAuth0();

  const [formData, setFormData] = useState(null);

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updateComment(id, formData);
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate(`/posts/${id}`);
    }
  }
  async function handleRequest() {
    
  }

  function loaded() {
    return (
      <form className="edit-comment-form" onSubmit={handleSubmit}>
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

  function loading() {
    return <h2>Loading...</h2>;
  }

  return formData && isAuthenticated ? loaded() : loading();
}

export default EditComment;
