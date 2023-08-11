import { Link } from 'react-router-dom';

import AuctionTimer from '@components/AuctionTimer';
import Button from '@components/Button';
import NftCard from '@components/NftCard';

import db from '@db/artistCollections.json';
import { artistNftImgData as images } from '../../utils/imageData';

const NftPage1 = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex flex-col items-center self-stretch">
        <img
          src={images.cover}
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
                  <Button className="animation h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
                    Place Bid
                  </Button>
                </AuctionTimer>
              </div>

              <div className="flex flex-col items-start gap-2.5 capitalize leading-8 lg:text-2xl">
                <h3 className="font-space text-caption">Created By</h3>
                <Link to="/artist">
                  <div className="flex items-center gap-3">
                    <img
                      src={images.nftA}
                      className="h-6 w-6 rounded-full"
                      alt="artist"
                    />
                    <p>Dish Studio</p>
                  </div>
                </Link>
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
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.6875 12C3.6875 11.4477 4.13522 11 4.6875 11H27.3125C27.8648 11 28.3125 11.4477 28.3125 12C28.3125 12.5523 27.8648 13 27.3125 13H4.6875C4.13522 13 3.6875 12.5523 3.6875 12Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.6875 20C3.6875 19.4477 4.13522 19 4.6875 19H27.3125C27.8648 19 28.3125 19.4477 28.3125 20C28.3125 20.5523 27.8648 21 27.3125 21H4.6875C4.13522 21 3.6875 20.5523 3.6875 20Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3837 8.13841C12.5439 10.0995 12 12.8783 12 16.0002C12 19.1221 12.5439 21.9009 13.3837 23.862C13.8044 24.8443 14.2797 25.5753 14.7565 26.0462C15.229 26.5129 15.6481 26.6752 16 26.6752C16.3519 26.6752 16.771 26.5129 17.2435 26.0462C17.7203 25.5753 18.1956 24.8443 18.6163 23.862C19.4561 21.9009 20 19.1221 20 16.0002C20 12.8783 19.4561 10.0995 18.6163 8.13841C18.1956 7.15609 17.7203 6.42507 17.2435 5.95417C16.771 5.4875 16.3519 5.3252 16 5.3252C15.6481 5.3252 15.229 5.4875 14.7565 5.95417C14.2797 6.42507 13.8044 7.15609 13.3837 8.13841ZM13.3511 4.53118C14.075 3.81627 14.9712 3.3252 16 3.3252C17.0288 3.3252 17.9251 3.81627 18.6489 4.53118C19.3685 5.24186 19.9707 6.2206 20.4548 7.35104C21.4246 9.61551 22 12.6741 22 16.0002C22 19.3263 21.4246 22.3849 20.4548 24.6493C19.9707 25.7798 19.3685 26.7585 18.6489 27.4692C17.925 28.1841 17.0288 28.6752 16 28.6752C14.9712 28.6752 14.075 28.1841 13.3511 27.4692C12.6315 26.7585 12.0293 25.7798 11.5452 24.6493C10.5754 22.3849 10 19.3263 10 16.0002C10 12.6741 10.5754 9.61551 11.5452 7.35104C12.0293 6.2206 12.6315 5.24186 13.3511 4.53118Z"
                        fill="#858584"
                      />
                    </svg>

                    <p>View on Etherscan</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 5C9.92487 5 5 9.92487 5 16C5 22.0751 9.92487 27 16 27C22.0751 27 27 22.0751 27 16C27 9.92487 22.0751 5 16 5ZM3 16C3 8.8203 8.8203 3 16 3C23.1797 3 29 8.8203 29 16C29 23.1797 23.1797 29 16 29C8.8203 29 3 23.1797 3 16Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.6875 12C3.6875 11.4477 4.13522 11 4.6875 11H27.3125C27.8648 11 28.3125 11.4477 28.3125 12C28.3125 12.5523 27.8648 13 27.3125 13H4.6875C4.13522 13 3.6875 12.5523 3.6875 12Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M3.6875 20C3.6875 19.4477 4.13522 19 4.6875 19H27.3125C27.8648 19 28.3125 19.4477 28.3125 20C28.3125 20.5523 27.8648 21 27.3125 21H4.6875C4.13522 21 3.6875 20.5523 3.6875 20Z"
                        fill="#858584"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3837 8.13841C12.5439 10.0995 12 12.8783 12 16.0002C12 19.1221 12.5439 21.9009 13.3837 23.862C13.8044 24.8443 14.2797 25.5753 14.7565 26.0462C15.229 26.5129 15.6481 26.6752 16 26.6752C16.3519 26.6752 16.771 26.5129 17.2435 26.0462C17.7203 25.5753 18.1956 24.8443 18.6163 23.862C19.4561 21.9009 20 19.1221 20 16.0002C20 12.8783 19.4561 10.0995 18.6163 8.13841C18.1956 7.15609 17.7203 6.42507 17.2435 5.95417C16.771 5.4875 16.3519 5.3252 16 5.3252C15.6481 5.3252 15.229 5.4875 14.7565 5.95417C14.2797 6.42507 13.8044 7.15609 13.3837 8.13841ZM13.3511 4.53118C14.075 3.81627 14.9712 3.3252 16 3.3252C17.0288 3.3252 17.9251 3.81627 18.6489 4.53118C19.3685 5.24186 19.9707 6.2206 20.4548 7.35104C21.4246 9.61551 22 12.6741 22 16.0002C22 19.3263 21.4246 22.3849 20.4548 24.6493C19.9707 25.7798 19.3685 26.7585 18.6489 27.4692C17.925 28.1841 17.0288 28.6752 16 28.6752C14.9712 28.6752 14.075 28.1841 13.3511 27.4692C12.6315 26.7585 12.0293 25.7798 11.5452 24.6493C10.5754 22.3849 10 19.3263 10 16.0002C10 12.6741 10.5754 9.61551 11.5452 7.35104C12.0293 6.2206 12.6315 5.24186 13.3511 4.53118Z"
                        fill="#858584"
                      />
                    </svg>

                    <p>View on Etherscan</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start gap-2.5 leading-8">
                <h3 className="font-space text-caption">Tags</h3>
                <div className="flex flex-wrap items-center gap-3 uppercase">
                  <p className="animation rounded-3xl bg-secondary px-7 py-3">
                    Animation
                  </p>
                  <p className="animation rounded-3xl bg-secondary px-7 py-3">
                    Mars
                  </p>
                  <p className="animation rounded-3xl bg-secondary px-7 py-3">
                    Ilustration
                  </p>
                  <p className="animation rounded-3xl bg-secondary px-7 py-3">
                    Moon
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden flex-none md:block">
            <AuctionTimer>
              <Button className="animation h-14 self-stretch rounded-3xl bg-cta px-12 font-semibold md:self-start">
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

          <Link to="/artist" className="animation hidden md:inline-block">
            <Button className="h-[60px] rounded-3xl px-12 ring-2 ring-inset ring-cta">
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
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-7 md:gap-x-7 md:gap-y-14">
          {db.map((item, index) => (
            <Link
              key={item.id}
              className={`animation flex cursor-pointer ${
                index >= 2 && index <= 5 ? 'hidden md:flex' : ''
              } ${index >= 6 ? 'hidden lg:flex' : ''}`}
            >
              <NftCard
                name={item.name}
                nftImg={images[`nft${item.id}`]}
                artistImg={images[`nftA`]}
                artistName={item.artist}
                price={item.price}
                highestBid={item.highestBid}
                bgColor={'bg-secondary'}
              />
            </Link>
          ))}
        </div>

        <Link to="/artist" className="animation md:hidden">
          <Button className="h-[60px] w-full rounded-3xl px-12 ring-2 ring-inset ring-cta">
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
        </Link>
      </div>
    </div>
  );
};

export default NftPage1;
