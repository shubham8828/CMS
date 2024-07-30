import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher"
import Schedule from "./pages/Schedule"
import Class from "./pages/Class"
import Lab from "./pages/Lab"
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="Navbar">
        <Navbar />
      
      <Routes>
          <Route path="/" element={
            <div className="Pages">
              <Home />
            </div>
          } />
        

          <Route path="/students" element={
            <div className="Pages">
              <Student />
            </div>
          }/>
          
          <Route path="/teachers" element={
            <div className="Pages">
              <Teacher/>
            </div>
            
          }/>
          <Route path="/schedules" element={
            <div className="Pages">
            
              <Schedule/>
            </div>
          }/>
          <Route path="/classes" element={
            <div className="Pages">
            
              <Class/>
            </div>
          }/>
          <Route path="/labs" element={
            <div className="Pages">
        
            <Lab/>
          </div>  
          }/>
      </Routes>
      <div className="Footer">
        <Footer />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;
