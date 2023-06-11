"use client";

import { useCartStore } from "@/store";

export default function AddCart({
  name,
  id,
  image,
  unit_amount,
  description,
  quantity,
}: AddCartType) {
  const cartSote = useCartStore();

  return (
    <>
      <button
        onClick={() =>
          cartSote.addProduct({
            name,
            id,
            image,
            unit_amount,
            quantity,
            description,
          })
        }
        className="my-12 text-white py-2 px-6 font-med
             rounded-md bg-teal-700"
      >
        Add to card
      </button>
    </>
  );
}
