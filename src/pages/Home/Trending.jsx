import tre10 from '../../assets/tre10.svg';
import tre11 from '../../assets/tre11.svg';
import tre12 from '../../assets/tre12.svg';
import tre13 from '../../assets/tre13.svg';
import tre20 from '../../assets/tre20.svg';
import tre21 from '../../assets/tre21.svg';
import tre22 from '../../assets/tre22.svg';
import tre23 from '../../assets/tre23.svg';

const Trending = () => {
  return (
    <div className="space-y-10  px-7 py-10 md:px-18">
      <div>
        <h2 className="mb-2.5 text-3xl font-semibold">Trending Collection</h2>
        <p className="text-base font-normal">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="flex justify-center space-x-[30px]">
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
      </div>
    </div>
  );
};

export default Trending;
