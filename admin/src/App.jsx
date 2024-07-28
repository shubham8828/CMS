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
      </div>
      <Routes>
          <Route path="/" element={
            <div className="Pages">
              <Home />
            </div>
          } />
        

          <Route path="/students" element={<Student />} />
          <Route path="/teachers" element={<Teacher/>}/>
          <Route path="/schedules" element={<Schedule/>}/>
          <Route path="/classes" element={<Class/>}/>
          <Route path="/labs" element={<Lab/>}/>
      </Routes>
      <div className="Footer">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
