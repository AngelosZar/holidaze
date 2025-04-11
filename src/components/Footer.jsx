import { NavLink } from 'react-router-dom';
function Footer() {
  return (
    <footer className="flex justify-between">
      <div className="flex flex-col">
        <h1>Logo</h1>
        <p>Holidayz 2025 all rights reserved</p>
      </div>
      <div className="flex gap-4">
        <ul className="text-start">
          <li>About us</li>
          <li>Contact us</li>
          <li>Careers</li>
          <li>Investments</li>
          <li>Gift cards</li>
        </ul>
        <ul className="text-start">
          <li>Rent out your house</li>
          <li>Insurance for hosters</li>
          <li>Hosting responsibility</li>
          <li>Info about hosting</li>
          <li>My rights as host</li>
        </ul>
        <ul className="text-start">
          <li>Cancellation policy</li>
          <li>Report a host</li>
          <li>Community forum</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
