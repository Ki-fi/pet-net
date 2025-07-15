import './App.css'
import { Routes, Route } from 'react-router-dom';
import Buurtgroep from "./pages/buurtgroep/Buurtgroep.jsx";
import Login from "./pages/login/Login.jsx";
import Signup from "./pages/signup/Signup.jsx";
import SignupSuccess from "./pages/successful signup/SignupSuccess.jsx";
import NotFound from "./pages/404/NotFound.jsx";
import NewPost from "./pages/new post/NewPost.jsx";
import PostDetails from "./pages/post-details/PostDetails.jsx";
import {Navigate} from "react-router";
import {AuthContext} from "./components/AuthContext.jsx";
import {useContext} from "react";
import LoadingState from "./components/loading-state/LoadingState.jsx";

function App() {

    const {isAuth} = useContext(AuthContext);

  return (
      <>
          <div className="page-container">
          <Routes>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/signup/welcome" element={<SignupSuccess />} />
              <Route path="/login" element={<Login />} />
              <Route path="/buurtgroep" element={ isAuth === true ? <Buurtgroep /> : <Navigate to="/login"/>} />
              <Route path="/buurtgroep/new" element={<NewPost />} />
              <Route path="/buurtgroep/:id" element={<PostDetails />} />
              <Route path="/profiel" element={<div>Profile page</div>} />
              <Route path="*" element={<NotFound />} />
          </Routes>
          </div>
      </>
  )
}

export default App
