import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getOne } from "../../Utilities/post-service";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

import PostContainer from "../../Components/PostContainer";
import CommentList from "../../Components/CommentsList";
import "./Details.css";
import CommentForm from "./CommentForm";

function Details() {
  const [postDetails, setPostDetails] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();

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
      <div className="details-page">
        <PostContainer post={postDetails} />
        {isAuthenticated && user.sub === postDetails.user.sub ? (
          <div className="details-buttons">
            <Link to="edit">
              <button>Edit</button>
            </Link>
            <Link to='delete'>
              <button>Delete</button>
            </Link>
          </div>
        ) : null}
        {!isLoading && isAuthenticated ? <CommentForm user={user} /> : null}
        {postDetails.comments.length ? (
          <CommentList comments={postDetails.comments} />
        ) : null}
      </div>
    );
  }

  function loading() {
    return <h1>Loading...</h1>;
  }

  return <div>{postDetails ? loaded() : loading()}</div>;
}

export default Details;
