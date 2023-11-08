import "./PostContainer.css";

function PostContainer({ post }) {
  const date = new Date(post.createdAt);
  const editDate = new Date(post.updatedAt);

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
        <p>
          {post.comments.length} Comment{post.comments.length > 1 ? "s" : null}
        </p>
        {post.isEdited ? (
          <p> Edited on {editDate.toDateString()}</p>
        ) : (
          <p>Posted on {date.toDateString()}</p>
        )}
      </div>
    </div>
  );
}

export default PostContainer;
