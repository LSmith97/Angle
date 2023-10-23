import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <a href="/posts/new">
        <p>Make a Post</p>
      </a>
      <hr />
      <p>All Posts</p>
      <p>Recent Posts</p>
      <p>My Posts</p>
      <hr />
      <p>About ANGLE</p>
    </div>
  );
}

export default Sidebar;
