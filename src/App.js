import "antd/dist/antd.min.css";
import "./App.css";
import Post from "./components/Post/Post";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Info from "./components/Info/Info";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Post />} />
          <Route path="v1jobs/job" element={<Info />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
