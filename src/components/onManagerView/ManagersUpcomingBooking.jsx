function ManagersUpcomingBooking() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md">
      <div>
        <img
          src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="w-full h-48 object-cover rounded-t-xl"
          style={{ aspectRatio: '1/1' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
      <div className="p-3 ">
        <div className="mt-1 text-start flex flex-col justify-between w-full h-full">
          <div>
            <p className="font-semibold">Title</p>
            <p>2 bookings</p>
          </div>
          <div>
            <button className="text-primary hover:text-primary80">
              Edit venue
            </button>
            <button className="text-red-500 hover:text-red-700">
              Remove Venue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagersUpcomingBooking;
