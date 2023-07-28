import nftBg from '../../assets/nftBg.svg';
import AuctionTimer from '../../components/AuctionTimer';
import Button from '../../components/Button';

const NftPage = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex flex-col items-center self-stretch">
        <img
          src={nftBg}
          className="h-[320px] w-full min-w-sm object-cover object-center mix-blend-soft-light md:h-[420px] md:min-w-md lg:h-[560px] lg:min-w-lg"
          alt=""
        />
      </div>

      <div className="flex flex-col items-center self-stretch py-10">
        <div className="flex w-xs flex-col gap-5">
          <div className="space-y-2.5">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              The Orbitians
            </h1>
            <p className="lg:text-2xl">Minted on Sep 30, 2022</p>
          </div>

          <div className="self-stretch">
            <AuctionTimer>
              <Button className="h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
                Place Bid
              </Button>
            </AuctionTimer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NftPage;
