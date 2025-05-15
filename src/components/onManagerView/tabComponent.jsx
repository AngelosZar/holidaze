import UsersVenueSection from './UsersVenueSection';
import CurrentBookingsSection from './CurrentBookingsSection';
import CreateAVenue from './CreateAVenue';
import { EditVenueDropDown } from './EditVenueDropDown';
import ManageMyAccount from './ManageMyAccount';

import { useNavigate } from 'react-router-dom';

export function TabComponent({ currentPath, tabs }) {
  const navigate = useNavigate();
  return (
    <div className="flex -col gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
      {tabs.map(tab => (
        <button
          key={tab.key}
          // <div className="flex gap-2 mt-2 pb-8 border-b-4 border-primary px-8">
          className={`px-4 py-2 rounded-lg hover:bg-primary60 ${
            currentPath === tab.key ? 'bg-primary text-white' : 'bg-primary20'
          }`}
          onClick={() => navigate(tab.path)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
export default TabComponent;
