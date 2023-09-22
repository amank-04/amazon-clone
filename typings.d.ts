interface ProductItem {
  id: number!;
  title: string!;
  price: number!;
  description: string!;
  image: string!;
  category: string!;
  hasPrime: boolean!;
  rating: number!;
}

interface Order {
  id: string!;
  amount: number!;
  images: string[]!;
  timestamp: number!;
}
