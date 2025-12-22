import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";

import HomePage from "../pages/Home/HomePage";
// import AboutPage from "../pages/About/AboutPage";
// import SpeakersPage from "../pages/Speakers/SpeakersPage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import Agenda from "../pages/Agenda/AgendaPage";
// import Theme from "../pages/Theme/Theme";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      <Route
        path="/"
        element={
          <div key={location.pathname} className="page-transition">
            <HomePage />
          </div>
        }
      />
      <Route
        path="/agenda"
        element={
          <div key={location.pathname} className="page-transition">
            <Agenda />
          </div>
        }
      />
      {/* <Route path="/partners" element={<div key={location.pathname} className="page-transition"><PartnersPage /></div>} /> */}
      {/* <Route path="/contact" element={<div key={location.pathname} className="page-transition"><ContactPage /></div>} /> */}
      <Route
        path="/register"
        element={
          <div key={location.pathname} className="page-transition">
            <RegistrationPage />
          </div>
        }
      />
    </Routes>
  );
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}