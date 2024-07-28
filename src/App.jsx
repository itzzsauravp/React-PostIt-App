import { Routes, Route } from "react-router-dom";
import Layouts from "./layouts/Layouts";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import Error404 from "./components/Error404";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route path="/" element={<PostList />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
      </Route>
      <Route path="*" element={<Error404 />}></Route>
    </Routes>
  );
};

export default App;
