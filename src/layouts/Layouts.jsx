import PostListProvider from "../store/post-list-store";
import Sidebar from "../components/SIdebar";
import { Outlet } from "react-router-dom";
const Layouts = () => {
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar />
        <div className="content">
          <Outlet />
        </div>
      </div>
    </PostListProvider>
  );
};

export default Layouts;
