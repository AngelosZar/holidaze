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
import PageNotFound from './pages/PageNotFound';
import UsersVenueSection from './components/onManagerView/UsersVenueSection';
import CurrentBookingsSection from './components/onManagerView/CurrentBookingsSection';
import CreateAVenue from './components/onManagerView/CreateAVenue';
import { EditVenueDropDown } from './components/onManagerView/EditVenueDropDown';
import ManageMyAccount from './components/onManagerView/ManageMyAccount';

//
function App() {
  const { initAuth, isAuthenticated } = useAuthStore();
  useEffect(() => {
    initAuth();
  }, [initAuth]);
  const ProtectedRoutes = ({ children }) => {
    if (!isAuthenticated) {
      // maybe show a message first
      return <Navigate to="/login" replace />;
    }
    return children;
  };
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
          <Route
            path="/manager"
            element={
              <ProtectedRoutes requiredRole="manager">
                <VenueManagerView />
              </ProtectedRoutes>
            }
          >
            <Route path="venues" element={<UsersVenueSection />} />
            <Route path="bookings" element={<CurrentBookingsSection />} />
            <Route path="create" element={<CreateAVenue />} />
            <Route path="edit/:id" element={<EditVenueDropDown />} />
            <Route path="account" element={<ManageMyAccount />} />
            <Route index element={<UsersVenueSection />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<PageNotFound />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
