import { useState } from 'react';
import UsersVenueSection from './UsersVenueSection';
import CurrentBookingsSection from './CurrentBookingsSection';
import CreateAVenue from './CreateAVenue';
import { EditVenueDropDown } from './EditVenueDropDown';
import ManageMyAccount from './ManageMyAccount';

function TabComponent() {
  const [activeTab, setActiveTab] = useState('venues');
  const tabs = {
    venues: { label: 'My Venues', component: UsersVenueSection },
    bookings: { label: 'My Bookings', component: CurrentBookingsSection },
    create: { label: 'Create a Venue', component: CreateAVenue },
    edit: { label: 'Edit a Venue', component: EditVenueDropDown },
    account: { label: 'Manage my Account', component: ManageMyAccount },
  };
  return (
    <div className="flex gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
      {Object.entries(tabs).map(([key, { label }]) => (
        <button
          key={key}
          className={`px-4 py-2 rounded-lg ${
            // activeTab === key ? 'bg-primary text-white' : 'bg-primary40'
            activeTab === key ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
          onClick={() => setActiveTab(key)}
        >
          {label}
        </button>
      ))}
      {/* <button tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab}>
        Edit my Profile
      </button>
      <button>Show my venues</button>
      <button>See my bookings</button> */}
    </div>
  );
}
export default TabComponent;
