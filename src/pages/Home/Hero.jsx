import Button from '../../components/Button';
import rocket from '../../assets/RocketLaunch.svg';
import HighlightedNFT from '../../components/HighlightedNFT';

const HeroSection = () => {
  return (
    <div className="flex justify-center self-stretch py-10 md:py-20">
      <div className="flex w-xs flex-col items-start gap-x-7 gap-y-10 md:w-2xl md:flex-row md:gap-y-0 lg:w-5xl">
        <div className="flex flex-1 flex-col items-center gap-y-10 md:gap-y-5 lg:gap-y-7">
          <div className="space-y-2.5 md:space-y-5">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-6xl">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="text-base font-normal lg:text-2xl">
              NFT marketplace UI created with Anima for Figma. Collsect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>

          <div className="w-full md:hidden">
            <HighlightedNFT />
          </div>

          <Button className="h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
            <span className="flex items-center justify-center">
              <img src={rocket} className="mr-3" />
              Get Started
            </span>
          </Button>

          <div className="flex items-center gap-7 self-stretch">
            <div className="flex flex-1 justify-center">
              <h3 className="font-space text-2xl font-bold">
                240k+
                <br />{' '}
                <span className="font-work text-base font-normal">
                  Total Sale
                </span>
              </h3>
            </div>
            <div className="flex flex-1 justify-center">
              <h3 className="font-space text-2xl font-bold">
                100k+
                <br />{' '}
                <span className="font-work text-base font-normal">Auction</span>
              </h3>
            </div>
            <div className="flex flex-1 justify-center">
              <h3 className="font-space text-2xl font-bold">
                240k+
                <br />{' '}
                <span className="font-work text-base font-normal">Artists</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden w-full flex-1 md:block">
          <HighlightedNFT />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
