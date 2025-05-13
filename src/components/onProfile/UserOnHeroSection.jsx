// import { useEffect, useState } from 'react';
import useUserData from '../../hooks/useUserData';
// import TabComponent from '../onManagerView/tabComponent';

// import useGetUserVenues from '../../hooks/useGetUserVenues';
// import useGetUserBookings from '../../hooks/useGetUserBookings';
// import UsersVenueSection from '../onManagerView/UsersVenueSection';
// import CurrentBookingsSection from '../onManagerView/CurrentBookingsSection';
// import CreateAVenue from '../onManagerView/CreateAVenue';
// import { EditVenueDropDown } from '../onManagerView/EditVenueDropDown';
// import ManageMyAccount from '../onManagerView/ManageMyAccount';

export function UserOnHeroSection() {
  const { userData, isLoading, error } = useUserData();
  // const { setUserForVenues, listOfVenues } = useGetUserVenues();
  // const { setUserForBookings, listOfBookings } = useGetUserBookings();

  // const handleSelectUserForVenues = userName => {
  //   setUserForVenues(userName);
  // };
  // const handleSelectUserForBookings = userName => {
  //   setUserForBookings(userName);
  // };
  // console.log('userData', userData);
  if (isLoading) return <div>is loading ... add spinner</div>;

  if (error) return <div>error promt :{error.message}</div>;

  return (
    // change the pt
    <section className="w-full mt-[90px]  mb-32 ">
      <div className="relative w-full h-48  ">
        <img
          src={userData?.bannerUrl || 'img'}
          alt={userData?.bannerAlt}
          className="w-full h-full object-cover"
          // onClick={() => handleSelectUserForVenues(userData?.userName)}
          // onClick={() => handleSelectUserForBookings(userData?.userName)}
        />
        <div className="absolute -bottom-16 left-12">
          <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
            <img
              src={userData?.avatarUrl || 'img'}
              alt={userData?.avatarAlt}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        {/* <div className="mt-22 px-12 sm:mt-12 flex justify-between border-b-4 border-primary40 pb-4"> */}
        <div className="mt-22 px-12 sm:mt-12 flex justify-between ">
          <div></div>
          <div className="mr-4 ">
            <h6 className="text-xl font-medium">{userData?.userName}</h6>
            {/* <p className="">
              {userData?.venueManager ? 'Manager Account' : ''}
            </p> */}
            {/* <button className="text-sm mt-1">Manage my account</button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

// tabComponent.jsx:19 React does not recognize the `activeTab` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `activetab` instead. If you accidentally passed it from a parent component, remove it from the DOM element.
