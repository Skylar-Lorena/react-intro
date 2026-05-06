import "./App.css";
import Profile from "./components/Profile";
import Toggle from "./components/Toggle";



// Root component that combines everything
function App() {
  return (
    <div className="app-container">
      {/* Props example */}
      {/* <Greeting />
      <Counter /> */}
      <Profile />
      <Toggle />
    </div>
  );
}

export default App;