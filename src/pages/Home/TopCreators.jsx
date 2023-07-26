import cr01 from '../../assets/cr01.svg';
import cr02 from '../../assets/cr02.svg';
import cr03 from '../../assets/cr03.svg';
import cr04 from '../../assets/cr04.svg';
import cr05 from '../../assets/cr05.svg';
import cr06 from '../../assets/cr06.svg';
import cr07 from '../../assets/cr07.svg';
import cr08 from '../../assets/cr08.svg';
import cr09 from '../../assets/cr09.svg';
import cr10 from '../../assets/cr10.svg';
import cr11 from '../../assets/cr11.svg';
import cr12 from '../../assets/cr12.svg';
import rocket from '../../assets/RocketLaunch02.svg';
import Button from '../../components/Button';

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
          <Button className="hidden h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta md:inline-block">
            <span className="flex items-center justify-center">
              <img src={rocket} className="mr-3 fill-cta " />
              View Rankings
            </span>
          </Button>
        </div>

        <div className="flex w-full flex-wrap gap-5 md:gap-[30px]">
          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr01} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Keepitreal</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 34.53 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                1
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr02} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">DigiLab</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                2
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr03} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">GravityOne</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 29.93 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                3
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr04} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Juanie</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 25.30 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                4
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr05} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">BlueWhale</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 22.22 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                5
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr06} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Mr Fox</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 18.22 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr07} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Shroomie</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 34.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr08} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Robotics</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr09} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Mr Fox</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr10} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Mr Fox</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr11} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Mr Fox</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>

          <div className="relative grow rounded-2xl bg-secondary p-5">
            <div className="flex items-center gap-5 lg:flex-col">
              <img src={cr12} className="h-14 w-14 rounded-full" alt="" />
              <div className="flex flex-col gap-[5px] lg:items-center">
                <h3 className="text-2xl font-semibold">Mr Fox</h3>
                <p className="text-caption">
                  Total Sales:
                  <span className="font-space text-white"> 32.13 ETH</span>
                </p>
              </div>
              <p className="absolute left-[12px] top-[13px] flex h-7 w-7 items-center justify-center rounded-full bg-primary">
                6
              </p>
            </div>
          </div>
        </div>

        <Button className="h-14 w-full rounded-3xl px-12 ring-2 ring-inset ring-cta md:hidden">
          <span className="flex items-center justify-center">
            <img src={rocket} className="mr-3 fill-cta " />
            View Rankings
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TopCreators;
