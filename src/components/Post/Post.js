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

      <div className="post-image">
        <img alt="" src="https://source.unsplash.com/featured/500x625" />
      </div>

      <div className="post-reactions">
        <div className="post-likes">
          <div className="icon-like">
            <span className="material-symbols-outlined post-icon-like">
              thumb_up
            </span>
          </div>
          <div className="icon-heart">
            <span className="material-symbols-outlined post-icon-heart">
              favorite
            </span>
          </div>
          <p className="friend-likes">Alessandra Ramos and 10 others</p>
        </div>
        <div className="post-like-comment">
          <div className="post-like">
            <span className="material-symbols-outlined post-icon">
              thumb_up
            </span>
            <p className="post-like-text">Like</p>
          </div>
          <div className="post-comment">
            <span className="material-symbols-outlined post-icon">
              chat_bubble
            </span>
            <p className="post-comment-text">Comment</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
