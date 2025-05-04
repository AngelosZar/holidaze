import { useEffect, useState } from 'react';

function HeroGrid({ venueGallery }) {
  return (
    <section className="mt-28 mb-14 relative">
      <div className="relative overflow-hidden grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg ">
          <img
            src={venueGallery[0]?.url}
            alt={venueGallery[0]?.alt || 'img'}
            // src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            // alt="img"
            className="rounded-lg w-full h-auto object-cover"
            style={{ aspectRatio: '1/1' }}
            loading="lazy"
            width="100%"
            height="auto"
          />
        </div>
        <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg ">
          <div className="grid-cols-2 gap-4 hidden sm:grid">
            {venueGallery
              .slice(1, 5)
              .map(
                (image, index) => (
                  console.log(image),
                  (
                    <SingleImgOnGrid
                      key={index + 1}
                      img={image.url}
                      alt={image.alt || 'Venue image'}
                      index={index}
                    />
                  )
                )
              )}
          </div>
          {/* here seperated */}
          {/* <div className="grid-cols-2 gap-4 hidden sm:grid"> */}
          {/* <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="rounded-lg w-full h-auto object-cover"
                style={{ aspectRatio: '1/1' }}
                loading="lazy"
                width="100%"
                height="auto"
              />
            </div>
            <div className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg max-w-sm">
              <img
                src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="img"
                className="rounded-lg w-full h-auto object-cover"
                style={{ aspectRatio: '1/1' }}
                loading="lazy"
                width="100%"
                height="auto"
              />
            </div> */}
        </div>
        {/* <div className="flex flex-col ">
            <button className="flex self-end mr-4">See more</button>
          </div> */}
      </div>
    </section>
  );
}

export default HeroGrid;

function SingleImgOnGrid({ img, alt, index }) {
  return (
    <div
      className="flex flex-col gap-4 p-4 bg-white shadow-md rounded-lg max-w-sm"
      key={index}
    >
      <img
        src={img}
        alt={alt}
        className="rounded-lg w-full h-auto object-cover"
        style={{ aspectRatio: '1/1' }}
        loading="lazy"
        width="100%"
        height="auto"
      />
    </div>
  );
}
