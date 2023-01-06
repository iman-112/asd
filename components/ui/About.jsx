import Image from "next/image";
import Title from "../ui/Title";

const About = () => {
  return (
    <div className="bg-dumag py-14">
      <div className="container mx-auto flex items-center text-white gap-20 justify-center flex-wrap-reverse">
        <div className="flex justify-center">
          <div className="relative sm:w-[445px] sm-h-[600px]  flex justify-center w-[300px] h-[450px]">
            <Image src="/images/photo.png" alt="" layout="fill" />
          </div>
        </div>
        <div className="md:w-1/2 text-boz">
          <Title addClass="text-[40px]">Lorem, ipsum dolor.</Title>
          <p className="my-5 flex flex-col items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia tempora consequuntur neque necessitatibus in, incidunt veritatis nobis dicta aliquid illo eveniet sequi, hic sint repellat reprehenderit debitis minus, ullam quam magni! Molestiae, esse repellendus tenetur minus illum dicta consectetur aspernatur.
          </p>
          <button className="btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default About;
