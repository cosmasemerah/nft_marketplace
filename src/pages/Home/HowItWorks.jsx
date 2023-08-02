import walletIcon from '@assets/wallet_ico.svg';
import collectionIcon from '@assets/collection_ico.svg';
import earningIcon from '@assets/earning_ico.svg';

const HowItWorks = () => {
  return (
    <div className="flex justify-center self-stretch px-7 py-10 md:px-18">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div>
          <h2 className="mb-2.5 text-3xl lg:text-4xl">How It Works</h2>
          <p className="text-base font-normal lg:text-2xl">
            Find out how to get started
          </p>
        </div>

        <div className="flex flex-col gap-y-5 md:flex-row  md:gap-x-7 md:gap-y-0 md:text-center">
          <div className="flex flex-1 items-center gap-x-5 gap-y-5 rounded-3xl bg-secondary p-5 md:flex-col md:gap-x-0 md:pb-7 md:pt-2.5">
            <img
              src={collectionIcon}
              className="h-24 w-24"
              alt="Create Collection"
            />
            <div className="flex flex-col gap-y-2.5">
              <h3 className="text-base font-semibold">Create Collection</h3>
              <p className="text-xs">
                Upload your work and setup your collection. Add a description,
                social links and floor price.
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-x-5 gap-y-5 rounded-3xl bg-secondary p-5 md:flex-col md:gap-x-0 md:pb-7 md:pt-2.5">
            <img src={earningIcon} className="h-24 w-24" alt="Start Earning" />
            <div className="flex flex-col gap-y-2.5">
              <h3 className="text-base font-semibold">Start Earning</h3>
              <p className="text-xs">
                Choose between auctions and fixed-price listings. Start earning
                by selling your NFTs or trading others.
              </p>
            </div>
          </div>

          <div className="flex flex-1 items-center gap-x-5 gap-y-5 rounded-3xl bg-secondary p-5 md:flex-col md:gap-x-0 md:pb-7 md:pt-2.5">
            <img
              src={walletIcon}
              className="h-24 w-24"
              alt="setup your wallet"
            />
            <div className="flex flex-col gap-y-2.5">
              <h3 className="text-base font-semibold">Setup Your Wallet</h3>
              <p className="text-xs">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
