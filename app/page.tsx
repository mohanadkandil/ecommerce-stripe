import Image from "next/image";

import Stripe from "stripe";
import Product from "./components/product";

// stripe
const getProducts = async () => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: "2022-11-15",
  });

  const products = await stripe.products.list();

  // promise all for all prices with products on stripe products
  const productWithPrices = await Promise.all(
    products.data.map(async (product) => {
      const prices = await stripe.prices.list({ product: product.id });
      return {
        id: product.id,
        name: product.name,
        description: product.description,
        unit_amount: prices.data[0].unit_amount,
        image: product.images[0],
        currency: prices.data[0].currency,
      };
    })
  );
  return productWithPrices;
};

export default async function Home() {
  const products = await getProducts();
  return (
    <main className="grid grid-cols-fluid gap-12">
      {products.map((product) => (
        <Product {...product} key={product.id} />
      ))}
    </main>
  );
}
