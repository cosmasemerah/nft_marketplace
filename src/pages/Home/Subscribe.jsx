import astro from '../../assets/Astronaut.svg';

import SubscribeForm from '../../components/SubscribeWidget';
import SubscribeTablet from '../../components/SubscribeForm';

const Subscribe = () => {
  return (
    <div className="flex justify-center self-stretch px-7 py-10 md:px-18 lg:py-20">
      <div className="flex w-xs flex-col content-stretch items-center gap-y-7 md:w-2xl md:flex-row md:gap-x-10 md:rounded-xl md:bg-secondary md:px-7 md:py-10 lg:w-5xl">
        <div className="flex-1 ">
          <img
            src={astro}
            className="h-full rounded-3xl object-cover"
            alt="Subscribe"
          />
        </div>

        <div className="flex flex-1 flex-col gap-y-10">
          <div>
            <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
              Join our weekly digest
            </h2>
            <p className="text-base font-normal lg:text-2xl">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
          <div className="lg:hidden">
            <SubscribeForm />
          </div>
          <div className="hidden lg:block">
            <SubscribeTablet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
