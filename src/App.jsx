import { useState } from "react";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";

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
}
export default App;