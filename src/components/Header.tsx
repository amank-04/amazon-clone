"use client";
import Image from "next/image";
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  Bars3Icon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Header() {
  const items = useAppSelector((state) => state.cart.items);
  const session = useSession();
  const router = useRouter();

  const handleLogIn = () => {
    if (session.status === "authenticated") return signOut();
    router.push("/api/auth/signin");
  };

  return (
    <div className="">
      {/* Top Navbar */}
      <div className="bg-amazon_blue flex items-center justify-between">
        <Link href="/" className="m-3 pt-2">
          <Image
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            height={40}
            width={100}
            style={{ width: "100px", height: "40px", objectFit: "contain" }}
            alt="logo"
          />
        </Link>

        <div className="hidden group md:inline-flex flex-grow items-center bg-yellow-400 rounded-md">
          <input
            className="rounded-l-md flex-grow outline-none p-2"
            type="text"
            placeholder="Search for Product"
          />
          <MagnifyingGlassIcon className="mx-3 cursor-pointer" width={20} />
        </div>

        <div className="flex items-center text-white space-x-5 mx-3">
          <div
            onClick={() => handleLogIn()}
            className=" cursor-pointer hover:underline"
          >
            <p className="text-xs">
              Hello, {session.data?.user ? session.data.user.name : `sign in`}
            </p>
            <p className="font-bold text-sm">Account & Lists</p>
          </div>
          <div className=" cursor-pointer hover:underline">
            <p className="text-xs">Returns</p>
            <p className="font-bold text-sm">& Orders</p>
          </div>
          <Link href="/cart" className="flex cursor-pointer hover:underline">
            <div className="relative">
              <ShoppingCartIcon className="h-10 w-10" />
              <p className="absolute top-0 right-0 bg-yellow-400 text-center text-xs px-1 text-black rounded-full">
                {items.length}
              </p>
            </div>
            <p className="hidden md:inline font-bold text-xs pt-6">Cart</p>
          </Link>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="flex bg-amazon_blue-light text-white items-center p-2">
        <div className="flex items-center cursor-pointer">
          <Bars3Icon className="h-7" />
          <p className="text-sm font-bold">All</p>
        </div>

        <div className="flex space-x-5">
          <p></p>
          <p className="text-sm cursor-pointer">{"Today's Deal"}</p>
          <p className="text-sm cursor-pointer">Customer Service</p>
          <p className="text-sm cursor-pointer">Registry</p>
          <p className="text-sm cursor-pointer">Gift Cards</p>
          <p className="text-sm cursor-pointer">Sell</p>
        </div>
      </div>
    </div>
  );
}
