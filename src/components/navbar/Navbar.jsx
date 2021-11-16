import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Menu = () => {
  return (
    <>
      <p>
        <a href='#home'>Home</a>
      </p>
      <p>
        <a href='#wgpt3'>What is GPT3?</a>
      </p>
      <p>
        <a href='#possibility'>Open AI</a>
      </p>
      <p>
        <a href='#features'>Case Studies</a>
      </p>
      <p>
        <a href='#blog'>Library</a>
      </p>
    </>
  );
};
// BEM -> Block Element Modifier
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gtp3__navbar-links_logo'>
          <img src={logo} alt='logo' className='' />
        </div>
        <div className='gpt3__navbar-links_container'>
          <Menu />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu ? (
          <RiCloseLine size={27} color='#fff' onClick={() => setToggleMenu(false)} className='gpt3__navbar-menu_icon' />
        ) : (
          <RiMenu3Line size={27} color='#fff' onClick={() => setToggleMenu(true)} className='gpt3__navbar-menu_icon' />
        )}
        {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__navbar-menu_container-links-sign'>
                <p>Sign in</p>
                <button type='button'>Sign up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
