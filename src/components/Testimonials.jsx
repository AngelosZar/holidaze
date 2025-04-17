function TestimonialsSection() {
  return (
    <section className="">
      <h4 className="mx-12 mb-4">Testimonials</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 bg-white shadow-md rounded-lg max-w-7xl mx-auto w-full height-full">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
}

// function TestimonialCard() {
//   return (
//     <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative">
//       <div className="absolute inset-0 z-0">
//         <img
//           src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//           alt="img"
//           // className="rounded-lg w-full h-auto object-cover"
//           style={{ aspectRatio: '1/1' }}
//           // loading="lazy"
//           // width="100%"
//           // height="auto"
//         />
//       </div>
//       <div>
//         <div>
//           <div className="w-16 h-16 -mt-14 mb-2 rounded-full border-4 border-white overflow-hidden">
//             <img
//               src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//               alt="img"
//               className="rounded-lg w-full h-auto object-cover"
//               // style={{ aspectRatio: '1/1' }}
//               loading="lazy"
//               width="100%"
//               height="auto"
//             />
//           </div>
//         </div>
//         <div>
//           <h5>Name</h5>
//           <p className="text-center text-gray-700 mb-2">
//             bla bla bla bla bla bla bla
//             <br />
//             bla bla bla bla bla bla bla
//           </p>
//           <p className="text-primary">★ ★ ★ ★ ★</p>
//         </div>
//       </div>
//     </div>
//   );
// }

function TestimonialCard() {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg relative h-auto max-w-sm">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="img"
          className="w-full h-full object-cover rounded-lg"
          style={{ aspectRatio: '1/1' }}
        />
      </div>
      <div className="relative z-10 flex flex-col items-center p-6 mx-auto my-22 bg-white max-w-xs">
        <div className="w-22 h-22 mb-2 rounded-full border-4 border-white overflow-hidden ">
          <img
            src="https://images.unsplash.com/photo-1541274387095-12117e6099dc?q=80&w=1365&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Profile"
            className="rounded-lg w-full h-auto object-cover "
            // loading="lazy"
            // width="100%"
            // height="auto"
          />
        </div>
        <div>
          <h6 className="text-center">Name</h6>
          <p className="text-start my-4">
            bla bla blajtyjty bladfvd;fmbvksnmpogbjmsrtjmhporm bla bla
          </p>
        </div>
        <div className="flex justify-center">
          {/* <p className="text-primary">★ ★ ★ ★ ★</p> */}
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
          <span className="text-primary">★</span>
        </div>
      </div>
    </div>
  );
}
export { TestimonialsSection };
