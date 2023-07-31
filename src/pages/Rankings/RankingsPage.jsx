import SearchInput from '../../components/SearchInput';
import dis01 from '../../assets/dis01.svg';
import disA01 from '../../assets/disA01.svg';
import dis02 from '../../assets/dis02.svg';
import disA02 from '../../assets/disA02.svg';
import dis03 from '../../assets/dis03.svg';
import disA03 from '../../assets/disA03.svg';

const Marketplace = () => {
  return (
    <div className="flex flex-col items-center self-stretch">
      <div className="flex w-full max-w-xs py-10 md:max-w-2xl md:py-14 lg:max-w-5xl lg:py-20">
        <div className="space-y-2.5">
          <h1 className="text-3xl font-semibold md:text-4xl lg:text-5xl">
            Top Creators
          </h1>
          <p className="lg:text-2xl">
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center self-stretch border border-secondary pt-2.5">
        <div className="flex h-14 w-full max-w-xs items-center gap-2.5 text-caption md:max-w-2xl lg:max-w-5xl">
          <div className="flex h-full flex-1 items-center justify-center border-b-2 text-white">
            1d
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            7d
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            30d
          </div>
          <div className="flex h-full flex-1 items-center justify-center">
            All Time
          </div>
        </div>
      </div>

      <div className="flex justify-center self-stretch py-10 md:py-14">
        <div className="flex w-full max-w-xs flex-col gap-5 md:max-w-2xl lg:max-w-5xl">
          <div className="flex justify-between rounded-3xl border border-secondary px-2.5 py-3 font-space text-xs text-caption md:px-5 md:text-base">
            <div className="flex gap-2.5 md:w-[430px] md:gap-5">
              <div className="flex h-6 w-6 items-center justify-center lg:h-7 lg:w-7">
                #
              </div>
              <div className="flex-1">Artist</div>
            </div>
            <div className="flex w-[80px] items-center gap-5 md:w-[220px] lg:w-[520px]">
              <div className="hidden flex-1 md:block">Change</div>
              <div className="hidden flex-1 lg:block">NFts Sold</div>
              <div className="flex-1">Volume</div>
            </div>
          </div>

          <ul className="flex w-full flex-col gap-5">
            <li>
              <div className="flex justify-between rounded-3xl bg-secondary px-2.5 py-3 font-space text-xs text-white md:px-5 md:text-base">
                <div className="flex items-center gap-2.5 md:w-[430px] md:gap-5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-caption lg:h-7 lg:w-7 lg:bg-primary">
                    1
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={disA01}
                      className="rounded-full lg:h-14 lg:w-14"
                      alt="artist"
                    />
                    <p className="font-work md:text-2xl md:font-semibold">
                      Jaydon Ekstrom Bothman
                    </p>
                  </div>
                </div>
                <div className="flex w-[80px] items-center gap-5 md:w-[220px] lg:w-[520px]">
                  <div className="hidden flex-1 text-green md:block">
                    +1.24%
                  </div>
                  <div className="hidden flex-1 lg:block">602</div>
                  <div className="flex-1">12.4 ETH</div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex justify-between rounded-3xl bg-secondary px-2.5 py-3 font-space text-xs text-white md:px-5 md:text-base">
                <div className="flex items-center gap-2.5 md:w-[430px] md:gap-5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-caption lg:h-7 lg:w-7 lg:bg-primary">
                    1
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={disA02}
                      className="rounded-full lg:h-14 lg:w-14"
                      alt="artist"
                    />
                    <p className="font-work md:text-2xl md:font-semibold">
                      Jaydon Ekstrom Bothman
                    </p>
                  </div>
                </div>
                <div className="flex w-[80px] items-center gap-5 md:w-[220px] lg:w-[520px]">
                  <div className="hidden flex-1 text-green md:block">
                    +1.24%
                  </div>
                  <div className="hidden flex-1 lg:block">602</div>
                  <div className="flex-1">12.4 ETH</div>
                </div>
              </div>
            </li>

            <li>
              <div className="flex justify-between rounded-3xl bg-secondary px-2.5 py-3 font-space text-xs text-white md:px-5 md:text-base">
                <div className="flex items-center gap-2.5 md:w-[430px] md:gap-5">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full text-caption lg:h-7 lg:w-7 lg:bg-primary">
                    1
                  </div>
                  <div className="flex items-center gap-3">
                    <img
                      src={disA03}
                      className="rounded-full lg:h-14 lg:w-14"
                      alt="artist"
                    />
                    <p className="font-work md:text-2xl md:font-semibold">
                      Jaydon Ekstrom Bothman
                    </p>
                  </div>
                </div>
                <div className="flex w-[80px] items-center gap-5 md:w-[220px] lg:w-[520px]">
                  <div className="hidden flex-1 text-green md:block">
                    +1.24%
                  </div>
                  <div className="hidden flex-1 lg:block">602</div>
                  <div className="flex-1">12.4 ETH</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
