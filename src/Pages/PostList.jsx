import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../reduxSetup/reducer/action";

const PostList = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => {
    console.log(state); // Kiểm tra state
    return state.Post;
  });

  useEffect(() => {
    console.log('Dispatching fetchPosts action...');    
    dispatch(fetchPosts());
  }, [dispatch]);
  
  
  if (loading) {
    return <p>Đang tải dữ liệu...</p>;
  }

  if (error) {
    return <p>Đã có lỗi xảy ra: {error}</p>;
  }

  return (
    <div>
      <h2>Danh sách bài viết</h2>
      <ul className="list-group">
        {posts?.data.map((post) => (
          <li key={post.id} className="list-group-item">
            <h5>{post.title}</h5>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
