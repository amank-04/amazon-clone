"use client";

import CheckoutProduct from "@/components/CheckoutProduct";
import { useAppSelector } from "@/redux/hooks";
import { useSession } from "next-auth/react";

export default function page() {
  const items = useAppSelector((state) => state.cart.items);
  const session = useSession();
  const cartTotal = useAppSelector((state) => state.cart.total)
  return (
    <div className="bg-gray-100 lg:flex">
      {/* Left */}
      <div className="flex-grow m-5 shadow-sm">
        <div className="flex flex-col p-5 space-y-10 bg-white">
          <h4 className="text-3xl bg-white">
            {!items.length ? `Your Amazon Cart is Empty` : `Shopping Cart`}
          </h4>

          {items.map((item, i) => (
            <CheckoutProduct product={item} key={i} />
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="flex flex-col bg-white p-10">
        {items.length > 0 && (
          <>
            <h2 className="whitespace-nowrap">
              Subtotal ({items.length} items):{" "}
              <span className="font-bold">${cartTotal.toLocaleString()}</span>
            </h2>
            <button
              disabled={session.status === "unauthenticated"}
              className={`button mt-2 ${
                session.status === "unauthenticated" &&
                "from-gray-300 to-gray-500 border-gray-200 text-gray-300 cursor-not-allowed"
              }`}
            >
              {session.status === "authenticated"
                ? "Proceed to checkout"
                : "Sign in to checkout"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
