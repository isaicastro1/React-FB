import "./StatusPost.scss";

const StatusPost = () => {
  return (
    <div className="status">
      <div className="status-top">
        <img alt="" src="https://source.unsplash.com/featured/40x40" />
        <input
          className="status-searchbox"
          placeholder="What's on your mind, Isai?"
        />
      </div>
      <div className="status-buttons">
        <div className="status-live-video">
          <div className="live-video-icon">
            <span className="material-symbols-outlined">videocam</span>
          </div>
          <div className="live-video-title">Live Video</div>
        </div>
        <div className="status-photo">
          <div className="status-photo-icon">
            <span className="material-symbols-outlined">photo_library</span>
          </div>
          <div className="status-photo-title">Photo/video</div>
        </div>
        <div className="status-feeling">
          <div className="status-feeling-icon">
            <span className="material-symbols-outlined">mood</span>
          </div>
          <div className="status-feeling-icon">Feeling/activity</div>
        </div>
      </div>
    </div>
  );
};

export default StatusPost;
