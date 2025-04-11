import BookAside from './BookAside';
import CalendarAside from './CalendarAside';
import MapSection from './MapSection';

function VenueInfoSection() {
  return (
    <section>
      <div>
        <h2>Best mansion ever</h2>
        <p>info</p>
        <p>info</p>
        <span>
          <h1>img</h1>
          <p>host name </p>
        </span>
        <div>
          <h6>Easy check in</h6>
          <h6>Free cancellations for 48 hours</h6>
          <h6>Sustainable</h6>
        </div>
        <p>
          This is the description : Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in{' '}
        </p>
      </div>
      <div>
        <h3>Accommodation includes </h3>
        <div>
          <ul>
            <li>1 king bed</li>
            <li>1 queen bed</li>
            <li>1 sofa bed</li>
          </ul>
          <ul>
            <li>1 king bed</li>
            <li>1 queen bed</li>
            <li>1 sofa bed</li>
          </ul>
        </div>
        <button>Show all amenities</button>
      </div>
      <BookAside />
      <CalendarAside />
      <MapSection />
    </section>
  );
}

export default VenueInfoSection;
