import nftBg from '../../assets/nftBg.svg';
import hivatar from '../../assets/cr09.svg';
import globe from '../../assets/Globe.svg';
import AuctionTimer from '../../components/AuctionTimer';
import dis01 from '../../assets/dis01.svg';
import disA01 from '../../assets/disA01.svg';
import dis02 from '../../assets/dis02.svg';
import disA02 from '../../assets/disA02.svg';
import dis03 from '../../assets/dis03.svg';
import disA03 from '../../assets/disA03.svg';
import Button from '../../components/Button';
const NftPage1 = () => {
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
        <div className="w-xs gap-7 md:flex md:w-2xl md:gap-7 lg:w-5xl lg:gap-36">
          <div className="flex flex-col items-center self-stretch">
            <div className="flex flex-col gap-7">
              <div className="space-y-2.5">
                <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
                  The Orbitians
                </h1>
                <p className="lg:text-2xl">Minted on Sep 30, 2022</p>
              </div>

              <div className="self-stretch md:hidden">
                <AuctionTimer>
                  <Button className="h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
                    Place Bid
                  </Button>
                </AuctionTimer>
              </div>

              <div className="flex flex-col items-start gap-2.5 capitalize leading-8 lg:text-2xl">
                <h3 className="font-space text-caption">Created By</h3>
                <div className="flex items-center gap-3">
                  <img
                    src={hivatar}
                    className="h-6 w-6 rounded-full"
                    alt="artist"
                  />
                  <p>Dish Studio</p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 leading-8 lg:text-2xl">
                <h3 className="font-space text-caption">Description</h3>
                <div className="space-y-5">
                  <p>
                    The Orbitians is a collection of 10,000 unique NFTs on the
                    Ethereum blockchain,
                  </p>
                  <p>
                    There are all sorts of beings in the NFT Universe. The most
                    advanced and friendly of the bunch are Orbitians.
                  </p>
                  <p>
                    They live in a metal space machines, high up in the sky and
                    only have one foot on Earth. These Orbitians are a peaceful
                    race, but they have been at war with a group of invaders for
                    many generations. The invaders are called Upside-Downs,
                    because of their inverted bodies that live on the ground,
                    yet do not know any other way to be. Upside-Downs believe
                    that they will be able to win this war if they could only
                    get an eye into Orbitian territory, so they&rsquo;ve taken
                    to make human beings their target.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 capitalize leading-8 lg:text-2xl">
                <h3 className="font-space text-caption">Details</h3>
                <div className="flex flex-col">
                  <div className="flex items-center gap-3">
                    <img
                      src={globe}
                      className="h-6 w-6 rounded-full"
                      alt="artist"
                    />
                    <p>View on Etherscan</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={globe}
                      className="h-6 w-6 rounded-full"
                      alt="artist"
                    />
                    <p>View on Etherscan</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 leading-8">
                <h3 className="font-space text-caption">Tags</h3>
                <div className="flex flex-wrap items-center gap-3 uppercase">
                  <p className="rounded-3xl bg-secondary px-7 py-3">
                    Animation
                  </p>
                  <p className="rounded-3xl bg-secondary px-7 py-3">Mars</p>
                  <p className="rounded-3xl bg-secondary px-7 py-3">
                    Ilustration
                  </p>
                  <p className="rounded-3xl bg-secondary px-7 py-3">Moon</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden flex-none md:block">
            <AuctionTimer>
              <Button className="h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
                Place Bid
              </Button>
            </AuctionTimer>
          </div>
        </div>
      </div>

      <div className="flex w-xs flex-col gap-y-10 py-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl font-semibold capitalize md:w-1/2 lg:text-4xl">
            More From this Artist
          </h2>

          <Button className="hidden h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta md:inline-block">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                className="mr-3"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z"
                  fill="#A259FF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.8081 3.93306C11.0521 3.68898 11.4479 3.68898 11.6919 3.93306L17.3169 9.55806C17.561 9.80214 17.561 10.1979 17.3169 10.4419L11.6919 16.0669C11.4479 16.311 11.0521 16.311 10.8081 16.0669C10.564 15.8229 10.564 15.4271 10.8081 15.1831L15.9911 10L10.8081 4.81694C10.564 4.57286 10.564 4.17714 10.8081 3.93306Z"
                  fill="#A259FF"
                />
              </svg>
              Go to Artist Page
            </span>
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <div className="flex flex-col justify-center rounded-2xl bg-secondary">
            <img
              src={dis01}
              className="h-auto max-w-full rounded-t-2xl"
              alt=""
            />
            <div className="p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">
                Distant Galaxy
              </h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA01} className="rounded-full" alt="artist" />
                <p className="ml-3">MoonDancer</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-secondary">
            <img
              src={dis02}
              className="h-auto max-w-full rounded-t-2xl"
              alt=""
            />
            <div className="p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">Life On Edena</h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA02} className="rounded-full" alt="artist" />
                <p className="ml-3">Nebulakid</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-secondary md:hidden  lg:flex">
            <img src={dis03} className="rounded-t-2xl" alt="" />
            <div className="p-5 pb-[25px]">
              <h3 className="mb-[5px] text-2xl font-semibold">AstroFiction</h3>
              <div className="mb-[25px] flex items-center">
                <img src={disA03} className="rounded-full" alt="artist" />
                <p className="ml-3">Spaceone</p>
              </div>
              <div className="flex justify-between font-space">
                <p>
                  <span className="text-caption">Price</span> <br /> 1.63 ETH
                </p>
                <p>
                  <span className="text-caption">Highest Bid</span> <br /> 0.33
                  wETH
                </p>
              </div>
            </div>
          </div>
        </div>

        <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta md:hidden">
          <span className="flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="mr-3"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.5 10C2.5 9.65482 2.77982 9.375 3.125 9.375H16.875C17.2202 9.375 17.5 9.65482 17.5 10C17.5 10.3452 17.2202 10.625 16.875 10.625H3.125C2.77982 10.625 2.5 10.3452 2.5 10Z"
                fill="#A259FF"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.8081 3.93306C11.0521 3.68898 11.4479 3.68898 11.6919 3.93306L17.3169 9.55806C17.561 9.80214 17.561 10.1979 17.3169 10.4419L11.6919 16.0669C11.4479 16.311 11.0521 16.311 10.8081 16.0669C10.564 15.8229 10.564 15.4271 10.8081 15.1831L15.9911 10L10.8081 4.81694C10.564 4.57286 10.564 4.17714 10.8081 3.93306Z"
                fill="#A259FF"
              />
            </svg>
            Go to Artist Page
          </span>
        </Button>
      </div>
    </div>
  );
};

export default NftPage1;
