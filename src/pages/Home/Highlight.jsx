import { Link } from 'react-router-dom';

import Button from '@components/Button';
import AuctionTimer from '@components/AuctionTimer';

import db from '@db/highlight.json';
import { highlightImgData as images } from '../../utils/imageData';

const Highlight = () => {
  return (
    <div
      className="flex justify-center gap-y-10 self-stretch bg-cover bg-center px-7 py-10  pb-10 pt-[120px]  md:px-[82px] md:pt-[360px] lg:pb-14"
      style={{
        backgroundImage: `linear-gradient(180deg, rgba(162, 89, 255, 0.00) 0%, #A259FF 100%), url(${images.hiBg})`,
      }}
    >
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-center md:flex-row md:justify-between">
          <div className="flex flex-col justify-start gap-[30px]">
            <div className="flex w-fit items-center gap-3 rounded-2xl bg-secondary px-5 py-2.5">
              <img
                src={images.hiArtist}
                className="h-6 w-6 rounded-full"
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
