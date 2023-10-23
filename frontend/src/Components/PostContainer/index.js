import "./PostContainer.css"

function PostContainer({ post }) {
  return (
    <div class="post-container">
      <div class="post-header">
        <p>{post.userName}</p>
        <p class="post-title">{post.title}</p>
      </div>
      <p class="post-body">{post.body}</p>
      <div class="post-footer">
        <p>Comments</p>
        <p>Date Added</p>
      </div>
    </div>
  );
}

export default PostContainer