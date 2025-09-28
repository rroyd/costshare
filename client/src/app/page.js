import Dashboard from "./Dashboard";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

export default function Home() {

  
  return (
    <Dashboard/>
    // <Router>
    //   <Routes>
    //     <Route path = "/" element = {<Dashboard/>}/>  
    //     <Route path = "/login" element = {<SignIn/>}/>  
    //     <Route path = "/register" element = {<SignUp/>}/>  
    //   </Routes>
    // </Router>
  );
}
