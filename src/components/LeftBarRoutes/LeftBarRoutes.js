import "./LeftBarRoutes.scss";

const LeftBarRoutes = (props) => {
  const { name, logo } = props;

  return (
    <div className="left-nav-name">
      <div className="name-container">
        <div className="logo-container">
          <span className="material-symbols-outlined left-bar-routes">
            {logo}
          </span>
        </div>
        <div className="nav-name">
          <p>{name}</p>
        </div>
      </div>
    </div>
  );
};

export default LeftBarRoutes;
