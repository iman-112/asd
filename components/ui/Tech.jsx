import Title from "./Title";
import { BsInfoSquare} from "react-icons/bs";
import {TbBrandNextjs ,TbBrandTailwind} from "react-icons/tb"
import Slider from "react-slick";
import { SiFirebase ,SiCanva, SiAdobe} from "react-icons/si";
import {FaLaravel} from "react-icons/fa"


const Tech = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows:false,
    autoplay:true,
    autoplaySpeed:2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
         
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll:2
        }
      }
    ]
  };
  return (
    <div className="  mb-12 mt-12 container mx-auto p-4 scrollbar gap   bg-primary text-white rounded">
      <Title addClass="text-[30px]  text-center text-boz">
        {" "}
       Brendinizdə olan markalar

      </Title>
      <div className="text-sari ">
        <Slider {...settings}>
          <div className="bg-primary w-1/4  rounded-md py-5 gap-3 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              {" "}
              <span className=" text-md font-bold relative ">
                <BsInfoSquare size={70} className="text-sari" />
                <p className="absolute bottom_-_5 left-2">Məhsul</p>
              </span>
            </div>
          </div>

          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
            <div className=" flex p-4 mx-8 ">
              <span className="text-md font-bold relative ">
                <BsInfoSquare size={70} className="text-sari"/>
                <p className="absolute bottom_-_10 left-2">Məhsul</p>
              </span>
            </div>
          </div>
          <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2 ">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari" />
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari" />
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari" />
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
    <div className="bg-primary  rounded-md py-5 px-[15px ] flex text-center">
      <div className=" flex p-4 mx-8 ">
      <span className=" text-md font-bold relative ">
          <BsInfoSquare  size={70} className="text-sari"/>
          <p className="absolute bottom_-_10 left-2">Məhsul</p>

        </span>

      </div>
    </div>
        </Slider>
      </div>
    </div>
  );
};

// const HtmlItem = () => {
//   return (

//   );
// };
// const CssItem = () => {
//   return (

//   );
// };
// const FireItem = () => {
//   return (
  
//   );
// };

export default Tech;
