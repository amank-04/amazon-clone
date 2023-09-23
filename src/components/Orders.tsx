import { db } from "@/../firebase";
import moment from "moment";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/utils/authOptions";
import Link from "next/link";

export default async function Orders() {
  const data = await getServerSession(authOptions);
  const email = data?.user?.email ?? "";
  const orders = await getOrders(email);

  return (
    <div className="max-w-screen-lg mx-auto p-10">
      <h1 className="text-3xl border-b mb-1 pb-1 border-yellow-500">
        Your Orders
      </h1>
      <h2>
        {email?.length > 0 ? (
          `${orders.length} Orders`
        ) : (
          <div>
            Please <Link className="text-blue-600 hover:underline" href="/api/auth/signin">Sign in</Link> {""}in to see
            orders
          </div>
        )}
      </h2>

      <div className="mt-5 space-y-2">
        {orders.map((order) => (
          <div key={order.id} className="relative border rounded-md">
            {/* Top */}
            <div className="flex space-x-10 text-sm text-gray-600 bg-gray-100 p-5">
              <div>
                <p className="font-bold text-xs whitespace-nowrap">
                  ORDER PLACE
                </p>
                <p>
                  {moment.unix(order.timestamp).format("DD/MM/YY")}
                </p>
              </div>

              <div>
                <p className="font-bold text-xs">Total</p>
                <p>${order.amount}</p>
              </div>

              <div className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 pb-2 text-right text-blue-500">
                <p>{order.images.length} items</p>
              </div>
            </div>

            <p className="absolute top-1 right-1 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
              ORDER #{order.id}
            </p>

            {/* Bottom */}
            <div className="p-5 sm:p-10">
              <div className="flex space-x-6 overflow-x-auto items-center p-5">
                {order.images.map((image) => (
                  <img
                    className="h-20 sm:h-32 object-contain"
                    key={image}
                    src={image}
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

async function getOrders(email: string) {
  const orders: Order[] = [];

  if (!email) {
    return orders;
  }

  // Firebase DB
  const q = query(
    collection(db, "users", email, "orders"),
    orderBy("timestamp", "desc")
  );

  const querySnapshot = await getDocs(q);

  querySnapshot.forEach((order) => {
    orders.push({
      amount: order.data().amount,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      id: order.id,
    });
  });

  return orders;
}
