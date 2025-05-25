import { useState, useCallback } from 'react';
import useVenueStore from '../stores/venuesStore';

function usePostVenue() {
  const { postVenue } = useVenueStore(state => state);
  const [isPosting, setIsPosting] = useState(false);
  const [postError, setPostError] = useState(null);

  const postNewVenue = useCallback(
    async venueData => {
      try {
        setPostError(null);
        setIsPosting(true);
        const data = await postVenue(venueData);
        setIsPosting(false);
        return data;
      } catch (error) {
        setIsPosting(false);
        setPostError(error);
        throw error;
      }
    },
    [postVenue]
  );
  return {
    postVenue: postNewVenue,
    isPosting,
    postError,
  };
}

export default usePostVenue;
