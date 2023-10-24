import { Routes, Route } from "react-router-dom";
import Posts from "../../Pages/Posts";
import Details from "../../Pages/Details";
import NewPost from "../../Pages/NewPost";
import EditPost from "../../Pages/EditPost";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Details />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
      </Routes>
    </main>
  );
}

export default Main;