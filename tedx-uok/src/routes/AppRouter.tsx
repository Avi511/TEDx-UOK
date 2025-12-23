// routes/AppRouter.tsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/layout/Layout";

import HomePage from "../pages/Home/HomePage";
import AboutPage from "../pages/About/AboutPage";
import AboutTedPage from "../pages/About/AboutTedPage";
import AboutTedxPage from "../pages/About/AboutTedxPage";
import AboutTedxUokPage from "../pages/About/AboutTedxUokPage";
import RegistrationPage from "../pages/Registration/RegistrationPage";
import Agenda from "../pages/Agenda/AgendaPage";
import PastEventsPage from "../pages/PastEvents/PastEventsPage";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <Routes location={location}>
      {/* Home Page */}
      <Route
        path="/"
        element={
          <div key={location.pathname} className="page-transition">
            <HomePage />
          </div>
        }
      />

      {/* About Pages - EXACT විදියට */}
      <Route
        path="/about"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutPage />
          </div>
        }
      />
      <Route
        path="/about/ted"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedPage />
          </div>
        }
      />
      <Route
        path="/about/tedx"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedxPage />
          </div>
        }
      />
      <Route
        path="/about/tedx-uok"
        element={
          <div key={location.pathname} className="page-transition">
            <AboutTedxUokPage />
          </div>
        }
      />

      {/* Other Pages */}
      <Route
        path="/agenda"
        element={
          <div key={location.pathname} className="page-transition">
            <Agenda />
          </div>
        }
      />
      <Route
        path="/register"
        element={
          <div key={location.pathname} className="page-transition">
            <RegistrationPage />
          </div>
        }
      />
      <Route
        path="/past-events"
        element={
          <div key={location.pathname} className="page-transition">
            <PastEventsPage />
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
