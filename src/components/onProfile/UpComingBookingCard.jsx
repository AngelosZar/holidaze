export function UpComingBookingCard({ venue, loading, error }) {
  return (
    <div className="flex flex-row gap-4 p-4 bg-white shadow-lg rounded-lg max-w-md">
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
        <div className="flex flex-col gap-1">
          <p className="font-semibold">Title</p>
          <p className="">From: 10/10/10</p>
          <p className="">Until: 10/10/10e</p>
          <p className="">Amount paid: 1000nok</p>
          <div className="flex justify-between text-primary">
            <span className="mr-1">★ 4</span>
            <span>4 Reviews</span>
          </div>
        </div>
        <p className="text-sm font-medium mt-1">1000 kr per night</p>
        <div className="flex justify-between mt-1">
          <button className="text-red-500 hover:text-red-700">Cancel</button>
          <button className="text-primary hover:text-primary80">
            Change dates
          </button>
        </div>
      </div>
    </div>
  );
}
