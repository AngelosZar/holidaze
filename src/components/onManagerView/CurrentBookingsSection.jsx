import ManagersUpcomingBooking from '../../components/onManagerView/ManagersUpcomingBooking';

function CurrentBookingsSection() {
  return (
    <section className="w-full mt-12 mb-12">
      <div className="grid grid-cols-1 mt-14 gap-4 ">
        <ManagersUpcomingBooking />
        <ManagersUpcomingBooking />
        <ManagersUpcomingBooking />
      </div>
    </section>
  );
}

export default CurrentBookingsSection;
