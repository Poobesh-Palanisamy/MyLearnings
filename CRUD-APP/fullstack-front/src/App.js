import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './Layout/Navbar';
import Home from './Pages/Home';
import {BrowserRouter as Router,  Routes,  Route } from "react-router-dom";
import AddUser from './Users/AddUser';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/add-employee" element={<AddUser/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
