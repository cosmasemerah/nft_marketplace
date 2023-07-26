import logo from '../assets/Logo.svg';
import burgerMenu from '../assets/BurgerMenu.svg';
import Button from './Button';

const Navbar = () => {
  return (
    <div className="self-stretch px-7 py-3.5 md:px-12 md:py-4 lg:py-5">
      <div className="flex w-full items-center justify-between">
        <img src={logo} className="h-6 w-auto" alt="logo" />

        <div className="lg:hidden">
          <img src={burgerMenu} alt="menu button" />
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <a href="#" className="px-5 font-semibold">
            Marketplace
          </a>
          <a href="#" className="px-5 font-semibold">
            Rankings
          </a>
          <a href="#" className="px-5 font-semibold">
            Connect Wallet
          </a>

          <Button className="h-14 rounded-3xl bg-cta px-12 font-semibold">
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
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
