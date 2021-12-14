import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";

function App() {
  const isLoggedIn = false;
  return <div>
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Login />} />
      </Routes>
    </Router>
  </div>;
}

export default App;
