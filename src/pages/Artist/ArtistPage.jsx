import artBg from '../../assets/artbg.svg';
import avatar from '../../assets/artvatar.svg';
import globe from '../../assets/Globe.svg';
import discord from '../../assets/DiscordLogo.svg';
import youtube from '../../assets/YoutubeLogo.svg';
import twitter from '../../assets/TwitterLogo.svg';
import instagram from '../../assets/InstagramLogo.svg';
import dis01 from '../../assets/dis01.svg';
import disA01 from '../../assets/disA01.svg';
import dis02 from '../../assets/dis02.svg';
import disA02 from '../../assets/disA02.svg';
import dis03 from '../../assets/dis03.svg';
import disA03 from '../../assets/disA03.svg';

const ArtistPage = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex flex-col items-center self-stretch">
        <div className="w-full bg-gradient-to-b from-transparent from-25%  to-[#9747FF] to-95%">
          <img
            src={artBg}
            className="h-64 w-full min-w-sm object-cover mix-blend-soft-light md:min-w-md lg:min-w-lg"
            alt=""
          />
        </div>

        <div className="z-10 -mt-[70px] flex w-xs justify-center md:w-2xl md:justify-start lg:w-5xl">
          <img
            src={avatar}
            className="rounded-3xl border-2 border-primary"
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
              <div className="flex items-center justify-center gap-3 rounded-3xl bg-cta p-5">
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

              <div className="flex items-center justify-center gap-3 rounded-3xl border-2 border-cta p-5">
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
            <h3 className="text-caption">Bio</h3>
            <p>The internet's friendliest designer kid.</p>
          </div>

          <div className="flex flex-col items-start gap-2.5 leading-8 lg:text-2xl">
            <h3 className="text-caption">Links</h3>
            <div className="flex gap-2.5">
              <img
                src={globe}
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="website"
              />
              <img
                src={discord}
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="discord"
              />
              <img
                src={youtube}
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="youtube"
              />
              <img
                src={twitter}
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="twitter"
              />
              <img
                src={instagram}
                className="h-6 w-6 lg:h-8 lg:w-8"
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 self-stretch border border-secondary">
        <div className="flex h-14 w-xs gap-5 md:w-2xl lg:w-5xl lg:text-2xl">
          <div className="flex h-full flex-1 items-center justify-center border-b-2">
            Created
            <span className="ml-4 rounded-3xl bg-secondary px-4 py-2 font-space text-base">
              302
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Owned
            <span className="ml-4 rounded-3xl bg-secondary px-4 py-2 font-space text-base">
              62
            </span>
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            Collection
            <span className="ml-4 rounded-3xl bg-secondary px-4 py-2 font-space text-base">
              18
            </span>
          </div>
        </div>
      </div>

      <div className="flex justify-center self-stretch border-b-4 border-primary bg-secondary py-20">
        <div className="flex w-xs flex-wrap items-center justify-center gap-5 md:w-2xl lg:w-5xl">
          <div className="flex flex-col justify-center rounded-2xl">
            <img
              src={dis01}
              className="h-auto max-w-full rounded-t-2xl"
              alt=""
            />
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
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
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
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
            <div className="rounded-b-3xl bg-primary p-5 pb-[25px]">
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
      </div>
    </div>
  );
};

export default ArtistPage;
