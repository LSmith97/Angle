import "./PostContainer.css";

function PostContainer({ post }) {
  return (
    <div className="post-container">
      <div className="post-header">
        {post.user ? (
          <>
            <img
              className="h-10 w-10 rounded-full"
              src={post.user.picture}
              alt={post.user.name}
            />
            <p>{post.user.name}</p>
          </>
        ) : null}
        <p className="post-title">{post.title}</p>
      </div>
      <p className="post-body">{post.body}</p>
      <div className="post-footer">
        <p>Comments</p>
        <p>Date Added</p>
      </div>
    </div>
  );
}

export default PostContainer;
