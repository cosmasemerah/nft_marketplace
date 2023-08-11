import { Link } from 'react-router-dom';

import Button from '@components/Button';
import NftCard from '@components/NftCard';

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="mr-3 h-6 w-6 fill-cta"
                >
                  <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                  <path
                    fillRule="evenodd"
                    d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
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
              <NftCard
                name={item.name}
                nftImg={images[`dis${item.id}`]}
                artistImg={images[`disA${item.id}`]}
                artistName={item.artist}
                price={item.price}
                highestBid={item.highestBid}
                bgColor={'bg-secondary'}
              />
            </Link>
          ))}
        </div>

        <Link
          to="marketplace"
          className="animation active:translate-y-1 md:hidden"
        >
          <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="mr-3 h-6 w-6 fill-cta"
              >
                <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                <path
                  fillRule="evenodd"
                  d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z"
                  clipRule="evenodd"
                />
              </svg>
              See All
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Discover;
