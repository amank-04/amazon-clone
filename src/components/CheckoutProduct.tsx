"use client";
import { removeFromCart } from "@/redux/cartSlice";
import { useAppDispatch } from "@/redux/hooks";
import { StarIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

export default function CheckoutProduct({
  product: { id, description, hasPrime, image, price, rating, title },
}: {
  product: ProductItem;
}) {
  const dispatch = useAppDispatch();
  const removeItemFromCart = () => {
    dispatch(removeFromCart(id));
  };
  return (
    <div className="grid grid-cols-5 items-center">
      <Image
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
        alt=""
        src={image}
        width={200}
        height={200}
      />
      <div className="col-span-4 sm:col-span-3 mx-5">
        <p className="my-3">{title}</p>

        <div className="flex">
          {Array(rating)
            .fill(0)
            .map((_, i) => (
              <StarIcon key={i} className="text-yellow-400 h-5" />
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
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
              src="https://m.media-amazon.com/images/G/31/marketing/prime/detail_page/checkPrime._CB483586779_.png"
            />
            <p className="text-xs text-gray-500">Free Next-Day Dilevery</p>
          </div>
        )}
      </div>
      <button onClick={() => removeItemFromCart()} className="button col-span-5 sm:col-span-1">
        {" "}
        Remove From Cart
      </button>
    </div>
  );
}
