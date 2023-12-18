import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "pages/landingPage/About";
import Home from "pages/landingPage/Home";
import { React, createContext, useState } from "react";
import PrivacyPolicy from "pages/landingPage/PrivacyPolicy";
import Navbar from "components/Navbar";
import InfoBar from "components/InfoBar";
import ScrollToTop from "hooks/ScrollToTop";
import Companies from "pages/landingPage/Companies";
import Footer from "components/Footer";
import SignIn from "pages/landingPage/SignIn/SignIn";
import SignUp from "pages/landingPage/SignUp/SignUp";
import SignUpApplicant from "pages/landingPage/SignUp/SignUpApplicant";
import SignUpRecruiter from "pages/landingPage/SignUp/SignUpRecruiter";
import Jobs from "pages/landingPage/Jobs";
import ForRecruiter from "pages/landingPage/For/ForRecruiter";
import ForApplicant from "pages/landingPage/For/ForApplicant";
import useRole from "hooks/useRole";
import Leaderboard from "pages/home/Leaderboard";

export const SetPopupContext = createContext();

export default function App() {
  const role = useRole();
  console.log("role:" + role);
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <Router>
      <SetPopupContext.Provider value={setPopup}>
        <ScrollToTop />
        <InfoBar />
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route exact path="/companies" element={<Companies />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/sign-up" element={<SignUp />} />
          <Route
            exact
            path="/sign-up/new-applicant"
            element={<SignUpApplicant />}
          />
          <Route
            exact
            path="/sign-up/new-recruiter"
            element={<SignUpRecruiter />}
          />
          <Route exact path="/jobs" element={<Jobs />} />
          <Route exact path="/for-recruiter" element={<ForRecruiter />} />
          <Route exact path="/for-applicant" element={<ForApplicant />} />
          <Route exact path="/leaderboard" element={<Leaderboard />} />
        </Routes>
        <Footer />
      </SetPopupContext.Provider>
    </Router>
  );
}
