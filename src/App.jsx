import './App.css';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//
import Homepage from './pages/Homepage';
import Register from './pages/Register';
import LogIn from './pages/LogIn';
import SingleVenue from './pages/SingleVenue';
import UserProfileView from './pages/UserProfileView';
import VenueManagerView from './pages/VenueManagerView';
// import SingleVenue from './pages/SingleVenue';

//
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/venue" element={<SingleVenue />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/profile" element={<UserProfileView />} />
          <Route path="/manager" element={<VenueManagerView />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
