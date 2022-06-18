import Header from "./components/Header";
import DashBoard from "./pages/DashBoard";
import LandingPage from "./pages/LandingPage";
import CoursePublishPage from "./pages/CoursePublishPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import LearningPage from "./pages/LearningPage";
import PaymentPage from "./pages/PaymentPage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="publish" element={<CoursePublishPage />} />
          <Route
            exact
            path="/course/:courseId"
            element={<CourseDetailsPage />}
          />
          <Route exact path="/learn" element={<LearningPage />} />
          <Route exact path="/payment" element={<PaymentPage />} />
        </Routes>
      </Router>
    </>
  );
}
export default App;
