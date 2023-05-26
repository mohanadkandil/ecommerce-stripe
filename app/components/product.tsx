import Image from "next/image";
import formatPrice from "@/utils/priceFormat";
export default function Product({ name, image, price }: ProductType) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{price !== null ? formatPrice(price) : "N/A"}</h1>
    </div>
  );
}
