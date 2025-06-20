import './App.css'
import { Routes, Route } from 'react-router-dom';
import Buurtgroep from "./pages/buurtgroep/Buurtgroep.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import Input from "./components/input/Input.jsx";

function App() {

  return (
      <>
          <div className="page-container">
          <Routes>
              <Route path="/" element={<div></div>} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/buurtgroep" element={<Buurtgroep />} />
              <Route path="/profiel" element={<div>Profile page</div>} />
              <Route path="*" element={<div>Not Found</div>} />
          </Routes>
          </div>
      </>
  )
}

export default App
