import logo from '../assets/Logo.svg';
import logo_sm from '../assets/logo_sm.svg';
import burgerMenu from '../assets/BurgerMenu.svg';

const Navbar = () => {
  return (
    <div className="px-7 py-3.5">
      <div className="flex w-full items-center justify-between">
        <img src={logo_sm} alt="logo" />

        <img src={burgerMenu} alt="menu button" />
      </div>
    </div>
  );
};

export default Navbar;
