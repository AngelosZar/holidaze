import { useEffect, useState } from 'react';
import createVenueStore from '../../stores/createVenueStore';
import useVenueStore from '../../stores/venuesStore';

export default function BasicInfoForForm() {
  const { updateVenueData } = createVenueStore();

  return (
    <div className="flex flex-col gap-4 mt-8 max-w-sm">
      <h6>Basic information</h6>
      <div>
        <label htmlFor="Title">Title</label>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter label"
          onChange={e => updateVenueData({ name: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="Description">Description</label>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Enter description"
          onChange={e => updateVenueData({ description: e.target.value })}
        ></textarea>
      </div>

      <div>
        <label htmlFor="Price">Price</label>
        <input
          type="number"
          min="0"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ price: e.target.value })}
        />
      </div>
      <div>
        <label htmlFor="maxGuests">Maximum number of guests</label>
        <input
          type="number"
          min="1"
          className="w-full p-2 border border-gray-300 rounded-md"
          placeholder="Price per night"
          onChange={e => updateVenueData({ maxGuests: e.target.value })}
        />
      </div>
      <AddMediaSection />
    </div>
  );
}

function AddMediaSection() {
  const [mediaUrl, setMediaUrl] = useState('');
  const [mediaAlt, setMediaAlt] = useState('');
  const { addMedia } = createVenueStore();
  const [error, setError] = useState(null);

  const handleAddMedia = e => {
    e.preventDefault();
    console.log('click');
    console.log(e.target.value);
    // handle if no media url or media alt
    // trim and check if mediaUrl is a valid image url regex ?
    // display error if not valid
    // else
    // addMedia({ url: mediaUrl, alt: mediaAlt });
    // setMediaUrl('');
    // setMediaAlt('');
    //  reset errorand  reset media
  };

  return (
    <>
      <h6>add images here</h6>
      <div className="flex flex-col gap-4 mt-8 max-w-sm">
        <div>
          <label htmlFor="imgUrl">Url for images</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter valid image url"
            onChange={e => handleAddMedia(e)}
          />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter description for image"
            onChange={e => handleAddMedia(e)}
          ></input>
        </div>
      </div>
    </>
  );
}
