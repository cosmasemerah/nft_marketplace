import SearchInput from '@components/SearchInput';
import dis01 from '@assets/dis1.svg';
import disA01 from '@assets/disA1.svg';
import dis02 from '@assets/dis2.svg';
import disA02 from '@assets/disA2.svg';
import dis03 from '@assets/dis3.svg';
import disA03 from '@assets/disA3.svg';

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
          <div className="flex flex-col justify-center rounded-2xl">
            <img
              src={dis01}
              className="h-auto max-w-full rounded-t-2xl"
              alt=""
            />
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">
                Distant Galaxy
              </h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA01} className="rounded-full" alt="artist" />
                <p className="ml-3">MoonDancer</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-secondary">
            <img
              src={dis02}
              className="h-auto max-w-full rounded-t-2xl"
              alt=""
            />
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">Life On Edena</h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA02} className="rounded-full" alt="artist" />
                <p className="ml-3">Nebulakid</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-secondary md:hidden  lg:flex">
            <img src={dis03} className="rounded-t-2xl" alt="" />
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">AstroFiction</h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA03} className="rounded-full" alt="artist" />
                <p className="ml-3">Spaceone</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
