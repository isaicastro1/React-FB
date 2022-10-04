import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import BodyContainer from "./containers/BodyContainer/BodyContainer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <BodyContainer />
    </div>
  );
};

export default App;
