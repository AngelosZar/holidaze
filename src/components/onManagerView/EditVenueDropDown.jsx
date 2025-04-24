import BasicInfoForForm from './BasicInfoForForm';
import SetLocationInformation from './SetLocationInformation';
import SetAccommodationIncludes from './SetAccommodationIncludes';

export function EditVenueDropDown() {
  return (
    <section className="w-full my-12 mx-8">
      <h3 className="mb-12">Edit venue dropdown</h3>
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
            <BasicInfoForForm />
            <SetLocationInformation />
            <SetAccommodationIncludes />
          </div>
        </form>
      </div>
    </section>
  );
}
