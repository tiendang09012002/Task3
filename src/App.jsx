import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PostForm from "./Pages/PostForm";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from "./Pages/PostList";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <h1 className="my-4">Quản lý Bài viết</h1>
        <PostForm />
        <PostList/>
      </div>
    </BrowserRouter>
  );
}

export default App;
