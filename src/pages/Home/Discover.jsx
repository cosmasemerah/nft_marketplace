import Eye from '../../assets/Eye.svg';
import dis01 from '../../assets/dis01.svg';
import disA01 from '../../assets/disA01.svg';
import dis02 from '../../assets/dis02.svg';
import disA02 from '../../assets/disA02.svg';
import dis03 from '../../assets/dis03.svg';
import disA03 from '../../assets/disA03.svg';
import Button from '../../components/Button';

const Discover = () => {
  return (
    <div className="md:  space-y-10 px-7 pb-14 pt-10 md:px-18 md:pb-20">
      <div className="flex items-end justify-between">
        <div className="md:w-1/2">
          <h2 className="mb-2.5 text-3xl font-semibold">Discover More NFTs</h2>
          <p className="text-base font-normal">Explore new trending NFTs</p>
        </div>

        <Button className="h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta md:inline-block">
          <span className="flex items-center justify-center">
            <img src={Eye} className="mr-3 fill-cta " />
            See All
          </span>
        </Button>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        <div className="flex flex-col justify-center rounded-2xl bg-secondary">
          <img src={dis01} className="rounded-t-2xl" alt="" />
          <div className="p-5 pb-[25px]">
            <h3 className="mb-[5px] text-2xl font-semibold">Distant Galaxy</h3>
            <div className="mb-[25px] flex items-center">
              <img src={disA01} className="rounded-full" alt="artist" />
              <p className="ml-3">MoonDancer</p>
            </div>
            <div className="flex justify-between">
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
          <img src={dis02} className="rounded-t-2xl" alt="" />
          <div className="p-5 pb-[25px]">
            <h3 className="mb-[5px] text-2xl font-semibold">Life On Edena</h3>
            <div className="mb-[25px] flex items-center">
              <img src={disA02} className="rounded-full" alt="artist" />
              <p className="ml-3">Nebulakid</p>
            </div>
            <div className="flex justify-between">
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

        <div className="flex flex-col justify-center rounded-2xl bg-secondary md:hidden">
          <img src={dis03} className="rounded-t-2xl" alt="" />
          <div className="p-5 pb-[25px]">
            <h3 className="mb-[5px] text-2xl font-semibold">AstroFiction</h3>
            <div className="mb-[25px] flex items-center">
              <img src={disA03} className="rounded-full" alt="artist" />
              <p className="ml-3">Spaceone</p>
            </div>
            <div className="flex justify-between">
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

      <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta md:hidden">
        <span className="flex items-center justify-center">
          <img src={Eye} className="mr-3 fill-cta " />
          See All
        </span>
      </Button>
    </div>
  );
};

export default Discover;
