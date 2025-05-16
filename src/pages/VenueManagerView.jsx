import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';
import CreateAVenue from '../components/onManagerView/CreateAVenue';
import ManagersUpcomingBooking from '../components/onManagerView/ManagersUpcomingBooking';
import UsersVenueSection from '../components/onManagerView/UsersVenueSection';

import TabComponent from '.././components/onManagerView/tabComponent';

import { Outlet, useLocation } from 'react-router-dom';

function VenueManagerView() {
  const location = useLocation();
  const currentPath = location.pathname.split('/manager/')[1] || 'venues';

  const tabs = [
    { key: 'venues', label: 'My Venues', path: '/manager/venues' },
    { key: 'bookings', label: 'My Bookings', path: '/manager/bookings' },
    { key: 'create', label: 'Create a Venue', path: '/manager/create' },
    // { key: 'edit', label: 'Edit a Venue', path: '/manager/edit' },
    { key: 'edit/:id', label: 'Edit a Venue', path: '/manager/edit/:id' },
    {
      key: 'account',
      label: 'Manage my Account',
      path: '/manager/account',
    },
  ];
  return (
    <Layout>
      <UserOnHeroSection />
      <TabComponent tabs={tabs} currentPath={currentPath} />
      <Outlet />
      <UsersVenueSection />
      {/* <CurrentBookingsSection /> */}
      <EditVenueDropDown />
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
