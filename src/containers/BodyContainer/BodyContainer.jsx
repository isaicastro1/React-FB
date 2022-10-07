import LeftBar from "../../components/LeftBar/LeftBar";
import StatusPost from "../../components/StatusPost/StatusPost";
import Post from "../../components/Post/Post";
import "./BodyContainer.scss";

const BodyContainer = () => {
  return (
    <div className="body">
      <LeftBar />
      <div className="middle-body">
        <StatusPost />
        <Post />
      </div>
    </div>
  );
};

export default BodyContainer;
