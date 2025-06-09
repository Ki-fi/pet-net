import './App.css'
import { Routes, Route } from 'react-router-dom';
import Buurtgroep from "./pages/buurtgroep/Buurtgroep.jsx";
import Login from "./pages/login/Login.jsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/buurtgroep" element={<Buurtgroep />} />
              <Route path="/profiel" element={<div>Profile page</div>} />
              <Route path="*" element={<div>Not Found</div>} />
          </Routes>
      </>
  )
}

export default App
