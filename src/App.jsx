import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import NewLandingPage from './NewLandingPage';
import ForgotPassword from './ForgotPassword'; // Import ForgotPassword component
import LandingPage from './LandingPage';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route exact path="/
      " element={<LandingPage />} />
        <Route exact path="/signin" element={<SignIn />} />
        <Route exact path="/signup" element={<SignUp />} />
        <Route exact path="/newlandingpage" element={<NewLandingPage />} />
        <Route exact path="/forgotpassword" element={<ForgotPassword />} /> {/* Add route for ForgotPassword */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;
