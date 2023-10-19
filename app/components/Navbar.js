"use client";
import {useState} from 'react';
import { dm } from '../fonts.js'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul>
          <li className={dm.className}>
        <a>Shop</a>
        </li>
        <li className={dm.className}>
        <a>Forum</a>
        </li>
        <li className={dm.className}>
        <a>Photo Gallery</a>
        </li>
        <li className={dm.className}>
        <a>Youtube Gallery</a>
        </li>
        </ul>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;