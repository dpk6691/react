import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import CreatePost from "./components/CreatePost";
import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";

function App() {
  return (
    <>
      <div className="appflex">
        <SideBar />
        <div className="appcontent">
          <Header />
          <div className="p-3">
            <CreatePost />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
