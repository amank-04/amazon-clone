"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

export default function Banner() {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-200 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showThumbs={false}
      >
        <img src="https://m.media-amazon.com/images/I/61dN5ATmvqL._SX1500_.jpg" />
        <img src="https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg" />
        <img src="https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg" />
        <img src="https://m.media-amazon.com/images/I/71U-Q+N7PXL._SX3000_.jpg" />
        <img src="https://m.media-amazon.com/images/I/81KkrQWEHIL._SX3000_.jpg" />
        <img src="https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg" />
      </Carousel>
    </div>
  );
}
