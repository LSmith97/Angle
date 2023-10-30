import { Link } from "react-router-dom";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/posts/new">
        <p>Make a Post</p>
      </Link>
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
