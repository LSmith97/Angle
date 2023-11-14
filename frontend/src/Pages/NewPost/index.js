import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../../Components/PostForm";
import UploadForm from "../../Components/UploadForm";
import { createPost } from "../../Utilities/post-service";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPrompt from "../../Components/Auth/LoginPrompt/LoginPrompt";

function NewPost() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createPost({ ...formData, user });
      navigate("/");
    } catch (error) {
      console.log(error);
      navigate("/posts/new");
    }
  }

  function loaded() {
    return (
      <>
        <PostForm
          submit={handleSubmit}
          formData={{ ...formData }}
          setFormData={setFormData}
        />
        <UploadForm/>
      </>
    );
  }

  return !isLoading && isAuthenticated ? loaded() : <LoginPrompt />;
}

export default NewPost;
