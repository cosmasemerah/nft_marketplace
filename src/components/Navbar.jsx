import logo from '../assets/Logo.svg';
import burgerMenu from '../assets/BurgerMenu.svg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="self-stretch px-7 py-3.5 md:px-12 md:py-4 lg:py-5">
      <div className="flex w-full items-center justify-between">
        <Link to="/">
          <img src={logo} className="h-6 w-auto lg:h-8" alt="logo" />
        </Link>

        <div className="lg:hidden">
          <img src={burgerMenu} alt="menu button" />
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Link to="marketplace" className="animation px-5 font-semibold">
            Marketplace
          </Link>
          <Link to="rankings" className="animation px-5 font-semibold">
            Rankings
          </Link>
          <a href="#" className="animation px-5 font-semibold">
            Connect Wallet
          </a>

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
      </div>
    </div>
  );
};

export default Navbar;
