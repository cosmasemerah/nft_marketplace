import tre10 from '../../assets/tre10.svg';
import tre11 from '../../assets/tre11.svg';
import tre12 from '../../assets/tre12.svg';
import tre13 from '../../assets/tre13.svg';
import tre20 from '../../assets/tre20.svg';
import tre21 from '../../assets/tre21.svg';
import tre22 from '../../assets/tre22.svg';
import tre23 from '../../assets/tre23.svg';
import tre30 from '../../assets/tre30.svg';
import tre31 from '../../assets/tre31.svg';
import tre32 from '../../assets/tre32.svg';
import tre33 from '../../assets/tre33.svg';

const Trending = () => {
  return (
    <div className="flex justify-center self-stretch py-10 lg:py-20">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div>
          <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
            Trending Collection
          </h2>
          <p className="text-base font-normal lg:text-2xl">
            Checkout our weekly updated trending collection.
          </p>
        </div>

        <div className="flex justify-start gap-x-7">
          <div className="flex flex-col justify-start">
            <img src={tre10} alt="" className="mb-[15px] rounded-xl" />
            <div className="mb-[15px] flex items-center justify-between">
              <img
                src={tre11}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <img
                src={tre12}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <h4 className="flex h-[95px] w-[95px] justify-center rounded-xl bg-cta px-[15px] py-8 md:h-[100px] md:w-[100px]">
                1025+
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">DSGN Animals</h3>
              <div className="flex items-center justify-start gap-1">
                <img src={tre13} alt="" />
                <p>MrFox</p>
              </div>
            </div>
          </div>

          <div className="hidden flex-col justify-start md:flex">
            <img src={tre20} alt="" className="mb-[15px] rounded-xl" />
            <div className="mb-[15px] flex items-center justify-between">
              <img
                src={tre21}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <img
                src={tre22}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <h4 className="flex h-[95px] w-[95px] justify-center rounded-xl bg-cta px-[15px] py-8 md:h-[100px] md:w-[100px]">
                1025+
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">DSGN Animals</h3>
              <div className="flex items-center justify-start gap-1">
                <img src={tre23} className="rounded-full" alt="" />
                <p>MrFox</p>
              </div>
            </div>
          </div>

          <div className="hidden flex-col justify-start lg:flex">
            <img src={tre30} alt="" className="mb-[15px] rounded-xl" />
            <div className="mb-[15px] flex items-center justify-between">
              <img
                src={tre31}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <img
                src={tre32}
                className="h-[95px] w-[95px] rounded-xl md:h-[100px] md:w-[100px]"
                alt=""
              />
              <h4 className="flex h-[95px] w-[95px] justify-center rounded-xl bg-cta px-[15px] py-8 md:h-[100px] md:w-[100px]">
                1025+
              </h4>
            </div>
            <div>
              <h3 className="text-2xl font-semibold">Disco Machines</h3>
              <div className="flex items-center justify-start gap-1">
                <img src={tre33} className="rounded-full" alt="" />
                <p>BeKind2Robots</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
