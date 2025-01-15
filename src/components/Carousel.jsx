import { Carousel } from "@material-tailwind/react";

export function CarouselDefault() {
  return (
    <div>
      <Carousel className="w-full md:w-[80%] lg:w-[70%] h-fit m-auto rounded-xl">
        <img
          src="118268801_10218319216640776_6917048494106406267.jpg"
          alt="image 1"
          className="h-full w-full cursor-pointer object-cover"
        />
        <img
          src="118268801_10218319216640776_6917048494106406267445.jpg"
          alt="image 2"
          className="h-full w-full cursor-pointer object-cover"
        />
        <img
          src="hqdefault.jpg"
          alt="image 3"
          className="h-full w-full cursor-pointer object-cover"
        />
        <img
          src="Fatherabakir.jpg"
          alt="image 4"
          className="h-full w-full cursor-pointer object-cover"
        />
      </Carousel>
    </div>
  );
}