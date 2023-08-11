import { Link } from 'react-router-dom';

import db from '@db/discover.json';
import { discoverMoreNftImgData as images } from '../../utils/imageData';

import NftCard from '@components/NftCard';
import Socials from '../utils/Socials';

const ArtistPage = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex flex-col items-center self-stretch">
        <div className="w-full bg-gradient-to-b from-transparent from-25%  to-[#9747FF] to-95%">
          <img
            src={images.coverArtist}
            className="h-64 w-full min-w-sm object-cover mix-blend-soft-light md:min-w-md lg:min-w-lg"
            alt=""
          />
        </div>

        <div className="z-10 -mt-[70px] flex w-xs justify-center md:w-2xl md:justify-start lg:w-5xl">
          <img
            src={images.disA3}
            className="h-[120px] w-[120px] rounded-3xl border-2 border-primary"
            alt="artist avatar"
          />
        </div>
      </div>

      <div className="flex flex-col items-center self-stretch p-7">
        <div className="flex w-xs flex-col items-stretch justify-center gap-7 md:w-2xl md:items-start lg:w-5xl">
          <div className="flex flex-col gap-7 lg:flex-row lg:justify-between lg:self-stretch">
            <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
              Animakid
            </h1>
            <div className="flex flex-col gap-5 md:flex-row">
              <div className="animation flex cursor-pointer items-center justify-center gap-3 rounded-3xl bg-cta p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.25 3.125C6.25 2.77982 6.52982 2.5 6.875 2.5H16.875C17.2202 2.5 17.5 2.77982 17.5 3.125V13.125C17.5 13.4702 17.2202 13.75 16.875 13.75H13.125C12.7798 13.75 12.5 13.4702 12.5 13.125C12.5 12.7798 12.7798 12.5 13.125 12.5H16.25V3.75H7.5V6.875C7.5 7.22018 7.22018 7.5 6.875 7.5C6.52982 7.5 6.25 7.22018 6.25 6.875V3.125Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.5 6.875C2.5 6.52982 2.77982 6.25 3.125 6.25H13.125C13.4702 6.25 13.75 6.52982 13.75 6.875V16.875C13.75 17.2202 13.4702 17.5 13.125 17.5H3.125C2.77982 17.5 2.5 17.2202 2.5 16.875V6.875ZM3.75 7.5V16.25H12.5V7.5H3.75Z"
                    fill="white"
                  />
                </svg>
                0xc0E3...B79C
              </div>

              <div className="animation flex cursor-pointer items-center justify-center gap-3 rounded-3xl border-2 border-cta p-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
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
                    d="M10 2.5C10.3452 2.5 10.625 2.77982 10.625 3.125V16.875C10.625 17.2202 10.3452 17.5 10 17.5C9.65482 17.5 9.375 17.2202 9.375 16.875V3.125C9.375 2.77982 9.65482 2.5 10 2.5Z"
                    fill="#A259FF"
                  />
                </svg>
                Follow
              </div>
            </div>
          </div>

          <div className="flex items-center gap-5 self-stretch md:w-3/4 lg:w-2/4">
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                250k+
                <br />
                <span className="font-work text-base font-normal lg:text-2xl">
                  Volumn
                </span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                50k+
                <br />
                <span className="font-work text-base font-normal lg:text-2xl">
                  NFTs Sold
                </span>
              </h3>
            </div>
            <div className="flex-1">
              <h3 className="font-space text-2xl font-bold lg:text-3xl">
                3000+
                <br />
                <span className="font-work text-base font-normal lg:text-2xl">
                  Followers
                </span>
              </h3>
            </div>
          </div>

          <div className="flex flex-col items-start gap-2.5 capitalize leading-8 lg:text-2xl">
            <h3 className="font-space text-caption">Bio</h3>
            <p>The internet&rsquo;s friendliest designer kid.</p>
          </div>

          <div className="flex flex-col items-start gap-2.5 leading-8 lg:text-2xl">
            <h3 className="font-space text-caption">Links</h3>
            <div className="flex gap-2.5">
              {/* website */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="animation cursor-pointer lg:h-8 lg:w-8"
              >
                <title>website</title>
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

              <Socials />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 self-stretch border border-secondary">
        <div className="flex h-14 w-xs gap-5 md:w-2xl lg:w-5xl lg:text-2xl">
          <div className="flex h-full flex-1 items-center justify-center border-b-2">
            Created
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              302
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Owned
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              62
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Collection
            <span className="ml-4 hidden rounded-3xl bg-secondary px-4 py-2 font-space text-base md:flex">
              18
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center self-stretch border-b-4 border-primary bg-secondary py-20">
        <div className="flex w-xs flex-wrap items-center justify-center gap-5 md:w-2xl lg:w-5xl">
          {db.map((item, index) => (
            <Link
              to="/nft"
              className={`animation flex cursor-pointer ${
                index >= 3 && index <= 5 ? 'hidden md:flex' : ''
              } ${index >= 6 ? 'hidden lg:flex' : ''}`}
              key={item.id}
            >
              <NftCard
                name={item.name}
                nftImg={images[`dis${item.id}`]}
                artistImg={images[`disA${item.id}`]}
                artistName={item.artist}
                price={item.price}
                highestBid={item.highestBid}
                bgColor={'bg-primary'}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArtistPage;
