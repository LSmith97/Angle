import { Routes, Route } from "react-router-dom";
import Posts from "../../Pages/Posts";
import Details from "../../Pages/Details";
import NewPost from "../../Pages/NewPost";

function Main() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Details />} />
        <Route path="/posts/new" element={<NewPost />} />
      </Routes>
    </main>
  );
}

export default Main;