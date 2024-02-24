import SearchBar from "./SearchBar";
import NextImage from "./ui/image";
import brett from "../../../public/images/brett.jpg";

export default function Header() {
  return (
    // <div className="h-80 md:h-64">
    //   {/* <div className="relative h-full"> */}
    //   <NextImage
    //     className="rounded-lg z-0 relative"
    //     src={brett}
    //     alt="header image"
    //     fill={true}
    //   />
    //   <div className="h-full w-full bg-gradient-to-r from-[#0000009e] to-[#54545479] flex flex-col justify-center items-center z-20">
    //     <h1 className="text-white text-center text-4xl md:text-5xl font-bold mb-2">
    //       Find your table for any occasion
    //     </h1>
    //     <SearchBar />
    //   </div>
    // </div>
    <section className="h-[50vh] md:h-[40vh]">
      <div className="h-full w-full relative">
        <NextImage
          className="object-cover "
          src={brett}
          alt="image"
          fill={true}
        />
        <div className="absolute h-full w-full text-white bg-gradient-to-r from-[#0000009e] to-[#54545479]">
          <div className=" max-w-[1000px] h-[95%] flex justify-center flex-col mx-auto">
            <h1 className="w-full text-4xl md:text-5xl font-bold text-center mb-4">
              Find your table for any occasion
            </h1>
            <SearchBar />
          </div>
        </div>
      </div>
    </section>
  );
}
