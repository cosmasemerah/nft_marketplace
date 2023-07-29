import SearchInput from '../../components/SearchInput';

const Marketplace = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex w-full max-w-xs flex-col items-start gap-7 py-10">
        <div className="space-y-2.5">
          <h1 className="text-3xl font-semibold">Browse Marketplace</h1>
          <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        </div>
        <div className="self-stretch">
          <SearchInput />
        </div>
      </div>

      {/* <div className="flex h-14 w-xs gap-5 md:w-2xl lg:w-5xl lg:text-2xl">
        <div className="flex h-full flex-1 items-center justify-center border-b-2">
          Created
          <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
            302
          </span>
        </div>
        <div className="h-full flex-1 items-center justify-center">
          Owned
          <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
            62
          </span>
        </div>
        <div className="h-full flex-1 items-center justify-center">
          Collection
          <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
            18
          </span>
        </div>
      </div> */}

      <div className="flex items-center justify-center self-stretch border border-secondary pt-2.5">
        <div className="flex h-14 w-full max-w-xs items-center gap-2.5">
          <div className="flex h-full flex-1 items-center justify-center border-b-2">
            NFTs
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              302
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Collections
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              30
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
