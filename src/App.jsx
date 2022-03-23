import "./App.scss";
import Nav from "./Components/Nav/Nav";
import SideNav from "./Components/SideNav/SideNav";
import Body from "./pages/Body/Body";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="app__main">
        <SideNav />
        <Body />
      </div>
    </div>
  );
}

export default App;
