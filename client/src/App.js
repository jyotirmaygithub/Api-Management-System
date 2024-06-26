import React from "react";
import { Slide, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthFunction } from "./context/front-auth";
import { TokenStatusFunction } from "./context/tokenStatus";
import { StatesFunction } from "./context/States";
import { APIProvider } from "./context/api";
import LoginPage from "./pages/Login";
import SignUp from "./pages/SignUp";
import NotFoundPage from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";
import Graphs from "./pages/Graphs";
import HeaderLayout from "./Layout/HeaderLayout";
import Documentation from "./pages/Documentation"

function App() {
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_AUTH_CLIENT_ID}>
        <StatesFunction>
          <TokenStatusFunction>
            <AuthFunction>
              <APIProvider>
                <Router>
                  <Routes>
                    <Route exact path="/" element={<LandingPage />} />
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/signup" element={<SignUp />} />
                    <Route exact path="/Api-usage" element={<><HeaderLayout /><Graphs /></>} />
                    <Route exact path="/documentation" element={<><HeaderLayout /><Documentation /></>} />
                    <Route exact path="*" element={<NotFoundPage />} />
                  </Routes>
                </Router>
              </APIProvider>
              <ToastContainer autoClose={2000} transition={Slide} />
            </AuthFunction>
          </TokenStatusFunction>
        </StatesFunction>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
