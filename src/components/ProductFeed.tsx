
import Product from "./Product";
const getProducts = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const products: Product[] = await res.json();
  return products;
};

export default async function ProductFeed() {
  const products = await getProducts();
  return (
    <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products.map((product) => (
       <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
