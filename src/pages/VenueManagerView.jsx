import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';
import CreateAVenue from '../components/onManagerView/CreateAVenue';
import ManagersUpcomingBooking from '../components/onManagerView/ManagersUpcomingBooking';
import UsersVenueSection from '../components/onManagerView/UsersVenueSection';
import { useState } from 'react';
import {
  TabComponent,
  TabContent,
} from '.././components/onManagerView/tabComponent';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
function VenueManagerView() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);
  // const [activeTab, setActiveTab] = useState('venues');
  // tab component

  const location = useLocation();
  const navigate = useNavigate();
  // const handleTabChange = tab => {
  //   setActiveTab(tab);
  //   navigate(`/manager/${tab}`);
  // };
  // const currentPath = location.pathname.split('/manager/')[1] || '';
  const currentPath = location.pathname.split('/manager/')[1] || 'venues';

  console.log('currentPath:', currentPath);
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
      <TabComponent2 tabs={tabs} currentPath={currentPath} />
      {/* <>
        <TabComponent
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          handleTabChange={handleTabChange}
        />
        <TabContent tabs={tabs} activeTab={activeTab} />
      </> */}

      {/* <div className="flex -col gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            // <div className="flex gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
            className={`px-4 py-2 rounded-lg hover:bg-primary20 ${
              currentPath === tab.key ? 'bg-primary text-white' : 'bg-primary20'
            }`}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </button>
        ))}
      </div> */}
      {/* <Outlet /> */}

      {/* <UsersVenueSection /> */}
      {/* <CurrentBookingsSection /> */}
      {/* <EditVenueDropDown /> */}
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
function TabComponent2({ tabs, currentPath }) {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex -col gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
        {tabs.map(tab => (
          <button
            key={tab.key}
            // <div className="flex gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
            className={`px-4 py-2 rounded-lg hover:bg-primary20 ${
              currentPath === tab.key ? 'bg-primary text-white' : 'bg-primary20'
            }`}
            onClick={() => navigate(tab.path)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <Outlet />
    </>
  );
}
