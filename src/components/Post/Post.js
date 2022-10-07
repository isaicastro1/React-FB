import "./Post.scss";

const Post = () => {
  return (
    <div className="friend-post">
      <div className="top-post">
        <div className="friend-image">
          <img
            className="friend-prof-pic"
            alt="profile-pic"
            src="https://source.unsplash.com/featured/41x40"
          />
        </div>
        <div className="post-title">
          <div className="friend-name">Isai Castro</div>
          <div className="post-time">3h San Diego, CA</div>
        </div>
        <div className="post-settings">
          <button className="post-settings-btn">...</button>
        </div>
      </div>
      <div className="post-text">
        Hello World Hello World Hello World Hello World
      </div>
    </div>
  );
};

export default Post;
