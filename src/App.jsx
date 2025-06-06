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
import AboutUsPage from './pages/AboutUsPage';
import ContactUsPage from './pages/ContactUs';
import Unauthorized from './pages/Unauthorized';
function App() {
  const { initAuth, initUser, isManager, isLoading } = useAuthStore();
  const isAuthenticated =
    localStorage.getItem('isAuthenticated') === 'true' ||
    sessionStorage.getItem('isAuthenticated') === 'true';
  useEffect(() => {
    initAuth();
  }, [initAuth, isAuthenticated, isManager]);

  useEffect(() => {
    if (isAuthenticated) {
      initUser();
    }
  }, [initUser, isAuthenticated]);

  const ProtectedRoutes = ({ children }) => {
    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-screen">
          <p>Loading user authentication...</p>
        </div>
      );
    }

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    return children ? children : <Outlet />;
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
          <Route path="/aboutUs" element={<AboutUsPage />} />
          <Route path="/contactUs" element={<ContactUsPage />} />
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
          <Route path="unauthorized" element={<Unauthorized />} />
          <Route path="*" element={<PageNotFound replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
