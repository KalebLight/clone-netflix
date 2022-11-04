import React, { useState, useEffect } from 'react';
import './Navbar.css';
function Navbar() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 100);
    });
  }, []);
  return (
    <>
      <div className={`nav-container ${show && 'nav-container-black'}`}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="nav-logo"
        ></img>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPsVAeFlYeYOEUzb3TV1ML91_LPkkFML5lRQcMdr9nQu2CqO-WzT-RLmkM5_cOKvkaBkI&usqp=CAU"
          alt="Kaleb"
          className="nav-avatar"
        />
      </div>
    </>
  );
}
export default Navbar;
