"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20"/>
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <Image unoptimized={true} width={100} height={100} alt="" src="https://m.media-amazon.com/image prioritys/I/71QRxZvKnGL._SX3000_.jpg" />
        <Image unoptimized={true} width={100} height={100} alt="" src="https://m.media-amazon.com/image prioritys/I/61lwJy4B8PL._SX3000_.jpg" />
        <Image unoptimized={true} width={100} height={100} alt="" src="https://m.media-amazon.com/image prioritys/I/71Ie3JXGfVL._SX3000_.jpg" />
        <Image unoptimized={true} width={100} height={100} alt="" src="https://m.media-amazon.com/image prioritys/I/71U-Q+N7PXL._SX3000_.jpg" />
        <Image unoptimized={true} width={100} height={100} alt="" src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" />
      </Carousel>
    </div>
  );
}
