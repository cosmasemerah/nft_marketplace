import PaintBrush from '@assets/PaintBrush.svg';
import Swatches from '@assets/Swatches.svg';
import MusicNotes from '@assets/MusicNotes.svg';
import Camera from '@assets/Camera.svg';
import VideoCamera from '@assets/VideoCamera.svg';
import MagicWand from '@assets/MagicWand.svg';
import Basketball from '@assets/Basketball.svg';
import Planet from '@assets/Planet.svg';

const Category = () => {
  return (
    <div className="flex  justify-center self-stretch px-7 py-10 md:px-18 lg:py-20">
      <div className="flex w-xs flex-col gap-y-10 md:w-2xl lg:w-5xl lg:gap-y-14">
        <div>
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Browse Categories
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5 md:gap-[30px]">
          {/* Art */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-art bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl  backdrop-blur  md:w-[150px] lg:w-60">
                <img
                  src={PaintBrush}
                  alt="art"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Art</p>
            </div>
          </div>

          {/* Collectibles */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-collectibles bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={Swatches}
                  alt="Collectibles"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Collectibles</p>
            </div>
          </div>

          {/* Music */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-music bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur  md:w-[150px] lg:w-60">
                <img
                  src={MusicNotes}
                  alt="Music"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Music</p>
            </div>
          </div>

          {/* Photography */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-photography bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={Camera}
                  alt="Photography"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Photography</p>
            </div>
          </div>

          {/* Video */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-video bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={VideoCamera}
                  alt="Video"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Video</p>
            </div>
          </div>

          {/* Utility */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-utility bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={MagicWand}
                  alt="Utility"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Utility</p>
            </div>
          </div>

          {/* Sports */}
          <div className="animation flex cursor-pointer flex-col">
            <div className="h-32 rounded-t-3xl bg-sport bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={Basketball}
                  alt="Sport"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Sport</p>
            </div>
          </div>

          {/* Virtual Worlds */}
          <div className="animation flex cursor-pointer flex-col justify-center">
            <div className="h-32 rounded-t-3xl bg-vrworld bg-cover bg-center bg-no-repeat lg:h-60">
              <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-3xl backdrop-blur   md:w-[150px] lg:w-60">
                <img
                  src={Planet}
                  alt="Virtual World"
                  className="h-20 w-20 lg:h-24 lg:w-24"
                />
              </div>
            </div>
            <div className="rounded-b-3xl bg-secondary p-5 pb-[25px] lg:text-2xl">
              <p>Virtual World</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
