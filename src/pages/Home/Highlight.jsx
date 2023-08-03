import Eye from '@assets/Eye.svg';

import Button from '@components/Button';
import AuctionTimer from '@components/AuctionTimer';

import db from '@db/highlight.json';
import { highlightImgData as images } from '../../utils/imageData';
import { Link } from 'react-router-dom';

const Highlight = () => {
  return (
    <div
      className="flex justify-center gap-y-10 self-stretch bg-cover bg-center px-7 py-10  pb-10 pt-[120px]  md:px-[82px] md:pt-[360px] lg:pb-14"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%), url(${images.hiBg.default})`,
      }}
    >
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-center md:flex-row md:justify-between">
          <div className="flex flex-col justify-start gap-[30px]">
            <div className="flex w-fit items-center gap-3 rounded-2xl bg-secondary px-5 py-2.5">
              <img
                src={images.hiArtist}
                className="rounded-full"
                alt="artist"
              />
              <p>{db[0].artist}</p>
            </div>

            <h2 className="text-4xl font-semibold">{db[0].name}</h2>

            <div className="md:hidden">
              <AuctionTimer />
            </div>

            <Link
              to="nft"
              className="animation cursor-pointer active:translate-y-1"
            >
              <Button className="h-[60px] w-full rounded-3xl bg-white px-12 font-semibold text-primary md:w-fit">
                <span className="flex items-center justify-center">
                  <img src={Eye} className="mr-3" />
                  See NFT
                </span>
              </Button>
            </Link>
          </div>
          <div className="hidden md:block">
            <AuctionTimer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
