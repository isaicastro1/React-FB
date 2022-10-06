import "./LeftBarList.scss";

const LeftBarList = () => {
  const routes = [
    {
      id: 1,
      name: "Isai Castro",
      logo: "person",
    },
    {
      id: 2,
      name: "Friends",
      logo: "group",
    },
    {
      id: 3,
      name: "Groups",
      logo: "groups",
    },
    {
      id: 4,
      name: "Marketplace",
      logo: "storefront",
    },
    {
      id: 5,
      name: "Watch",
      logo: "smart_display",
    },
    {
      id: 6,
      name: "Memories",
      logo: "history",
    },
  ];

  return (
    <div className="left-bar">
      <div className="left-bar-top">
        {routes.map((route) => {
          const { id, name, logo } = route;

          return (
            <div key={id} className="left-nav-name">
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
        })}
      </div>
    </div>
  );
};

export default LeftBarList;
