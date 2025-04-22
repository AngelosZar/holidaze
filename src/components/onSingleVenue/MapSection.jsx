import Map from '../Map';

function MapSection() {
  return (
    <section className="py-12 flex flex-col gap-8">
      <h3>Here goes the map</h3>
      <div className="w-full h-auto">
        <Map />
      </div>
      <div className="flex max-w-md">
        <p>
          Repeat the description : Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in{' '}
        </p>
      </div>
    </section>
  );
}

export default MapSection;
