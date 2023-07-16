import hivatar from '../../assets/hivater.svg';
import Eye from '../../assets/Eye.svg';

import Button from '../../components/Button';

const Highlight = () => {
  return (
    <div className="space-y-10 bg-highlight  bg-cover px-7 pb-10 pt-[120px]">
      <div className="flex items-center justify-center">
        <div className="flex flex-col justify-start gap-[30px]">
          <div className="flex w-fit items-center gap-3 rounded-2xl bg-secondary px-5 py-2.5">
            <img src={hivatar} className="rounded-full" alt="artist" />
            <p>Shroomie</p>
          </div>
          <h2 className="text-4xl font-semibold">Magic Mashrooms</h2>
          <div className="flex flex-col justify-center rounded-2xl bg-secondary/50 p-7">
            <p>Auction ends in:</p>
            <div className="flex justify-between font-mono text-4xl font-bold">
              <div className="flex flex-col space-y-[5px]">
                <div>59</div>
                <div className="text-xs font-normal">Hours</div>
              </div>
              <div>:</div>
              <div className="flex flex-col space-y-[5px]">
                <div>59</div>
                <div className="text-xs font-normal">Minutes</div>
              </div>
              <div>:</div>
              <div className="flex flex-col space-y-[5px]">
                <div>59</div>
                <div className="text-xs font-normal">Seconds</div>
              </div>
            </div>
          </div>
          <Button className="h-[60px] w-full rounded-3xl bg-white font-semibold text-primary">
            <span className="flex items-center justify-center">
              <img src={Eye} className="mr-3" />
              See NFT
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
