function AboutUs() {
  return (
    <section className="bg-white shadow-md rounded-lg max-w-6xl mx-auto mb-12 py-8">
      <h4 className="mx-8 mb-8">About us</h4>

      <div className="flex flex-col md:flex-row px-8 relative">
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
