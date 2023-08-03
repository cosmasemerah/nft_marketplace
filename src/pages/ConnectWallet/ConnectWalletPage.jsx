import connImg from '../../assets/conn.svg';

const ConnectWalletPage = () => {
  const newLocal = 'round';
  return (
    <div className="flex flex-col items-center justify-center gap-7 self-stretch md:flex-row md:gap-10 lg:gap-14">
      <div className="w-full flex-1 overflow-hidden">
        <img
          src={connImg}
          className="h-[232px] w-full object-cover object-center transition-all delay-75 duration-2000 ease-in-out md:h-[615px] md:hover:scale-125 lg:h-[691px]"
        />
      </div>

      <div className="px-5 pb-10 md:flex-1">
        <div className="flex max-w-[315px] flex-col items-stretch gap-7 md:w-[325px] lg:w-[330px]">
          <div className="space-y-5 lg:w-[460px]">
            <h2 className="mb-2.5 text-3xl font-semibold lg:text-4xl">
              Connect Wallet
            </h2>
            <p className="text-base font-normal lg:text-2xl">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>

          <div className="flex flex-col gap-[15px]">
            <a
              href="#"
              className="animation flex items-center justify-start gap-5 rounded-3xl border border-cta p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="33"
                height="31"
                viewBox="0 0 33 31"
                fill="none"
              >
                <path
                  d="M30.9062 0.25L18.4199 9.52373L20.7289 4.05235L30.9062 0.25Z"
                  fill="#E2761B"
                  stroke="#E2761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2.08203 0.25L14.4679 9.61157L12.2718 4.05235L2.08203 0.25Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M26.4134 21.7461L23.0879 26.841L30.2032 28.7986L32.2487 21.859L26.4134 21.7461Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.763672 21.859L2.79661 28.7986L9.91191 26.841L6.58642 21.7461L0.763672 21.859Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.51009 13.1386L7.52734 16.1378L14.5924 16.4515L14.3415 8.85938L9.51009 13.1386Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.4772 13.1385L18.5831 8.77148L18.4199 16.4515L25.4725 16.1378L23.4772 13.1385Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.91211 26.8419L14.1537 24.7713L10.4894 21.9102L9.91211 26.8419Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.834 24.7713L23.0881 26.8419L22.4983 21.9102L18.834 24.7713Z"
                  fill="#E4761B"
                  stroke="#E4761B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23.0881 26.8421L18.834 24.7715L19.1728 27.5448L19.1352 28.7119L23.0881 26.8421Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.91211 26.8421L13.8651 28.7119L13.84 27.5448L14.1537 24.7715L9.91211 26.8421Z"
                  fill="#D7C1B3"
                  stroke="#D7C1B3"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9275 20.0781L10.3887 19.0365L12.8859 17.8945L13.9275 20.0781Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin={newLocal}
                />
                <path
                  d="M19.0605 20.0781L20.1021 17.8945L22.6119 19.0365L19.0605 20.0781Z"
                  fill="#233447"
                  stroke="#233447"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.91143 26.841L10.5138 21.7461L6.58594 21.859L9.91143 26.841Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.4863 21.7461L23.0887 26.841L26.4142 21.859L22.4863 21.7461Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M25.4725 16.1367L18.4199 16.4504L19.0725 20.0771L20.114 17.8936L22.6238 19.0355L25.4725 16.1367Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3885 19.0355L12.8983 17.8936L13.9273 20.0771L14.5924 16.4504L7.52734 16.1367L10.3885 19.0355Z"
                  fill="#CD6116"
                  stroke="#CD6116"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.52734 16.1367L10.4889 21.9093L10.3885 19.0355L7.52734 16.1367Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22.6235 19.0355L22.498 21.9093L25.4722 16.1367L22.6235 19.0355Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14.5928 16.4512L13.9277 20.0778L14.756 24.3571L14.9442 18.7225L14.5928 16.4512Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4209 16.4512L18.082 18.71L18.2326 24.3571L19.0734 20.0778L18.4209 16.4512Z"
                  fill="#E4751F"
                  stroke="#E4751F"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.0732 20.0767L18.2324 24.3559L18.8348 24.7701L22.4991 21.9089L22.6246 19.0352L19.0732 20.0767Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.3887 19.0352L10.4891 21.9089L14.1534 24.7701L14.7557 24.3559L13.9275 20.0767L10.3887 19.0352Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M19.1356 28.7116L19.1733 27.5445L18.8596 27.2685H14.1286L13.84 27.5445L13.8651 28.7116L9.91211 26.8418L11.2925 27.9712L14.0909 29.9163H18.8972L21.7082 27.9712L23.0886 26.8418L19.1356 28.7116Z"
                  fill="#C0AD9E"
                  stroke="#C0AD9E"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.8344 24.7715L18.232 24.3574H14.7559L14.1536 24.7715L13.8398 27.5449L14.1285 27.2688H18.8595L19.1732 27.5449L18.8344 24.7715Z"
                  fill="#161616"
                  stroke="#161616"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M31.4332 10.1261L32.4999 5.00608L30.9061 0.25L18.834 9.21L23.4771 13.1378L30.0403 15.0578L31.4959 13.3637L30.8685 12.912L31.8724 11.9959L31.0944 11.3935L32.0983 10.628L31.4332 10.1261Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M0.5 5.00608L1.56667 10.1261L0.88902 10.628L1.89294 11.3935L1.12745 11.9959L2.13137 12.912L1.50392 13.3637L2.94706 15.0578L9.5102 13.1378L14.1533 9.21L2.08118 0.25L0.5 5.00608Z"
                  fill="#763D16"
                  stroke="#763D16"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M30.04 15.0587L23.4769 13.1387L25.4722 16.1379L22.498 21.9104L26.4133 21.8602H32.2486L30.04 15.0587Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.51034 13.1387L2.9472 15.0587L0.763672 21.8602H6.58642L10.4892 21.9104L7.52759 16.1379L9.51034 13.1387Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.4205 16.4512L18.8346 9.21038L20.7421 4.05273H12.2715L14.1538 9.21038L14.5931 16.4512L14.7436 18.7351L14.7562 24.357H18.2323L18.2574 18.7351L18.4205 16.4512Z"
                  fill="#F6851B"
                  stroke="#F6851B"
                  strokeWidth="0.3125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-2xl font-semibold">Metamask</p>
            </a>

            {/* Wallet Connect */}
            <a
              href="#"
              className="animation flex items-center justify-start gap-5 rounded-3xl border border-cta p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_2814_8499)">
                  <path
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="url(#paint0_radial_2814_8499)"
                  />
                  <path
                    d="M10.0469 12.3578C13.2656 9.21406 18.4906 9.21406 21.7094 12.3578L22.0969 12.7391C22.2594 12.8953 22.2594 13.1516 22.0969 13.3078L20.7719 14.6016C20.6906 14.6828 20.5594 14.6828 20.4781 14.6016L19.9469 14.0828C17.6969 11.8891 14.0594 11.8891 11.8094 14.0828L11.2406 14.6391C11.1594 14.7203 11.0281 14.7203 10.9469 14.6391L9.62188 13.3453C9.45938 13.1891 9.45938 12.9328 9.62188 12.7766L10.0469 12.3578ZM24.4531 15.0328L25.6344 16.1828C25.7969 16.3391 25.7969 16.5953 25.6344 16.7516L20.3156 21.9453C20.1531 22.1016 19.8906 22.1016 19.7344 21.9453L15.9594 18.2578C15.9219 18.2203 15.8531 18.2203 15.8156 18.2578L12.0406 21.9453C11.8781 22.1016 11.6156 22.1016 11.4594 21.9453L6.12187 16.7516C5.95938 16.5953 5.95938 16.3391 6.12187 16.1828L7.30312 15.0328C7.46562 14.8766 7.72813 14.8766 7.88438 15.0328L11.6594 18.7203C11.6969 18.7578 11.7656 18.7578 11.8031 18.7203L15.5781 15.0328C15.7406 14.8766 16.0031 14.8766 16.1594 15.0328L19.9344 18.7203C19.9719 18.7578 20.0406 18.7578 20.0781 18.7203L23.8531 15.0328C24.0281 14.8766 24.2906 14.8766 24.4531 15.0328Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <radialGradient
                    id="paint0_radial_2814_8499"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(9.91821e-05 16.0005) scale(32)"
                  >
                    <stop stopColor="#5D9DF6" />
                    <stop offset="1" stopColor="#006FFF" />
                  </radialGradient>
                  <clipPath id="clip0_2814_8499">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-2xl font-semibold">Wallet Connect</p>
            </a>

            {/* Coinbase */}
            <a
              href="#"
              className="animation flex items-center justify-start gap-5 rounded-3xl border border-cta p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <g clipPath="url(#clip0_2814_8505)">
                  <path
                    d="M16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16C0 24.8366 7.16344 32 16 32Z"
                    fill="#0052FF"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M4.75 16C4.75 22.2132 9.78678 27.25 16 27.25C22.2132 27.25 27.25 22.2132 27.25 16C27.25 9.78678 22.2132 4.75 16 4.75C9.78678 4.75 4.75 9.78678 4.75 16ZM13.125 12.375C12.7108 12.375 12.375 12.7108 12.375 13.125V18.875C12.375 19.2892 12.7108 19.625 13.125 19.625H18.875C19.2892 19.625 19.625 19.2892 19.625 18.875V13.125C19.625 12.7108 19.2892 12.375 18.875 12.375H13.125Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2814_8505">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <p className="text-2xl font-semibold">Metamask</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWalletPage;
