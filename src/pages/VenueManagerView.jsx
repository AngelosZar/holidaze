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

function VenueManagerView() {
  // const [isLoading, setIsLoading] = useState(false);
  // const [error, setError] = useState(null);

  // tab component
  // const [activeTab, setActiveTab] = useState('venues');
  // const tabs = {
  //   venues: { label: 'My Venues', component: UsersVenueSection },
  //   bookings: { label: 'My Bookings', component: CurrentBookingsSection },
  //   create: { label: 'Create a Venue', component: CreateAVenue },
  //   edit: { label: 'Edit a Venue', component: EditVenueDropDown },
  //   account: { label: 'Manage my Account', component: ManageMyAccount },
  // };

  return (
    <Layout>
      <UserOnHeroSection />
      <UsersVenueSection />
      {/* <CurrentBookingsSection /> */}
      {/* <EditVenueDropDown /> */}
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
