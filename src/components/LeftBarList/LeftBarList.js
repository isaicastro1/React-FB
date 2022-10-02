import LeftBarRoutes from "../LeftBarRoutes/LeftBarRoutes";

const LeftBarList = () => {
  return (
    <div className="left-bar">
      <div className="left-bar-top">
        <LeftBarRoutes name={"Isai Castro"} logo={"person"} />
        <LeftBarRoutes name={"Friends"} logo={"Group"} />
        <LeftBarRoutes name={"Groups"} logo={"Groups"} />
        <LeftBarRoutes name={"Marketplace"} logo={"storefront"} />
        <LeftBarRoutes name={"Watch"} logo={"smart_display"} />
        <LeftBarRoutes name={"Memories"} logo={"history"} />
      </div>
    </div>
  );
};

export default LeftBarList;
