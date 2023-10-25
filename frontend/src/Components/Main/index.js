import { Routes, Route } from "react-router-dom";
import Posts from "../../Pages/Posts";
import Details from "../../Pages/Details";
import NewPost from "../../Pages/NewPost";
import EditPost from "../../Pages/EditPost";
import Login from "../../Pages/Login";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Details />} />
        <Route path="/posts/new" element={<NewPost />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default Main;