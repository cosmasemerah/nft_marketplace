import hivatar from '../../assets/hivater.svg';
import Eye from '../../assets/Eye.svg';

import Button from '../../components/Button';
import AuctionTimer from '../../components/AuctionTimer';

const Highlight = () => {
  return (
    <div className="flex justify-center gap-y-10 self-stretch bg-highlight bg-cover px-7 py-10  pb-10 pt-[120px] md:bg-highlight_tablet md:px-[82px] md:pt-[360px] lg:pb-14">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-center md:flex-row md:justify-between">
          <div className="flex flex-col justify-start gap-[30px]">
            <div className="flex w-fit items-center gap-3 rounded-2xl bg-secondary px-5 py-2.5">
              <img src={hivatar} className="rounded-full" alt="artist" />
              <p>Shroomie</p>
            </div>

            <h2 className="text-4xl font-semibold">Magic Mashrooms</h2>

            <div className="md:hidden">
              <AuctionTimer />
            </div>

            <Button className="h-[60px] w-full rounded-3xl bg-white px-12 font-semibold text-primary md:w-fit">
              <span className="flex items-center justify-center">
                <img src={Eye} className="mr-3" />
                See NFT
              </span>
            </Button>
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
