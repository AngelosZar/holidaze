import { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import AboutUs from '../components/onHomepage/AboutUs';
import ChooseHolidays from '../components/onHomepage/ChooseHolidays';
import HeroSearchBar from '../components/onHomepage/HeroSearchBar';
import { HomeHero } from '../components/onHomepage/HomeHero';
import QuickSearch from '../components/onHomepage/QuickSearch';
import RecommendedStays from '../components/onHomepage/RecommendedStays';
import { TestimonialsSection } from '../components/Testimonials';
import useVenueStore from '../stores/venuesStore';
function Homepage() {
  const { getVenue } = useVenueStore();
  useEffect(() => {
    async function fetchVenues() {
      try {
        const data = await getVenue('7d74e8bc-ef55-4d26-803f-753c59e8b710');
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchVenues();
  }, [getVenue]);

  return (
    <Layout>
      <HomeHero />
      <QuickSearch />
      {/* <ChooseHolidays /> */}
      <RecommendedStays />
      <AboutUs />
      <TestimonialsSection />
    </Layout>
  );
}

export default Homepage;
