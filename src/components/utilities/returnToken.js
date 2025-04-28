const returnToken = () => {
  const accessToken =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  if (!accessToken) {
    return;
  }
  if (accessToken) {
    console.log('accessToken', accessToken);
    return accessToken;
  }
};
export default returnToken;
