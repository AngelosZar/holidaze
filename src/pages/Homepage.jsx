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
  const { getVenues } = useVenueStore();
  useEffect(() => {
    async function fetchVenues() {
      try {
        const data = await getVenues();
        console.log('data', data);
      } catch (error) {
        console.log('error', error);
      }
    }
    fetchVenues();
  }, [getVenues]);

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
