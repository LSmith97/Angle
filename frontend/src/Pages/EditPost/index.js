import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import PostForm from "../../Components/PostForm";
import { getOne, updatePost } from "../../Utilities/post-service";

function EditPost() {
  const [formData, setFormData] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      await updatePost(id, formData);
      navigate(`/posts/${id}`);
    } catch (error) {
      console.log(error);
      navigate(`/posts/${id}/edit`);
    }
  }

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const postData = await getOne(id);
      setFormData(postData);
    } catch (error) {
      console.log(error);
    }
  }

  function loaded() {
    return (
      <PostForm
        submit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
    );
  }

  function loading() {
    return <h1>Loading...</h1>;
  }

  return formData ? loaded() : loading();
}

export default EditPost;
