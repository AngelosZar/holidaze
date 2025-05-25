const returnUser = function () {
  const userData =
    localStorage.getItem('user') || sessionStorage.getItem('user');
  if (userData) {
    return JSON.parse(userData);
  } else {
    return null;
    // throw new Error('No user found');
  }
};

export default returnUser;
