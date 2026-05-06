// App.jsx

import "./App.css";
import Profile from "./components/Profile";
import Toggle from "./components/Toggle";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";


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