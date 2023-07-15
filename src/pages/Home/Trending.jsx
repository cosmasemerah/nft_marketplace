import tre10 from '../../assets/tre10.png';
import tre11 from '../../assets/tre11.png';
import tre12 from '../../assets/tre12.png';
import tre13 from '../../assets/tre13.png';

const Trending = () => {
  return (
    <div className="space-y-10  px-7 py-10">
      <div>
        <h2 className="mb-2.5 text-3xl">Trending Collection</h2>
        <p className="text-base font-normal">
          Checkout our weekly updated trending collection.
        </p>
      </div>

      <div className="flex flex-col justify-center">
        <img src={tre10} alt="" className="mb-[15px] rounded-xl" />
        <div className="mb-[15px] flex items-center justify-between">
          <img src={tre11} className="h-[95px] w-[95px] rounded-xl" alt="" />
          <img src={tre12} className="h-[95px] w-[95px] rounded-xl" alt="" />
          <h4 className="flex h-[95px] w-[95px] justify-center rounded-xl bg-cta px-[15px] py-8">
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
    </div>
  );
};

export default Trending;
