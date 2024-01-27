import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
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
    </>
  );
}

export default App;
