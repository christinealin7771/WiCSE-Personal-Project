import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Experiences from './components/Experiences';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/experience" element={<Experiences/>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;


