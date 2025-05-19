import { use, useEffect, useState } from 'react';
import useUserData from '../../hooks/useUserData';
import useProfileStore from '../../stores/profileStore';

function ManageMyAccount() {
  // const [isUrlValid, setIsUrlValid] = useState(true);
  const [avatarUrlError, setAvatarUrlError] = useState('');
  const [bannerUrlError, setBannerUrlError] = useState('');
  const [error, setError] = useState(false);
  const { userData, isLoading, setIsLoading } = useUserData();
  console.log(userData);
  const { putProfileMedia, putProfile } = useProfileStore(state => state);

  const validateUrl = url => {
    const regex = /^https:\/\/[\w\-\.]+\/.*[\w\-]+$/;
    return regex.test(url);
  };

  async function handleSubmitUserChanges(e) {
    e.preventDefault();
    setAvatarUrlError('');
    setBannerUrlError('');
    //
    const formData = new FormData(e.target);
    const updatedUserData = {
      bio: formData.get('bio'),
      avatar: {
        url: formData.get('avatarUrl') || userData?.bannerUrl,
        alt: formData.get('avatarAlt') || '',
      },
      banner: {
        url: formData.get('bannerUrl') || userData?.bannerUrl,
        alt: formData.get('bannerAlt') || '',
      },
      venueManager: userData?.venueManager,
    };
    let hasErrors = false;
    if (
      updatedUserData.avatar.url &&
      !validateUrl(updatedUserData.avatar.url)
    ) {
      setAvatarUrlError('Please enter a valid HTTPS URL');
      hasErrors = true;
    }

    if (
      updatedUserData.banner.url &&
      !validateUrl(updatedUserData.banner.url)
    ) {
      setBannerUrlError('Please enter a valid HTTPS URL');
      hasErrors = true;
    }

    // Stop submission if there are errors
    if (hasErrors) {
      return;
    }
    //
    // if (!validateUrl(updatedUserData.avatar.url)) setIsUrlValid(false);
    // if (!validateUrl(updatedUserData.banner.url)) setIsUrlValid(false);

    try {
      // const data = await putProfileMedia(userData.userName, updatedUserData);
      const data = await putProfile(userData.userName, updatedUserData);
      console.log('Updated data:', data);
      console.log('User data updated successfully');
      setIsLoading(false);
    } catch (error) {
      console.error('Error updating user data:', error);
    }
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
                      // pattern="https:.*"
                      // title="Please enter a Valid URL starting with https:"
                      // defaultValue={userData?.avatarUrl}
                    />
                    {avatarUrlError && (
                      <p className="mt-1 text-sm text-white bg-red-500 p-2 rounded-md">
                        {avatarUrlError}
                      </p>
                    )}
                    {/* <p>{!isUrlValid ? 'Please enter a valid url' : ''}</p> */}
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
                      // pattern="https:.*"
                      // title="Please enter a Valid URL starting with https:"
                      // defaultValue={userData?.bannerUrl}
                    />
                    {bannerUrlError && (
                      <p className="mt-1 text-sm text-white bg-red-500 p-2 rounded-md">
                        {bannerUrlError}
                      </p>
                    )}
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
