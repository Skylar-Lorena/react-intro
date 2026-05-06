import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
import "./App.css";
import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import Profile from "./components/Profile";
import Toggle from "./components/Toggle";


function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>Sign in</h1>
       {/* Toggle Button */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Go to Signup" : "Go to Login"}
      </button>

      {/* Conditional Rendering */}
      {isLogin ? <LoginForm /> : <SignupForm />
      };
      </div>
      )
      {/* State example */}
      <Counter />
      <Profile />
      <Toggle />
    </div>
  );
}
export default App;