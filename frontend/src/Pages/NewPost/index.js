import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../../Components/PostForm";
import { createPost } from "../../Utilities/post-service";
import UploadForm from "../../Components/UploadForm"

function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  }); 

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await createPost(formData);
      navigate(`/`);
    } catch (error) {
      console.log(error);
      navigate("/posts/new");
    }
  }

  return (
      <PostForm submit={handleSubmit} formData={formData} setFormData={setFormData} />

  );
}

export default NewPost;
