const returnToken = () => {
  const accessToken =
    localStorage.getItem('accessToken') ||
    sessionStorage.getItem('accessToken');
  if (!accessToken) {
    return;
  }
  if (accessToken) {
    return accessToken;
  }
};
export default returnToken;
