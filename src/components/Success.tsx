import { CheckCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function Success() {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="flex flex-col p-10 bg-white space-y-5">
        <div className="flex items-center space-x-1">
          <CheckCircleIcon className="text-green-500 h-8 sm:h-10" />
          <h1 className="text-2xl sm:text-3xl">Order Placed, thanks!</h1>
        </div>

        <p>
          Thank you for shopping with us. {"We'll"} send a confirmation once
          your item has shipped, if you would like to check the status of your
          order(s) please press the link below
        </p>

        <Link href="/orders" className="button">
          Go to my orders
        </Link>
      </div>
    </div>
  );
}
