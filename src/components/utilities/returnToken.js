const returnToken = () => {
  const accessToken =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  if (accessToken) {
    console.log('accessToken', accessToken);
    return accessToken;
  } else {
    throw new Error('No access token found');
  }
};
export default returnToken;
