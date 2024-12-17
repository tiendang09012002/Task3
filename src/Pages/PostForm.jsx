const PostForm = () => {
  return (
    <>
      <div class="container">
        <form  className="post-form">
          <div className="form-group">
            <label htmlFor="title">Tiêu đề bài viết:</label>
            <input
              type="text"
              id="title"
              value=""
              className="form-control"
              placeholder="Nhập tiêu đề..."
            />
          </div>

          <div className="form-group">
            <label htmlFor="body">Nội dung bài viết:</label>
            <textarea
              id="body"
              value=""
              className="form-control"
              placeholder="Nhập nội dung..."
              rows="5"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary">
            Thêm bài viết
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
