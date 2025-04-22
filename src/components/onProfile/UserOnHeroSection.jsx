export function UserOnHeroSection() {
  return (
    <section className="w-full mt-[90px] mb-64">
      <div className="relative w-full h-48">
        <img
          src="https://images.unsplash.com/photo-1744708334926-9d27b0c8ca9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute -bottom-16 left-12">
          <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1744708334926-9d27b0c8ca9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="mt-22 px-12 sm:mt-12 flex justify-between ">
          <div></div>
          <div className="mr-4 ">
            <h6 className="text-xl font-medium">Angelos .Zr</h6>
            <p className="">Manager</p>
            <button className="text-sm mt-1">Manage my account</button>
          </div>
        </div>
      </div>
    </section>
  );
}
