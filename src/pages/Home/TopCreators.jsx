import { Link } from 'react-router-dom';
import rocket from '@assets/RocketLaunch02.svg';
import Button from '@components/Button';

import db from '@db/creators.json';
import { top10Creators as images } from '../../utils/imageData';

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
                <img src={rocket} className="mr-3 fill-cta " />
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
              <img src={rocket} className="mr-3 fill-cta " />
              View Rankings
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TopCreators;
