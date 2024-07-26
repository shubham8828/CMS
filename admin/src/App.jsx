import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Student from "./pages/Student"
import Teacher from "./pages/Teacher"
import Schedule from "./pages/Schedule"
import Class from "./pages/Class"
import Lab from "./pages/Lab"

const App = () => {
  return (
    <BrowserRouter >
        <Navbar />
    <Routes >
      <Route path="/" element={<Home/>}/>
      <Route path="/students" element={<Student/>}/>
      <Route path="/teachers" element={<Teacher/>}/>
      <Route path="/schedules" element={<Schedule/>}/>
      <Route path="/classes" element={<Class/>}/>
      <Route path="/labs" element={<Lab/>}/>
    </Routes>

    </BrowserRouter>
  )
}

export default App