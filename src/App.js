import "./App.css";
import Home from "./components/home/home";
import Login from "./components/login/login";
import Protected from "./components/protectedRoutes/protected";
import SignUp from "./components/signup/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        <Route element={<Protected />}>
        <Route path="/home" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
