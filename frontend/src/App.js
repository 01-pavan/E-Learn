import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import LandingPage from "./pages/LandingPage";
import CoursePublishPage from "./pages/CoursePublishPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import LearningPage from "./pages/LearningPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="publish" element={<CoursePublishPage />} />
          <Route path="/course/:courseId" element={<CourseDetailsPage />} />
          <Route path="/learn" element={<LearningPage />} />
        </Routes>
        {/* <Header />
      <LandingPage /> */}
      </Router>
    </>
  );
}
export default App;
