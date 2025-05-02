import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function SingleCard({ id, title, image, price, rating, location }) {
  const [clickedCardId, setClickedCardId] = useState('');
  const Navigate = useNavigate();
  // console.log(id);
  const handleClick = id => {
    setClickedCardId(id);
    // console.log('clickedCardId', clickedCardId);
    Navigate(`/venue/${id}`);
    // set clickedCartid to url parameter and redirect or set on session storage or zustang
  };
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-white shadow-lg rounded-lg max-w-sm hover:shadow-xl transition-all duration-200 cursor-pointer hover:scale-105  "
      value={id}
      onClick={() => handleClick(id)}
    >
      <div>
        <img
          src={image}
          alt="img"
          className="w-full h-48 object-cover rounded-t-xl"
          style={{ aspectRatio: '1/1' }}
          loading="lazy"
          width="100%"
          height="auto"
        />
      </div>
      <div className="p-3">
        <div className="flex justify-between items-center">
          <div className="flex flex-col overflow-hidden">
            <p className="line-clamp-1  font-semibold">{title}</p>
            <p className="text-sm font-medium line-clamp-1 ">
              {location?.city}, {location?.country}
            </p>
          </div>
          <div className="flex items-center  text-primary">
            <span className="ml-3 mr-1">★</span>
            <span>{rating}</span>
          </div>
        </div>
        <p className="text-sm font-medium mt-1">{price} kr per night</p>
        {/* <p className="text-sm text-gray-500 mt-1">if previous stay show date</p> */}
      </div>
    </div>
  );
}

export default SingleCard;
