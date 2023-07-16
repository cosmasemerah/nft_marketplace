import astro from '../../assets/Astronaut.svg';

import SubscribeForm from '../../components/SubscribeForm';

const Subscribe = () => {
  return (
    <div className="space-y-10  px-7 py-10">
      <img
        src={astro}
        className="h-[255px] w-full rounded-3xl object-cover"
        alt="Subscribe"
      />

      <div>
        <h2 className="mb-2.5 text-3xl">Join our weekly digest</h2>
        <p className="text-base font-normal">
          Get exclusive promotions & updates straight to your inbox.
        </p>
      </div>

      <SubscribeForm />
    </div>
  );
};

export default Subscribe;
