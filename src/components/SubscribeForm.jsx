import Button from './Button';

const SubscribeForm = () => {
  return (
    <form>
      <label className="sr-only" htmlFor="Subscribe">
        Subscribe
      </label>
      <div className="relative flex max-w-[420px] justify-center">
        <input
          className="mb-4 h-[46px] w-full rounded-3xl px-5"
          id="Subscribe"
          type="email"
          placeholder="Enter Your Email Address"
        />
        <Button
          className="absolute right-0 h-[46px] rounded-3xl bg-cta px-12"
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
