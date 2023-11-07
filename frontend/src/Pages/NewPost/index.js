import { useState } from "react";
import { useNavigate } from "react-router";
import PostForm from "../../Components/PostForm";
import { createPost } from "../../Utilities/post-service";
import { insertUploads } from "../../Utilities/uploads-service";
function NewPost() {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  }); 
  const [uploadsData, setUploadsData]  = useState([])

  const navigate = useNavigate();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const res = await createPost(formData); 
      console.log(res)
      if (uploadsData.length > 0) await insertUploads(res._id, uploadsData)
      navigate(`/`);
    } catch (error) {
      console.log(error);
      navigate("/posts/new");
    }
  }

  return (
      <PostForm submit={handleSubmit} formData={formData} setFormData={setFormData} uploadsData={uploadsData} setUploadsData={setUploadsData} />

  );
}

export default NewPost;
