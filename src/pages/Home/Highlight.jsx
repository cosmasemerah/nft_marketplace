import hivatar from '../../assets/hivater.svg';
import Eye from '../../assets/Eye.svg';

import Button from '../../components/Button';
import AuctionTimer from '../../components/AuctionTimer';

const Highlight = () => {
  return (
    <div className="space-y-10 bg-highlight  bg-cover px-7 pb-10 pt-[120px] md:px-[82px] md:pt-[360px]">
      <div className="flex items-center justify-center md:flex-row">
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
  );
};

export default Highlight;
