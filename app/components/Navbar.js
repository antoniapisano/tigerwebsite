"use client";
import {useState} from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar">
      <div className={`nav-items ${isOpen && "open"}`}>
        <ul>
          <li>
        <a>Shop</a>
        </li>
        <li>
        <a>Forum</a>
        </li>
        <li>
        <a>Photo Gallery</a>
        </li>
        <li>
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