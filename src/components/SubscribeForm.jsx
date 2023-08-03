import Button from './Button';

const SubscribeForm = () => {
  return (
    <form>
      <label className="sr-only" htmlFor="Subscribe">
        Subscribe
      </label>
      <div className="relative flex max-w-[420px] justify-center overflow-hidden">
        <input
          className="w-full rounded-3xl px-5 py-4 text-primary outline-0"
          id="Subscribe"
          type="email"
          placeholder="Enter Your Email Address"
        />
        <Button
          className="absolute inset-y-0 right-0 cursor-pointer rounded-3xl bg-cta px-12 py-4 transition-all duration-300 hover:scale-105 active:scale-100"
          type="submit"
          disabled
        >
          Subscribe
        </Button>
      </div>
    </form>
  );
};

export default SubscribeForm;
