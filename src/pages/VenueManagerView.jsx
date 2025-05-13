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
function VenueManagerView() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('venues');
  // tab component

  const tabs = {
    venues: { label: 'My Venues', component: UsersVenueSection },
    bookings: { label: 'My Bookings', component: CurrentBookingsSection },
    create: { label: 'Create a Venue', component: CreateAVenue },
    edit: { label: 'Edit a Venue', component: EditVenueDropDown },
    account: { label: 'Manage my Account', component: ManageMyAccount },
  };

  return (
    <Layout>
      <UserOnHeroSection />
      <>
        <TabComponent
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabContent tabs={tabs} activeTab={activeTab} />
      </>

      {/* <UsersVenueSection /> */}
      {/* <CurrentBookingsSection /> */}
      {/* <EditVenueDropDown /> */}
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;
