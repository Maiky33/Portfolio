import Navbar from './Components/Navbar'
import Home from './Components/Home';
import About from './Components/About';
import Knowledge from './Components/Knowledge'
import Experience from './Components/Experience'
import ContactMe from "./Components/ContactMe"
import "./css/App.css"

function App() {

  return (
    <div className='App'> 
      <Navbar/>
      <Home/>
      <About/>
      <Knowledge/>
      <Experience/>
      <ContactMe/>
    </div>
  );
}

export default App;
