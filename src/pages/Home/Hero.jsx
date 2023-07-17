import Button from '../../components/Button';
import rocket from '../../assets/RocketLaunch.svg';
import HighlightedNFT from '../../components/HighlightedNFT';

const HeroSection = () => {
  return (
    <div className="px-7 py-10 md:px-18 md:py-20">
      <div className="flex flex-col  items-start space-x-[30px] space-y-10 md:flex-row md:space-y-0">
        <div className="flex flex-1 flex-col items-start justify-center space-y-10">
          <div>
            <h1 className="mb-2.5 text-3xl font-semibold md:text-4xl             ">
              Discover Digital Art & Collect NFTs
            </h1>
            <p className="text-base font-normal">
              NFT marketplace UI created with Anima for Figma. Collsect, buy and
              sell art from more than 20k NFT artists.
            </p>
          </div>

          <div className="h-full w-full md:hidden">
            <HighlightedNFT />
          </div>

          <Button className="h-[60px] w-full rounded-3xl bg-cta px-[50px] md:w-fit">
            <span className="flex items-center justify-center">
              <img src={rocket} className="mr-3" />
              Get Started
            </span>
          </Button>

          <div className="flex w-full items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">
                240k+
                <br /> <span className="text-base font-normal">Total Sale</span>
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                100k+
                <br /> <span className="text-base font-normal">Auction</span>
              </h3>
            </div>
            <div>
              <h3 className="text-2xl font-bold">
                240k+
                <br /> <span className="text-base font-normal">Artists</span>
              </h3>
            </div>
          </div>
        </div>
        <div className="hidden h-full w-full flex-1 md:block">
          <HighlightedNFT />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
