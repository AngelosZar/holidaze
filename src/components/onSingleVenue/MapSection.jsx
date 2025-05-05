import Map from '../Map';

function MapSection({ venue }) {
  console.log(venue);
  return (
    <section className="relative z-0">
      {/* <h4 className="px-24 absolute top-4 left-0">Location </h4> */}
      <div className="py-12 flex flex-col lg:flex-row gap-8 z-0 mt-8">
        <div className="w-full h-auto p-4">
          <Map />
        </div>
        {/* <div className="max-w-md  gap-4 p-4 bg-white "> */}
        <div className="flex items-center justify-center mt-12">
          <p className="px-12 lg:max-w-md line-clamp-12">
            {venue?.description}
          </p>
          {/* add functionality to show more later */}
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default MapSection;
