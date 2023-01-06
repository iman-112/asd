import Image from "next/image";
import Title from "./Title";
import { MdShoppingCart } from "react-icons/md";

const CampaignItem1 = () => {
  return (
    <div className=" shadow flex-1 rounded-md py-5 px-[20px] flex items-center gap-x-4">
      <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
        <Image
          src="/images/photo.jpg"
          alt=""
          layout="fill"
          className="hover:scale-105 transition-all"
          objectFit="cover"
        />
      </div>
      <div className="text-white">
        <Title addClass="text-2xl">Məhsul 1</Title>
        <div className="font-dancing my-1">
          <span className="text-[40px]">20%</span>
          <span className="text-sm inline-block ml-1">Endirim</span>
        </div>
        <button className="btn-primary flex items-center gap-x-2">
          Ətraflı <MdShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
};
const CampaignItem2 = () => {
    return (
      <div className=" shadow flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4">
        <div className="relative md:w-44 md:h-44 w-36 h-36 after:content-['']   border-[5px] border-primary rounded-full overflow-hidden">
          <Image
            src="/images/photo2.jpg"
            alt=""
            layout="fill"
            className="hover:scale-105 transition-all"
            objectFit="cover"
          />
        </div>
        <div className="text-white">
          <Title addClass="text-2xl">Məhsul 2</Title>
          <div className="font-dancing my-1">
            <span className="text-[40px]">20%</span>
            <span className="text-sm inline-block ml-1">Endirim</span>
          </div>
          <button className="btn-primary flex items-center gap-x-2">
            Ətraflı <MdShoppingCart size={20} />
          </button>
        </div>
      </div>
    );
  };
const Campaigns = () => {
  return (
    <div className="flex  container mx-auto py-20 gap-6 flex-wrap">
       
      <CampaignItem1 />
      <CampaignItem2 />
     
    </div>
  );
};

export default Campaigns;