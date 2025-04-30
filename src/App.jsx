import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
//
import Homepage from './pages/Homepage';
import RegisterPage from './pages/RegisterPage';
import LogInPage from './pages/LogInPage';
import SingleVenuePage from './pages/SingleVenuePage';
import UserProfileView from './pages/UserProfileView';
import VenueManagerView from './pages/VenueManagerView';
import useAuthStore from './stores/authStore';
import RegisterAs from './pages/RegisterAs';
import { useEffect } from 'react';

//
function App() {
  const { initAuth } = useAuthStore();
  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/venue/:id" element={<SingleVenuePage />} />
          <Route path="/registerAs" element={<RegisterAs />} />
          <Route path="/register">
            <Route path="manager" element={<RegisterPage />} />
            <Route path="user" element={<RegisterPage />} />
            <Route index element={<Navigate to="/registerAs" replace />} />
          </Route>

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
