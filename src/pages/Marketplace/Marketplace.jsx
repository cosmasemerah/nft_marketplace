import SearchInput from '@components/SearchInput';
import { Link } from 'react-router-dom';

import db from '@db/marketplace.json';
import { marketImgData as images } from '../../utils/imageData';
import NftCard from '@components/NftCard';

const Marketplace = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex w-full max-w-xs flex-col items-start gap-7 py-10 md:max-w-2xl md:py-14 lg:max-w-5xl lg:py-20">
        <div className="space-y-2.5">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Browse Marketplace
          </h1>
          <p className="lg:text-2xl">
            Browse through more than 50k NFTs on the NFT Marketplace.
          </p>
        </div>
        <div className="self-stretch">
          <SearchInput />
        </div>
      </div>

      <div className="flex items-center justify-center self-stretch border border-secondary pt-2.5">
        <div className="flex h-14 w-full max-w-xs items-center gap-2.5 md:max-w-2xl lg:max-w-5xl">
          <div className="flex h-full flex-1 items-center justify-center border-b-2">
            NFTs
            <span className="ml-4 hidden rounded-3xl bg-caption px-4 py-2 font-space text-base md:flex">
              302
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Collections
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              30
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center self-stretch border-b-4 border-primary bg-secondary py-10 md:py-14">
        <div className="flex w-xs flex-wrap items-center justify-center gap-5 md:w-2xl lg:w-5xl">
          {db.map((item, index) => (
            <Link
              to="/nft"
              className={`animation flex cursor-pointer ${
                index >= 4 && index <= 7 ? 'hidden md:flex' : ''
              } ${index >= 8 ? 'hidden lg:flex' : ''}`}
              key={item.id}
            >
              <NftCard
                name={item.name}
                nftImg={images[`ma${item.id}`]}
                artistImg={images[`maA${item.id}`]}
                artistName={item.artist}
                price={item.price}
                highestBid={item.highestBid}
                bgColor={'bg-primary'}
              />
              {/* <div className="flex flex-col justify-center rounded-2xl">
                <img
                  src={images[`ma${item.id}`]}
                  className="h-auto max-w-full rounded-t-2xl"
                  alt=""
                />
                <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
                  <h3 className="mb-[5px] text-2xl font-semibold">
                    {item.name}
                  </h3>
                  <div className="mb-[25px] flex items-center">
                    <img
                      src={images[`maA${item.id}`]}
                      className="rounded-full"
                      alt="artist"
                    />
                    <p className="ml-3">{item.artist}</p>
                  </div>
                  <div className="flex justify-between font-space">
                    <p>
                      <span className="text-caption">Price</span> <br />{' '}
                      {item.id}
                      ETH
                    </p>
                    <p>
                      <span className="text-caption">Highest Bid</span> <br />{' '}
                      {item.highestBid} wETH
                    </p>
                  </div>
                </div>
              </div> */}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
