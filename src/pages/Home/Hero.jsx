import highlight from '../../assets/highlightedNFT.png';
import highlightArtist from '../../assets/highlightArtist.png';
import Button from '../../components/Button';
import rocket from '../../assets/RocketLaunch.svg';

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-10">
      <div>
        <h1 className="mb-2.5 text-3xl">Discover Digital Art & Collect NFTs</h1>
        <p className="text-base font-normal">
          NFT marketplace UI created with Anima for Figma. Collsect, buy and
          sell art from more than 20k NFT artists.
        </p>
      </div>

      <div className="w-full overflow-hidden rounded-lg bg-secondary">
        <img src={highlight} className="h-52 w-full" alt="Highlighted NFT" />
        <div className="space-y-2.5 p-5">
          <h3 className="text-2xl font-semibold">Space Walking</h3>
          <div className="flex items-center">
            <img src={highlightArtist} alt="artist" />
            <p className="ml-3">Animakid</p>
          </div>
        </div>
      </div>

      <Button className="h-[60px] w-full rounded-3xl bg-cta">
        <span className="flex items-center justify-center">
          <img src={rocket} className="mr-3" />
          Get Started
        </span>
      </Button>

      <div className="flex w-full items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            240k+
            <br /> <span className="text-base font-normal">Total Sale</span>
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            100k+
            <br /> <span className="text-base font-normal">Auction</span>
          </h2>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            240k+
            <br /> <span className="text-base font-normal">Artists</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
