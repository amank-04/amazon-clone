import Image from "next/image";
import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  product: Product;
};

export default function Product({
  product: { category, image, description, price, title },
}: Props) {
  const rating = Math.floor(Math.random() * 5) + 1;
  const hasPrime = Math.random() < 0.5;

  return (
    <div className="flex flex-col relative bg-white m-5 p-10 z-30 rounded-lg">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>

      <Image
        className="mx-auto object-contain"
        alt=""
        height={200}
        width={200}
        src={image}
      />

      <h4 className="my-3">{title}</h4>

      <div className="flex">
        {Array(rating)
          .fill(0)
          .map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-400" />
          ))}
      </div>

      <p className="line-clamp-2 text-xs my-2">{description}</p>

      <p className="mb-2">{"$" + price}</p>

      {hasPrime && (
        <div className="flex items-center space-x-2 mb-2">
          <Image
            className="object-contain"
            alt=""
            height={50}
            width={50}
            src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/checkPrime._CB483586779_.png"
          />
          <p className="text-xs text-gray-500">Free Next-Day Dilevery</p>
        </div>
      )}
      <button className="mt-auto button"> Add to Cart</button>
    </div>
  );
}
