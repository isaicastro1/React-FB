import LeftBarUsers from "../LeftBarUsers/LeftBarUsers";
import "./LeftBar.scss";

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="left-bar-top">
        <LeftBarUsers />
      </div>
    </div>
  );
};

export default LeftBar;
