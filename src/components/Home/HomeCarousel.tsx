"use client";

import item1 from "@/assets/seasonalOfferProduct1.png";
import item2 from "@/assets/seasonalOfferProduct2.png";
import item3 from "@/assets/seasonalOfferProduct3.png";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { cn } from "@/lib/utils";
import { poppins, serif } from "@/lib/fonts";
import { Button } from "../ui/button";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Carousel } from "../ui/FadeCarousel";

type Item = {
  name: string;
  text: string;
  price: number;
  image: StaticImageData;
};

export const HomeCarousel = () => {
  const [currentItem, setCurrentItem] = useState(0);

  return (
    <section className={cn("relative", poppins.className)}>
      <Carousel className="grid grid-cols-5 justify-center px-16">
        <div className="col-span-2 relative z-10">
          <p className="text-[40px] font-bold mb-6 text-blue-900">
            {products[currentItem].name}
          </p>
          <p className="mb-6 text-base w-2/3">{products[currentItem].text}</p>
          <Button className="p-6 mb-16">
            Shop {products[currentItem].name}
          </Button>
          <Carousel.Dots />
        </div>
        <Carousel.CarouselItems className="col-span-2 col-start-3">
          {products.map((product) => (
            <div className="flex" key={product.name}>
              <div className="mt-80">
                <p className="text-gray-400">Price</p>
                <p className="text-blue-900">${product.price}</p>
              </div>
              <Image
                width={500}
                className="mix-blend-multiply -ml-32"
                src={product.image}
                alt={product.name}
              />
            </div>
          ))}
        </Carousel.CarouselItems>

        <Carousel.CarouselData>
          {({ currentItem, count }) => {
            if (count === 0) return <></>;
            return (
              <div className="col-span-1 col-start-5 space-y-8 relative z-10">
                <CarouselThumb index={(currentItem + 1) % count} />
                <CarouselThumb index={(currentItem - 1 + count) % count} />
                <div className="flex gap-4">
                  <Carousel.PrvButton />
                  <Carousel.NextButton />
                </div>
              </div>
            );
          }}
        </Carousel.CarouselData>
      </Carousel>

      <div
        className={cn(
          "absolute select-none text-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary opacity-10 z-0",
          serif.className
        )}
      >
        Bliss
      </div>
    </section>
  );
};

const CarouselThumb = ({ index }: { index: number }) => {
  const { image, name } = products[index];
  return (
    <div
      className={cn(
        "bg-[#FFF5E4] flex items-center justify-center py-2  rounded shadow-xl"
      )}
    >
      <Image
        className="mix-blend-multiply -ml-4"
        src={image}
        alt={name}
        width={100}
      />
      <p className="text-lg mr-4">{name}</p>
    </div>
  );
};

const CarouselDot = ({
  item,
  setItem,
}: {
  item: number;
  setItem: Dispatch<SetStateAction<number>>;
}) => (
  <div
    onClick={() => setItem(2)}
    className={cn(
      "bg-primary rounded-full",
      item === 2 ? "size-4" : "size-3 opacity-70 cursor-pointer"
    )}
  ></div>
);

const products: Item[] = [
  {
    name: "Rest Assured",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item1,
  },
  {
    name: "Bright idea",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item2,
  },
  {
    name: "Block star",
    text: "This powerhouse eye cream visibly reduces dark circles while depuffing eyes for an always-well-rested look. 93% of users saw visible improvement in dark circles in 4 weeks of less!",
    price: 19.99,
    image: item3,
  },
];
