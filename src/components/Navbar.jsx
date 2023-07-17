import logo from '../assets/Logo.svg';
import burgerMenu from '../assets/BurgerMenu.svg';

const Navbar = () => {
  return (
    <div className="px-7 py-3.5 md:px-12 md:py-[15px]">
      <div className="flex w-full items-center justify-between">
        <img src={logo} className="h-6 w-auto" alt="logo" />

        <img src={burgerMenu} alt="menu button" />
      </div>
    </div>
  );
};

export default Navbar;
