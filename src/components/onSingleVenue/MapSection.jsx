import Map from '../Map';

function MapSection({ venue }) {
  return (
    <section className="relative z-0">
      <div className="py-12 flex flex-col lg:flex-row gap-8 z-0 mt-8">
        <div className="w-full h-auto p-4">
          <Map />
        </div>

        <div className="flex items-center justify-center mt-12">
          <p className="px-12 lg:max-w-md line-clamp-12">
            {venue?.description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default MapSection;
