import astro from '../../assets/Astronaut.svg';

import SubscribeForm from '../../components/SubscribeWidget';

const Subscribe = () => {
  return (
    <div className="px-7 py-10 md:px-18">
      <div className="space-y-[30px] md:flex md:space-x-10 md:rounded-xl md:bg-secondary md:px-7 md:py-10">
        <div className="flex-1 ">
          <img
            src={astro}
            className="h-[255px] w-full rounded-3xl object-cover md:h-full"
            alt="Subscribe"
          />
        </div>

        <div className="flex flex-1 flex-col space-y-10">
          <div>
            <h2 className="mb-2.5 text-3xl font-semibold">
              Join our weekly digest
            </h2>
            <p className="text-base font-normal">
              Get exclusive promotions & updates straight to your inbox.
            </p>
          </div>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
