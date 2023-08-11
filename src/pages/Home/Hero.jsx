import { Link } from 'react-router-dom';

import HighlightedNFT from './HeroHighlightedNFT';
import Button from '@components/Button';

const HeroSection = () => {
  return (
    <div className="flex justify-center self-stretch py-10 md:py-20">
      <div className="flex w-xs flex-col items-start gap-x-7 gap-y-10 md:w-2xl md:flex-row md:gap-y-0 lg:w-5xl">
        <div className="flex flex-1 flex-col items-center gap-y-10 md:gap-y-5 lg:gap-y-7">
          <div className="space-y-2.5 md:space-y-5">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="text-base font-normal lg:text-2xl">
              NFT marketplace UI created with Anima for Figma. Collsect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>

          <div className="w-full md:hidden">
            <HighlightedNFT />
          </div>

          <Link to="signup" className="self-stretch md:self-start">
            <Button className="animation flex h-14 w-full items-center justify-center rounded-3xl bg-cta px-12  font-semibold active:translate-y-1">
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="mr-3 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                  />
                </svg>
                Get Started
              </span>
            </Button>
          </Link>

          <div className="flex items-center gap-7 self-stretch">
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                240k+
                <br />{' '}
                <span className="font-work text-base font-normal lg:text-2xl">
                  Total Sale
                </span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                100k+
                <br />{' '}
                <span className="font-work text-base font-normal lg:text-2xl">
                  Auction
                </span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                240k+
                <br />{' '}
                <span className="font-work text-base font-normal lg:text-2xl">
                  Artists
                </span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden w-full flex-1 md:block">
          <HighlightedNFT />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
