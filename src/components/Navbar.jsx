import { useEffect, useRef, useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

import logo from '../assets/Logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbar = useRef(null);
  const closeMenuButton = useRef(null);

  // Close the navbar if outside of the navbar is clicked
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!navbar.current || !closeMenuButton.current) return;
      if (
        !isOpen ||
        navbar.current.contains(target) ||
        closeMenuButton.current.contains(target)
      )
        return;
      setIsOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => {
      document.removeEventListener('click', clickHandler);
    };
  });

  //CLose the navbar is escape button is clicked
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!navbar || keyCode !== 27) return;
      setIsOpen(false);
    };
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [isOpen]);

  return (
    <div
      className="relative z-50 self-stretch px-7 py-3.5 md:px-12 md:py-4 lg:py-5"
      ref={navbar}
    >
      <nav className="flex w-full items-center justify-between">
        <Link to="/">
          <img src={logo} className="h-6 w-auto lg:h-8" alt="logo" />
        </Link>

        {/* Desktop Navlinks */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <Link to="marketplace" className="animation px-5 font-semibold">
            Marketplace
          </Link>
          <Link to="rankings" className="animation px-5 font-semibold">
            Rankings
          </Link>
          <Link to="connectwallet" className="animation px-5 font-semibold">
            Connect Wallet
          </Link>

          <Link
            to="signup"
            className="animation flex h-14 justify-center rounded-3xl bg-cta px-12 font-semibold active:translate-y-1"
          >
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="mr-2 h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              Sign Up
            </span>
          </Link>
        </div>

        {/* Mobile Navlinks */}
        <div className="lg:hidden">
          {isOpen ? (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6 cursor-pointer"
              ref={closeMenuButton}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setIsOpen(!isOpen)}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 12C3 11.5858 3.33579 11.25 3.75 11.25H20.25C20.6642 11.25 21 11.5858 21 12C21 12.4142 20.6642 12.75 20.25 12.75H3.75C3.33579 12.75 3 12.4142 3 12Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 6C3 5.58579 3.33579 5.25 3.75 5.25H15C15.4142 5.25 15.75 5.58579 15.75 6C15.75 6.41421 15.4142 6.75 15 6.75H3.75C3.33579 6.75 3 6.41421 3 6Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 18C3 17.5858 3.33579 17.25 3.75 17.25H15C15.4142 17.25 15.75 17.5858 15.75 18C15.75 18.4142 15.4142 18.75 15 18.75H3.75C3.33579 18.75 3 18.4142 3 18Z"
                fill="white"
              />
            </svg>
          )}
        </div>

        <div className="absolute left-0 top-full w-full lg:hidden">
          <Transition
            show={isOpen}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 scale-50"
            enterTo="opacity-100 scale-100"
            leave="transform transition duration-200 ease-in-out"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className=" flex flex-col items-start gap-6 bg-primary p-6">
              <Link to="marketplace" className="animation px-5 font-semibold">
                Marketplace
              </Link>
              <Link to="rankings" className="animation px-5 font-semibold">
                Rankings
              </Link>
              <Link to="connectwallet" className="animation px-5 font-semibold">
                Connect Wallet
              </Link>

              <Link
                to="signup"
                className="animation flex h-14 justify-center self-stretch rounded-3xl bg-cta px-12 font-semibold active:translate-y-1"
              >
                <span className="flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="mr-2 h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>
                  Sign Up
                </span>
              </Link>
            </div>
          </Transition>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
