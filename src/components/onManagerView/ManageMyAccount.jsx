function ManageMyAccount() {
  return (
    <section className="my-12 mx-8 max-w-2xl border rounded-xl border-gray-300">
      <div className="px-12 py-12 ">
        <h4>Manage my account</h4>
        <div className="flex flex-col md:flex-row justify-evenly items-center mt-8">
          <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1744708334926-9d27b0c8ca9e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          <div className="mt-8">
            <h6 className="mb-8">Change my information</h6>
            <form action="" className="flex flex-col gap-4 mt-8 max-w-sm">
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  required
                  id="name"
                />
              </div>
              <div>
                <label htmlFor="avatarUrl">Insert avatar url</label>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="avatarUrl"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="user@noroff.no"
                  required
                  className="w-full p-2 border border-gray-300 rounded-md"
                  id="email"
                />
              </div>
              <div>
                <label htmlFor="PhoneNumber">Phone Number</label>
                <input
                  type="number"
                  name=""
                  id="PhoneNumber"
                  className="w-full p-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex flex-col text-start gap-4">
                <button className="btn-primary">Abort Editing</button>
                <button className="btn-secondary">Apply changes</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManageMyAccount;
