import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 shadow-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ✉️ SmartMailer
        </Link>

        <div className="flex space-x-6">
          <NavLink to="/" label="Home" pathname={pathname} />
          <NavLink to="/create" label="Create Campaign" pathname={pathname} />
          <NavLink to="/campaigns" label="All Campaigns" pathname={pathname} />
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, label, pathname }) => (
  <Link
    to={to}
    className={`text-sm font-medium transition duration-200 ${
      pathname === to
        ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
        : 'text-gray-700 hover:text-blue-500'
    }`}
  >
    {label}
  </Link>
);

export default Navbar;
