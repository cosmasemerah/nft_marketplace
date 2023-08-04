import { Link } from 'react-router-dom';

import Eye from '@assets/Eye.svg';
import Button from '@components/Button';

import { topDiscoverNftImgData as images } from '../../utils/imageData';
import db from '@db/discover.json';

const topDiscoverData = db.slice(0, 3);

const Discover = () => {
  return (
    <div className="flex justify-center gap-y-10 self-stretch px-7 py-10 md:px-18 lg:py-20 lg:pb-20">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-between">
          <div className="md:w-1/2">
            <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
              Discover More NFTs
            </h2>
            <p className="text-base font-normal lg:text-2xl">
              Explore new trending NFTs
            </p>
          </div>

          <Link
            to="marketplace"
            className="animation hidden active:translate-y-1 md:inline-block"
          >
            <Button className="h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta">
              <span className="flex items-center justify-center">
                <img src={Eye} className="mr-3 fill-cta " />
                See All
              </span>
            </Button>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {topDiscoverData.map((item, index) => (
            <Link
              to="nft"
              className={`animation cursor-pointer ${
                index === 2 ? 'md:hidden lg:flex' : ''
              }`}
              key={item.id}
            >
              <div className="flex flex-col justify-center rounded-2xl bg-secondary">
                <img
                  src={images[`dis${item.id}`]}
                  className="h-auto max-w-full rounded-t-2xl"
                  alt=""
                />
                <div className="p-5 pb-[25px]">
                  <h3 className="mb-[5px] text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <div className="mb-[25px] flex items-center">
                    <img
                      src={images[`disA${item.id}`]}
                      className="rounded-full"
                      alt="artist"
                    />
                    <p className="ml-3">{item.artist}</p>
                  </div>
                  <div className="flex justify-between font-space">
                    <p>
                      <span className="text-caption">Price</span> <br />{' '}
                      {item.price} ETH
                    </p>
                    <p>
                      <span className="text-caption">Highest Bid</span> <br />{' '}
                      {item.highestBid} wETH
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="marketplace"
          className="animation active:translate-y-1 md:hidden"
        >
          <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta">
            <span className="flex items-center justify-center">
              <img src={Eye} className="mr-3 fill-cta " />
              See All
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
