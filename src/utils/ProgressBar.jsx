import React, { useEffect, useState } from 'react';

// @refresh reset

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        // Simulate the progress value increment for the loading bar
        const nextProgress = prevProgress + 10;
        return nextProgress >= 100 ? 100 : nextProgress;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="w-scren flex h-screen items-center justify-center">
        <div
          // style={{ width: '100%', height: '5px', background: '#ddd' }}
          className="h-1 w-56"
        >
          <div
            className={`w-${progress} h-full bg-cta/80 transition-[width] duration-300`}
            // style={{
            //   width: `${progress}%`,
            //   height: '100%',
            //   background: '#007BFF',
            //   transition: 'width 300ms',
            // }}
          />
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
