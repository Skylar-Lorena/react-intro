 //import "link" from react-router-dom instead of using <a> tags 
  //this allows the app to change the URL without refreshing the entire page
  import {Link}from "react-router-dom"
function Landing(){
    return(
        <div>
<h1> Student Dashboard</h1>
<p> Welcome to the Student Dashboard - a simple platform to track your activity and interact with your profile</p>
{/*Adding navigation links*/}
{/*Instead of using <a> we used link to*/ }
<nav>
    <Link to="/login">Go to Login</Link>
<Link to="/signup">Create Account</Link>
{/*Using links is better than the <a></a> since it prevents the page from refreshing 
Link "to" prop tells the react Router which path to go to*/}
</nav>
        </div>
    )
}
export default Landing