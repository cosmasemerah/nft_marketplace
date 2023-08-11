import { Link } from 'react-router-dom';
import Button from '@components/Button';

import db from '@db/creators.json';
import { top12Creators as images } from '../../utils/imageData';

const top12CreatorsData = db.slice(0, 12);

const TopCreators = () => {
  return (
    <div className="flex justify-center self-stretch px-7 py-10 md:px-18 lg:py-20">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-between">
          <div className="md:w-1/2">
            <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
              Top Creators
            </h2>
            <p className="text-base font-normal lg:text-2xl">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <Link
            to="/rankings"
            className="animation hidden active:translate-y-1 md:inline-block"
          >
            <Button className="h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta">
              <span className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-3 h-5 w-5 fill-cta"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                View Rankings
              </span>
            </Button>
          </Link>
        </div>

        <div className="flex w-full flex-wrap gap-5 md:gap-7">
          {top12CreatorsData.map((item) => (
            <Link to="artist" className="grow cursor-pointer " key={item.id}>
              <div className="animation relative rounded-2xl bg-secondary p-5">
                <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                  {item.id}
                </p>
                <div className="flex items-center gap-5 lg:flex-col">
                  <img
                    src={images[`cr${item.id}`]}
                    className="h-14 w-14 rounded-full lg:h-[7.5rem] lg:w-[7.5rem]"
                    alt=""
                  />
                  <div className="flex flex-col gap-[5px] lg:items-center">
                    <h3 className="text-2xl font-semibold">{item.name}</h3>
                    <p className="text-caption">
                      Total Sales:{' '}
                      <span className="font-space text-white">
                        {item.volume} ETH
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <Link
          to="/rankings"
          className="animation active:translate-y-1 md:hidden"
        >
          <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="mr-3 h-5 w-5 fill-cta"
              >
                <path
                  fillRule="evenodd"
                  d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z"
                  clipRule="evenodd"
                />
              </svg>
              View Rankings
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopCreators;
