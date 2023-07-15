import PaintBrush from '../../assets/PaintBrush.svg';
import Swatches from '../../assets/Swatches.svg';
import MusicNotes from '../../assets/MusicNotes.svg';
import Camera from '../../assets/Camera.svg';
import VideoCamera from '../../assets/VideoCamera.svg';
import MagicWand from '../../assets/MagicWand.svg';
import Basketball from '../../assets/Basketball.svg';
import Planet from '../../assets/Planet.svg';

const Category = () => {
  return (
    <div className="space-y-10  px-7 py-10">
      <div>
        <h2 className="mb-2.5 text-3xl">Browse Categories</h2>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-5">
        {/* Art */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-art bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center  rounded-t-[20px]   backdrop-blur">
              <img src={PaintBrush} alt="art" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Art</p>
          </div>
        </div>

        {/* Collectibles */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-collectibles bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={Swatches} alt="Collectibles" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Collectibles</p>
          </div>
        </div>

        {/* Music */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-music bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]  backdrop-blur">
              <img src={MusicNotes} alt="Music" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Music</p>
          </div>
        </div>

        {/* Photography */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-photography bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={Camera} alt="Photography" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Photography</p>
          </div>
        </div>

        {/* Video */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-video bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={VideoCamera} alt="Video" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Video</p>
          </div>
        </div>

        {/* Utility */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-utility bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={MagicWand} alt="Utility" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Utility</p>
          </div>
        </div>

        {/* Sports */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-sport bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={Basketball} alt="Sport" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Sport</p>
          </div>
        </div>

        {/* Virtual Worlds */}
        <div className="flex flex-col justify-center">
          <div className="h-[142px] rounded-t-[20px] bg-vrworld bg-cover bg-no-repeat">
            <div className="flex h-full w-[147.5px] items-center justify-center rounded-t-[20px]   backdrop-blur">
              <img src={Planet} alt="Virtual World" className="h-20 w-20" />
            </div>
          </div>
          <div className="rounded-b-[20px] bg-secondary p-5 pb-[25px]">
            <p>Virtual World</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
