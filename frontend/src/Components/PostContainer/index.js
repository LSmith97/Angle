import "./PostContainer.css"

function PostContainer({ post }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <p>{post.userName}</p>
        <p className="post-title">{post.title}</p>
      </div>
      <p className="post-body">{post.body}</p>
      <div className='post-uploads'>{post.upload.map((uploadFile, index)=> {
        <div key ={index}>
          {uploadFile} 
         </div>
      })}
      </div>
      <div className="post-footer">
        <p>Comments</p>
        <p>Date Added</p>
      </div>
    </div>
  );
}

export default PostContainer