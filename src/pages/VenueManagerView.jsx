import Layout from '../components/layout/Layout';
import { UserOnHeroSection } from '../components/onProfile/UserOnHeroSection';
import CurrentBookingsSection from '../components/onManagerView/CurrentBookingsSection';

function VenueManagerView() {
  return (
    <Layout>
      <UserOnHeroSection />
      <CurrentBookingsSection />
      <EditVenueDropDown />
    </Layout>
  );
}

export default VenueManagerView;

function EditVenueDropDown() {
  return (
    <section className="w-full mt-12 mb-12">
      <div className="flex flex-col md:flex-row justify-evenly items-center">
        <div className="max-w-sm ">
          <img
            src="https://images.unsplash.com/photo-1745173036546-c56551790fb8?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="img"
            className="w-full object-cover rounded-xl"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        <div>
          <h1>calendar</h1>
        </div>
      </div>
      <div>
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/*  */}
            <div className="flex flex-col gap-4 mt-8 max-w-sm">
              <div>
                <h6>Basic information</h6>
                <label htmlFor="Title">Title</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter label"
                />
              </div>
              <div>
                <label htmlFor="Description">Description</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Enter description"
                ></textarea>
              </div>
              <div>
                <label htmlFor="Price">Price</label>
                <input
                  type="number"
                  min="0"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Price per night"
                />
              </div>
              <div>
                <label htmlFor="maxGuests">Maximum number of guests</label>
                <input
                  type="number"
                  min="1"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="Price per night"
                />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 mt-8 max-w-sm">
              <h6>Accommodation includes</h6>
              <p>Please provide a yes or no ONLY</p>
              <div>
                <label htmlFor="wifi">Wifi</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  placeholder="yes or no"
                />
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4 mt-8 max-w-sm">
              <h6>Accommodation includes</h6>
              <p>Please provide a yes or no ONLY</p>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
