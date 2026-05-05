  //import "link" from react-router-dom instead of using <a> tags 
  //this allows the app to change the URL without refreshing the entire page
  import {Link, link}from "react-router-dom"
function Landing(){
    return(
        <div>
<h1> Student Dashboard</h1>
<p> Welcome to the Student Dashboard - a simple platform to track your activity and interact with your profile</p>
<Link to="/login">Go to Login</Link>
<Link to="/signup">Create Account</Link>
{/*Using links is better than the <a></a> since it prevents the page from refreshing*/}
        </div>
    )
}
export default Landing