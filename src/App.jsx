import './App.css'
import Greeting from './Greeting';

function App() {
const handleClick = ()=>{
  alert("Clicked!")
}

  return (
    //jsx allows js inside of UI
    //components can receive data- we call that props
    <>
    <h1 className='hero'>Welcome to the Student Board</h1>
  <Greeting name ="Eugene"/> 
  <button onClick={handleClick}>
      Click Me!
    </button>
</>
  )
}

export default App
