const AuctionTimer = ({ children }) => {
  return (
    <div className="flex flex-col justify-center gap-7 rounded-2xl bg-secondary/50 p-7 font-space">
      <div className="flex flex-col gap-2.5">
        <p>Auction ends in:</p>
        <div className="flex justify-between font-mono text-4xl font-bold">
          <div className="flex flex-col space-y-[5px]">
            <div>59</div>
            <div className="text-xs font-normal">Hours</div>
          </div>
          <div>:</div>
          <div className="flex flex-col space-y-[5px]">
            <div>59</div>
            <div className="text-xs font-normal">Minutes</div>
          </div>
          <div>:</div>
          <div className="flex flex-col space-y-[5px]">
            <div>59</div>
            <div className="text-xs font-normal">Seconds</div>
          </div>
        </div>
      </div>

      {children}
    </div>
  );
};

export default AuctionTimer;
