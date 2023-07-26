const AuctionTimer = () => {
  return (
    <div className="flex flex-col justify-center rounded-2xl bg-secondary/50 p-7 font-space">
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
  );
};

export default AuctionTimer;
