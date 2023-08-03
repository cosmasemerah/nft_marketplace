import acct3 from '../../assets/acct03.svg';

import Button from '../../components/Button';

const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-7 self-stretch md:flex-row md:gap-10 lg:gap-14">
      <div className="w-full flex-1 overflow-hidden">
        <img
          src={acct3}
          className="h-[232px] w-full object-cover object-center transition-all delay-75 duration-2000 ease-in-out md:h-[615px] md:hover:scale-125 lg:h-[691px]"
        />
      </div>

      <div className="pb-10 md:flex-1">
        <div className="flex w-xs flex-col items-stretch gap-7 md:w-[325px] lg:w-[330px]">
          <div className="space-y-5 lg:w-[460px]">
            <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
              Create Account
            </h2>
            <p className="text-base font-normal lg:text-2xl">
              Welcome! Enter your details and start creating, collecting and
              selling NFTs.
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <label htmlFor="Username" className="sr-only">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 stroke-[#BDBDBD]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="Username"
                className="h-[46px] w-full rounded-3xl pl-10 text-primary outline-0 placeholder:text-primary"
                placeholder="Username"
              />
            </div>

            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 stroke-[#BDBDBD]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
              </div>
              <input
                type="email"
                id="email"
                className="h-[46px] w-full rounded-3xl pl-10 text-primary outline-0 placeholder:text-primary"
                placeholder="Email Address"
              />
            </div>

            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 stroke-[#BDBDBD]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="password"
                className="h-[46px] w-full rounded-3xl pl-10 text-primary outline-0 placeholder:text-primary"
                placeholder="Password"
              />
            </div>

            <label htmlFor="comfirmPassword" className="sr-only">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-3.5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-5 w-5 stroke-[#BDBDBD]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                  />
                </svg>
              </div>
              <input
                type="password"
                id="comfirmPassword"
                className="h-[46px] w-full rounded-3xl pl-10 text-primary outline-0 placeholder:text-primary"
                placeholder="Comfirm Password"
              />
            </div>
          </div>

          <Button
            className="animation h-[46px] cursor-pointer rounded-3xl bg-cta px-12"
            type="submit"
            disabled
          >
            Create Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
