import "./navbar.scss";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <p>Logo</p>
      <input
        type="search"
        className="nav-searchbox"
        placeholder="Search Facebook"
      />

      <div className="nav-routes">
        <div className="nav-home">Home</div>
        <div className="nav-friends">Friends</div>
        <div className="nav-watch">Watch</div>
        <div className="nav-marketplace">Marketplace</div>
        <div className="nav-groups">Groups</div>
      </div>

      <ul className="nav-links">
        <div className="nav-menu">Menu</div>
        <div className="nav-messenger">Messenger</div>
        <div className="nav-notifications">Norifications</div>
        <div className="nav-account">Account</div>
      </ul>
    </div>
  );
};

export default NavBar;
