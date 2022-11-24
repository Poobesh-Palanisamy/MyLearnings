import React from 'react';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import CreateEmployeesComponent from './components/CreateEmployeesComponent';

function App() {
  return (
    
       <Router>
        <HeaderComponent />
        <div className="container">
          <Routes>
          <Route  path="/"  element={ListEmployeeComponents}></Route>
          <Route path="/employees" element={ListEmployeeComponents}></Route>
          <Route path="/add-employee" element={CreateEmployeesComponent}></Route>
          <ListEmployeeComponents />
          </Routes>
        </div>
        <FooterComponent />
      </Router>
      
  );
};

export default App();


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
