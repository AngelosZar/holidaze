import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import SingleVenuePage from './pages/SingleVenuePage';
import UserProfileView from './pages/UserProfileView';
import VenueManagerView from './pages/VenueManagerView';
// import SingleVenuePage from './pages/SingleVenuePage';

//
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/venue" element={<SingleVenuePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/profile" element={<UserProfileView />} />
          <Route path="/manager" element={<VenueManagerView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
