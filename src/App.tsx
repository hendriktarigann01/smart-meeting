import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { ConfigurationPage } from "@/pages/ConfigurationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:category/:roomSize" element={<ConfigurationPage />} />
        <Route path="/:category/:roomSize/:step" element={<ConfigurationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
