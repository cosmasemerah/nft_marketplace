import logo from '../assets/Logo.svg';
import discord from '../assets/DiscordLogo.svg';
import youtube from '../assets/YoutubeLogo.svg';
import twitter from '../assets/TwitterLogo.svg';
import instagram from '../assets/InstagramLogo.svg';

import SubscribeForm from './SubscribeWidget';
import SubscribeTablet from './SubscribeForm';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="flex justify-center self-stretch bg-secondary px-7 py-10 md:px-18">
      <div className="flex w-xs flex-col gap-10 divide-y md:w-2xl lg:w-5xl">
        <div className="flex max-w-[98%] flex-col justify-between gap-y-7 lg:flex-row lg:gap-x-10 lg:self-center">
          <div className="space-y-5">
            <Link to="/" className="cursor-pointer">
              <img src={logo} alt="logo" />
            </Link>

            <p className="text-mute">
              NFT marketplace UI designed by Anima built by Cosmas.
            </p>
            <div>
              <p className="mb-3.5 text-mute">Join our community</p>
              <div className="flex gap-2.5">
                <img src={discord} alt="discord" className="cursor-pointer" />
                <img src={youtube} alt="youtube" className="cursor-pointer" />
                <img src={twitter} alt="twitter" className="cursor-pointer" />
                <img
                  src={instagram}
                  alt="instagram"
                  className="cursor-pointer"
                />
              </div>
            </div>
          </div>

          <div className="flex shrink-0 flex-col justify-start space-y-5">
            <h3 className="font-space text-2xl font-bold">Explore</h3>
            <a href="#" className="text-mute">
              Marketplace
            </a>
            <a href="#" className="text-mute">
              Rankings
            </a>
            <a href="#" className="text-mute">
              Connect a wallet
            </a>
          </div>

          <div className="flex flex-col justify-start space-y-5">
            <h3 className="font-space text-2xl font-bold">
              Join Our Weekly Digest
            </h3>
            <p className="text-mute">
              Get exclusive promotions & updates straight to your inbox.
            </p>

            <div className="md:hidden">
              <SubscribeForm />
            </div>
            <div className="hidden md:block">
              <SubscribeTablet />
            </div>
          </div>
        </div>
        <p className="pt-5 text-xs text-mute">
          Ⓒ NFT Market. Cosmas Emerah 2023
        </p>
      </div>
    </div>
  );
};

export default Footer;
