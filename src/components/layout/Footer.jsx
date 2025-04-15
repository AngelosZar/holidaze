import { NavLink } from 'react-router-dom';
import logo1 from '../../assets/logos/logo1.svg';

function Footer() {
  return (
    <footer className="flex justify-between flex-wrap bg-richBlack text-white px-8 py-12  mx-auto">
      <div className="flex flex-col  gap-4 pb-12">
        <img src={logo1} alt="logo" />
        <p>Holidayz © 2025 all rights reserved</p>
      </div>
      <div className="flex gap-4 justify-center self-end">
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
