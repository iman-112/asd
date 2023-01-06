
import Title from "../ui/Title";
import Slider from "react-slick"
import Link from "next/link"



const Carousel = () => {

  const settings = {
    dots:false,
    infinite:true,
    speed:500,
    slidesToShow:1, 
    slidesToScrool:1,
    arrows:false,
    autoplay:true,
    autoplaySpeed:7000,


  }
  return (
    <div className="h-screen  w-full  -mt-[88px]">
      <div className="absolute top-0 left-0 w-full h-full ">
        <div className="relative h-full w-full mistyrose">
         
        </div>
      </div>
        <Slider {...settings}>
      <d iv>
      <div className=" mt-48 container mx-auto !text-white  flex flex-col items-start gap-y-8  ">
        <Title addClass="text-5xl !text-white">Lorem ipsum dolor sit amet consectetur adipisicing.</Title>
        <p className="text-[15px] sm:w-2/5 w-full  ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, totam ducimus. Repellat magnam quia eligendi vitae dolorem ducimus reiciendis, ex nobis libero mollitia. Animi quod iste quia. Vel, laudantium quis?
        </p>
        <Link href="/" target="_blank">
        <button className="btn-primary flex">
          
          2.Yönləndirmə</button>
          </Link>
      </div>
      </d>
      <div>
      <div className=" mt-48  container mx-auto text-white  flex flex-col items-start gap-y-8  ">
        <Title addClass="text-5xl  text-ag ">Lorem ipsum dolor sit amet. </Title>
        <p className="text-[15px] sm:w-2/5 w-full  text-dumag">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores quam alias laudantium delectus perferendis odio autem quis deleniti commodi? Eaque est et, quibusdam reprehenderit quod eius voluptatem vitae voluptates iste.
        </p>
        <Link href="/" target="_blank">
        <button className="btn-primary flex">
          
        1.Yönləndirmə</button>
         </Link>
      </div>
      </div>

        </Slider>
      
    </div>
  );
};

export default Carousel;