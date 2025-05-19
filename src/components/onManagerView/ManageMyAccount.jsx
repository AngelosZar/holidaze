import { use, useEffect } from 'react';
import useUserData from '../../hooks/useUserData';

function ManageMyAccount() {
  const {
    setUserData,
    getUser,
    getUserNameFromStorage,
    userData,
    error,
    isLoading,
    setError,
    setIsLoading,
  } = useUserData();
  console.log(userData);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!userData) return <p>No user data available</p>;
  if (userData?.userName) {
    return (
      <section className="my-12 mx-8 max-w-2xl border rounded-xl border-gray-300">
        <div className="px-12 py-12 ">
          {/* <h4>Manage my account</h4> */}
          <h6 className="mb-8">Change my information</h6>
          <div className="flex flex-col md:flex-row justify-evenly items-center mt-8">
            <div className="rounded-full w-32 h-32 border-4 border-white overflow-hidden">
              <img
                src={userData?.avatarUrl}
                alt={userData?.avatarAlt}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mt-8">
              {/* <h6 className="mb-8">Change my information</h6> */}
              <p>
                {userData?.venueManager === true
                  ? 'You have currently a Venue owner account'
                  : ''}
              </p>
              <form action="" className="flex flex-col gap-4 mt-8 max-w-sm">
                {/* <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                    id="name"
                    placeholder={userData?.userName || 'Username'}
                  />
                </div> */}
                <div className="flex flex-col gap-2">
                  <p className="text-xl">User's Avatar</p>
                  <div>
                    <label htmlFor="avatarUrl">Insert avatar url</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      id="avatarUrl"
                      placeholder="Url must be a valid url link"
                    />
                  </div>
                  <div>
                    <label htmlFor="avatarAlt">Insert avatar alt text</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      id="avatarAlt"
                      placeholder="Avatar alt text"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-xl">User's Banner image</p>
                  <div>
                    <label htmlFor="bannerUrl">Insert banner url</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      id="bannerUrl"
                      placeholder="Url must be a valid url link"
                    />
                  </div>
                  <div>
                    <label htmlFor="bannerAlt">Insert banner alt text</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      id="bannerAlt"
                      placeholder="Avatar alt text"
                    />
                  </div>
                </div>
                {/* <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="user@noroff.no"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="email"
                  />
                </div> */}
                {/* <div>
                  <label htmlFor="PhoneNumber">Phone Number</label>
                  <input
                    type="number"
                    name=""
                    id="PhoneNumber"
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Optional"
                  />
                </div> */}
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
}

export default ManageMyAccount;
