import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';
//
import { EditVenueDropDown } from '../components/onManagerView/EditVenueDropDown';
import ManageMyAccount from '../components/onManagerView/ManageMyAccount';
import CreateAVenue from '../components/onManagerView/CreateAVenue';
import ManagersUpcomingBooking from '../components/onManagerView/ManagersUpcomingBooking';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      <UsersVenueSection />
      <CurrentBookingsSection />
      {/* <EditVenueDropDown /> */}
      {/* <CreateAVenue /> */}
      {/* <ManageMyAccount /> */}
    </Layout>
  );
}

export default VenueManagerView;

function UsersVenueSection() {
  return (
    <section className="w-full ">
      <div className="grid grid-cols-1  gap-4 ">
        {/* Managers venue published */}
        {/* <ManagersUpcomingBooking />
        <ManagersUpcomingBooking />
        <ManagersUpcomingBooking /> */}
      </div>
    </section>
  );
}
