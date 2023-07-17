import logo from '../assets/Logo.svg';
import discord from '../assets/DiscordLogo.svg';
import youtube from '../assets/YoutubeLogo.svg';
import twitter from '../assets/TwitterLogo.svg';
import instagram from '../assets/InstagramLogo.svg';

import SubscribeForm from './SubscribeForm';

const Footer = () => {
  return (
    <div className="space-y-10  divide-y bg-secondary px-7 py-10">
      <div className="flex flex-col space-y-[30px]">
        <div className="space-y-5">
          <img src={logo} alt="logo" />
          <p className="text-mute">
            NFT marketplace UI designed by Anima built by Cosmas.
          </p>
          <div>
            <p className="mb-3.5 text-mute">Join our community</p>
            <div className="flex space-x-2.5">
              <img src={discord} alt="discord" />
              <img src={youtube} alt="youtube" />
              <img src={twitter} alt="twitter" />
              <img src={instagram} alt="instagram" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-start space-y-5">
          <h3 className="text-2xl font-bold">Explore</h3>
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
          <h3 className="text-2xl font-bold">Join Our Weekly Digest</h3>
          <p className="text-mute">
            Get exclusive promotions & updates straight to your inbox.
          </p>

          <SubscribeForm />
        </div>
      </div>
      <p className="pt-5 text-xs text-mute">Ⓒ NFT Market. Cosmas Emerah 2023</p>
    </div>
  );
};

export default Footer;
