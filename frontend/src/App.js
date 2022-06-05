import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
        </Routes>
        {/* <Header />
      <LandingPage /> */}
      </Router>
    </>
  );
}
export default App;
