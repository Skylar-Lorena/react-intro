import { Link } from "react-router-dom";

function Landing(){
    return(
        <div>
<h1> Student Dashboard</h1>
<p>Welcome to the Student Dashboard — a simple platform to track your activity and interact with your profile.</p>
<nav>
<Link to="/login">Login</Link>
<br />
<Link to="/signup">Create Account</Link>
</nav>
        </div>
    )
}
export default Landing;
