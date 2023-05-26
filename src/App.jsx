// import { useEffect } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Demo from "./Demo";
import Practice from "./Practice";
import NewsFeed from "./NewsFeed";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<div>Home</div>} /> */}
          <Route path="/" element={<Demo />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/news" element={<NewsFeed />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
