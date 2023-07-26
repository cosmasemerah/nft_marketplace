import highlight from '../assets/highlightedNFT.png';
import highlightArtist from '../assets/highlightArtist.png';

const HighlightedNFT = () => {
  return (
    <div className="w-full overflow-hidden rounded-xl bg-secondary">
      <img src={highlight} alt="Highlighted NFT" />
      <div className="space-y-2.5 px-5 py-6">
        <h3 className="text-2xl font-semibold">Space Walking</h3>
        <div className="flex items-center">
          <img src={highlightArtist} alt="artist" />
          <p className="ml-3">Animakid</p>
        </div>
      </div>
    </div>
  );
};

export default HighlightedNFT;
