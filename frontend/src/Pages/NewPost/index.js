import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../../Components/PostForm";
import { createPost } from "../../Utilities/post-service";
import { useAuth0 } from "@auth0/auth0-react";
import LoginPrompt from "../../Components/Auth/LoginPrompt/LoginPrompt";

function NewPost() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });
  const [uploadsData, setUploadsData]  = useState([])

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
      <PostForm
        submit={handleSubmit}
        formData={{ ...formData }}
        setFormData={setFormData}
        uploadsData={uploadsData} 
        setUploadsData={setUploadsData} 
      />
    );
  }

  return !isLoading && isAuthenticated ? loaded() : <LoginPrompt />;
}

export default NewPost;
