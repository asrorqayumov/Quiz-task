import { Routes, Route, Link } from "react-router-dom";
import { Count } from "./pages/Count/Index";
import { Home } from "./pages/Home/Index";

function App() {
  return (
    <div className="container">
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/count" element={<Count />} />
        </Routes>
        <div className="link-box">
          <Link className="link" to='/'>Home</Link> <br />
          <Link className="link" to='/count'>Count</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
