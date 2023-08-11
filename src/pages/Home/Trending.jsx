import db from '@db/collections.json';
import { trendingImgData as images } from '../../utils/imageData';
import { Link } from 'react-router-dom';

const TrendingCollections = () => {
  return (
    <div className="flex justify-center self-stretch py-10 lg:py-20">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div>
          <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
            Trending Collection
          </h2>
          <p className="text-base font-normal lg:text-2xl">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div className="flex justify-start gap-x-7">
          {db.map((item, index) => (
            <div
              key={item.id}
              className={`flex flex-col justify-start ${
                index === 1
                  ? 'hidden md:flex'
                  : index === 2
                  ? 'hidden lg:flex'
                  : ''
              }`}
            >
              <Link to="nft" className="animation cursor-pointer">
                <img
                  src={images[`tre${item.id}0`]}
                  alt=""
                  className="mb-[15px] rounded-xl"
                />
              </Link>

              <div className="mb-[15px] flex items-center justify-between">
                <Link to="nft" className="animation cursor-pointer">
                  <img
                    src={images[`tre${item.id}1`]}
                    className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                    alt=""
                  />
                </Link>
                <Link to="nft" className="animation cursor-pointer">
                  <img
                    src={images[`tre${item.id}2`]}
                    className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                    alt=""
                  />
                </Link>
                <Link to="nft" className="animation cursor-pointer">
                  <h4 className="flex h-[95px] w-[95px] justify-center rounded-xl bg-cta px-[15px] py-8 md:h-[100px] md:w-[100px]">
                    {item.total}+
                  </h4>
                </Link>
              </div>
              <div>
                <h3 className="text-2xl font-semibold">{item.name}</h3>
                <div className="flex items-center justify-start gap-1">
                  <img
                    src={images[`tre${item.id}3`]}
                    alt=""
                    className="h-6 w-6 rounded-full"
                  />
                  <p>{item.artist}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingCollections;
