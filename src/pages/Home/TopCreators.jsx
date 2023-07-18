import cr01 from '../../assets/cr01.svg';
import cr02 from '../../assets/cr02.svg';
import cr03 from '../../assets/cr03.svg';
import cr04 from '../../assets/cr04.svg';
import cr05 from '../../assets/cr05.svg';
import cr06 from '../../assets/cr06.svg';
import rocket from '../../assets/RocketLaunch02.svg';
import Button from '../../components/Button';

const TopCreators = () => {
  return (
    <div className="space-y-10  px-7 py-10 md:px-18">
      <div className="flex items-end justify-between">
        <div className="md:w-1/2">
          <h2 className="mb-2.5 text-3xl font-semibold">Top Creators</h2>
          <p className="text-base font-normal">
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <Button className="hidden h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta md:inline-block">
          <span className="flex items-center justify-center">
            <img src={rocket} className="mr-3 fill-cta " />
            View Rankings
          </span>
        </Button>
      </div>

      <div className="flex w-full flex-wrap gap-5 md:gap-[30px]">
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr01} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">Keepitreal</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                34.53 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              1
            </p>
          </div>
        </div>
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr02} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">DigiLab</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                32.13 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              2
            </p>
          </div>
        </div>
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr03} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">GravityOne</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                29.93 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              3
            </p>
          </div>
        </div>
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr04} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">Juanie</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                25.30 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              4
            </p>
          </div>
        </div>
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr05} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">BlueWhale</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                22.22 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              5
            </p>
          </div>
        </div>
        <div className="relative flex-grow rounded-2xl bg-secondary p-5">
          <div className="flex gap-5">
            <img src={cr06} className="h-14 w-14 rounded-full" alt="" />
            <div className="flex flex-col gap-[5px]">
              <h3 className="text-2xl font-semibold">Mr Fox</h3>
              <p className="tracking-wide">
                <span className="mr-[5px] text-caption">Total Sales:</span>{' '}
                18.22 ETH
              </p>
            </div>
            <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              6
            </p>
          </div>
        </div>
      </div>

      <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta md:hidden">
        <span className="flex items-center justify-center">
          <img src={rocket} className="mr-3 fill-cta " />
          View Rankings
        </span>
      </Button>
    </div>
  );
};

export default TopCreators;
