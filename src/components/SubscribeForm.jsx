import envelope from '../assets/envelope.svg';
import Button from './Button';

const SubscribeForm = () => {
  return (
    <form>
      <input
        className="mb-4 h-[46px] w-full rounded-3xl px-5"
        type="email"
        placeholder="Enter Your Email Address"
      />
      <Button
        className="h-[46px] w-full rounded-3xl bg-cta"
        type="submit"
        disabled
      >
        <span className="flex items-center justify-center">
          <img src={envelope} className="mr-3" />
          Subscribe
        </span>
      </Button>
    </form>
  );
};

export default SubscribeForm;
