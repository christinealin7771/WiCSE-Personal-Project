import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Pages/Home';
import Experiences from './components/Pages/Experiences';
import Projects from './components/Pages/Projects';
import Footer from './components/Footer';
import DisplayProject from './components/Pages/DisplayProject';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/WiCSE-Personal-Project" element={<Home/>}></Route>
          <Route path="/WiCSE-Personal-Project/projects" element={<Projects/>}></Route>
          <Route path="/WiCSE-Personal-Project/experience" element={<Experiences/>}></Route>
          <Route path="/WiCSE-Personal-Project/displayproject/:id" element={<DisplayProject/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


