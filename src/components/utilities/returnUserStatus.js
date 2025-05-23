function returnUserStatus() {
  const UserStatus = localStorage.getItem('isManager');
  if (UserStatus === 'true') {
    return true;
  } else if (UserStatus === 'false') {
    return false;
  } else {
    return null; // or handle the case when UserStatus is not set
  }
}

export default returnUserStatus;
