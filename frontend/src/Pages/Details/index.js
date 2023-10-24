import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../Utilities/post-service";
import PostContainer from "../../Components/PostContainer";
import CommentList from "../../Components/CommentsList";
import "./Details.css";

function Details({ post, comment }) {
  const [postDetails, setPostDetails] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    handleRequest();
  }, []);

  async function handleRequest() {
    try {
      const postData = await getOne(id);
      setPostDetails(postData);
    } catch (err) {
      console.log(err);
    }
  }

  function loaded() {
    return (
      <div>
        <PostContainer post={postDetails} />
        <CommentList comment={postDetails.comments}/>
      </div>
    );
  }

  function loading() {
    return <h1>Loading...</h1>;
  }

  return <div>
    {postDetails ? loaded() : loading()}
        </div>;
}

export default Details;
