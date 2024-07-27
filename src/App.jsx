import Header from "./components/Header";
import Sidebar from "./components/SIdebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  const toggleSelectedTab = (currTab) => {
    setSelectedTab(currTab);
  };
  return (
    <PostListProvider>
      <div className="appContainer">
        <Sidebar
          toggleSelectedTab={toggleSelectedTab}
          selectedTab={selectedTab}
        />
        <div className="content">
          {selectedTab === "Home" ? (
            <>
              <Header />
              <PostList toggleSelectedTab={toggleSelectedTab} />
            </>
          ) : (
            <CreatePost toggleSelectedTab={toggleSelectedTab} />
          )}
        </div>
      </div>
    </PostListProvider>
  );
};

export default App;
