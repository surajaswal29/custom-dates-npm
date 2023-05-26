// import { useEffect } from "react";
import Chat from "./Chat.jsx";
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
          <Route path="/" element={<div>Home</div>} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/practice" element={<Practice />} />
          <Route path="/news" element={<NewsFeed />} />
          <Route path="/chats" element={<Chat />} />
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
