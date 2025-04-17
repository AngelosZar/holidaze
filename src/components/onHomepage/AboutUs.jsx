// function AboutUs() {
//   return (
//     <section className=" px-4 pt-4 mb-12 w-full flex flex-col justify-center items-center  bg-amber-100 shadow-md rounded-lg contain-content">
//       <h5 className="self-start">About us</h5>
//       <div
//         className="px-4 max-w-7xl relative w-full bg-amber-50 pt-20 mb-20 "
//         style={{
//           minHeight: '400px',
//         }}
//       >
//         <div
//           className="absolute top-0 left-0,
//         max-w-[45%]"
//         >
//           <img
//             src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="img"
//             className="rounded-lg w-full max-h-[400px] object-cover"
//             style={{ aspectRatio: '1/1' }}
//             loading="lazy"
//             width="100%"
//             height="auto"
//           />
//         </div>
//         <p className="absolute top-10 right-6 max-w-[30%] bg-white/90 shadow-md rounded-lg p-4 z-30">
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
//           eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
//           minim veniam, quis nostrud exercitation ullamco laboris nisi ut
//           aliquip ex ea{' '}
//         </p>
//         <div className="absolute bottom-0 right-0 max-w-[45%]">
//           <img
//             src="https://images.unsplash.com/photo-1735615479490-237b941e996a?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//             alt="img"
//             className="rounded-lg w-full h-auto object-cover z-10"
//             style={{ aspectRatio: '16/9' }}
//             loading="lazy"
//             width="100%"
//             height="auto"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }
function AboutUs() {
  return (
    <section className="bg-white shadow-md rounded-lg max-w-6xl mx-auto mb-12">
      <h4 className="mx-8 mb-8">About us</h4>

      <div className="flex flex-col md:flex-row px-8 relative">
        {/* <div className="bg-white rounded-lg md:flex md:w-4/5 z-10 px-8 md:relative">
          <p className="text-sm md:text-md pb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea.
          </p>
        </div> */}
        {/* create custom screen size after ca 850 to 900 */}
        <div className="bg-white p-6 md:p-8 md:shadow-md md:absolute md:right-40 md:top-10 md:w-2/5 z-20">
          <h6 className="pb-2">Not just a stay</h6>
          <p className="text-sm text-gray-700">
            At Holidayz, we believe in creating experiences that transcend
            ordinary accommodations. Founded in 2025, we connect travelers with
            unique homes and local hosts worldwide, fostering authentic
            connections and unforgettable memories. Every booking is an
            invitation to live like a local, wherever you go.
          </p>
        </div>
        <div className="w-full md:3/5 relative max-w-4/5">
          <img
            src="https://images.unsplash.com/photo-1744361448609-c5d3417f00ce?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover rounded-lg shadow-md"
            style={{ aspectRatio: '16/9' }}
          />
        </div>

        <div className="w-full md:w-4/5 ml-auto mt-4 md:mt-28 bottom-10 right-12 max-w-3/5 z-10 relative">
          <img
            src="https://images.unsplash.com/photo-1744567066798-e50a9a043f07?q=80&w=1325&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
