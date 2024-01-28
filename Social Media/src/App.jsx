import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import PostListProviders from "./store/PostListProviders";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <PostListProviders>
      <div className="appflex">
        <SideBar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="appcontent">
          <Header />
          <div className="p-3 appcontentmain">
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}
          </div>
          <Footer />
        </div>
      </div>
    </PostListProviders>
  );
}

export default App;
