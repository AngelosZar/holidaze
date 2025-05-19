import { use, useEffect } from 'react';
import useUserData from '../../hooks/useUserData';
import useProfileStore from '../../stores/profileStore';

function ManageMyAccount() {
  const { userData, error, isLoading } = useUserData();
  console.log(userData);
  const { putProfileMedia, putProfile } = useProfileStore(state => state);

  async function handleSubmitUserChanges(e) {
    //     {
    //   "bio": "string",
    //   "avatar": {
    //     "url": "https://url.com/image.jpg",
    //     "alt": "string"
    //   },
    //   "banner": {
    //     "url": "https://url.com/image.jpg",
    //     "alt": "string"
    //   },
    //   "venueManager": true
    // }
    e.preventDefault();
    const formData = new FormData(e.target);
    const updatedUserData = {
      bio: formData.get('bio'),
      avatar: {
        url: formData.get('avatarUrl') || '',
        ult: formData.get('avatarAlt') || '',
      },
      banner: {
        url: formData.get('bannerUrl') || '',
        alt: formData.get('bannerAlt') || '',
      },
      venueManager: userData?.venueManager,
    };

    console.log('Updated  data:', updatedUserData);
    // try {
    //   const data = await putProfile(userData.userName, updatedUserData);
    //   console.log('Updated data:', data);
    //   console.log('User data updated successfully');
    // } catch (error) {
    //   console.error('Error updating user data:', error);
    // }
    // setUserData(updatedUserData);
  }

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

              <form
                className="flex flex-col gap-4 mt-8 max-w-sm"
                onSubmit={e => handleSubmitUserChanges(e)}
              >
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
                      name="avatarUrl"
                      placeholder="Url must be a valid url link"
                    />
                  </div>
                  <div>
                    <label htmlFor="avatarAlt">Insert avatar alt text</label>
                    <input
                      type="text"
                      className="w-full p-2 border border-gray-300 rounded-md"
                      id="avatarAlt"
                      name="avatarAlt"
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
                      name="bannerUrl"
                      placeholder="Url must be a valid url link"
                    />
                  </div>
                  <div>
                    <label htmlFor="bannerAlt">Insert banner alt text</label>
                    <input
                      type="text"
                      name="bannerAlt"
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
                <div>
                  <label htmlFor="bio">Bio</label>
                  <textarea
                    className="w-full p-2 border border-gray-300 rounded-md"
                    id="bio"
                    rows="4"
                    cols="50"
                    name="bio"
                    placeholder={userData?.bio || 'Start by setting your Bio'}
                    // defaultValue={userData?.bio || 'Start by setting your Bio'}
                  />
                </div>
                <div className="flex flex-col text-start gap-4">
                  {/* <button className="btn-primary">Abort Editing</button> */}
                  <button className="btn-primary">Apply changes</button>
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
