"use client";

import Image from "next/image";
import { useCartStore } from "@/store";
import formatPrice from "@/utils/priceFormat";
import { IoAddCircle, IoRemoveCircle } from "react-icons/io5";
import basket from "@/public/basket.png";
import { motion, AnimatePresence } from "framer-motion";
export default function Cart() {
  const cartStore = useCartStore();

  // total price for each item in cart using reduce higher order function
  const totalPrice = cartStore.cart.reduce((acc, item) => {
    return acc + item.unit_amount! * item.quantity!;
  }, 0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => cartStore.toggleCard()}
      className="fixed w-full h-screen left-0 top-0 bg-black/25"
    >
      <motion.div
        layout
        onClick={(e) => e.stopPropagation()}
        className="bg-white absolute right-0 top-0 w-1/4 h-screen p-12 overflow-y-scroll text-gray-700"
      >
        <h1>Here's your shopping list 🗒️</h1>
        {cartStore.cart.map((item) => (
          <motion.div layout className="flex py-4 gap-4" key={item.id}>
            <Image
              className="rounded-md h-24"
              src={item.image}
              alt={item.name}
              width={120}
              height={120}
            />
            <div>
              <h2>{item.name}</h2>
              <div className="flex gap-2">
                <h2>Quantity: {item.quantity}</h2>
                <button onClick={() => cartStore.removeProduct(item)}>
                  <IoRemoveCircle />
                </button>
                <button onClick={() => cartStore.addProduct(item)}>
                  <IoAddCircle />
                </button>
              </div>
              <p className="text-sm">Price: {formatPrice(item.unit_amount)}</p>
            </div>
          </motion.div>
        ))}

        {/* Checkout and total */}

        {cartStore.cart.length > 0 && (
          <motion.div layout>
            <p>Total: {formatPrice(totalPrice)}</p>
            <button className="py-2 mt-4 bg-teal-700 w-full rounded-md text-white">
              Checkout
            </button>
          </motion.div>
        )}

        <AnimatePresence>
          {!cartStore.cart.length && (
            <motion.div
              animate={{ scale: 1, rotateZ: 1, opacity: 0.75 }}
              initial={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              exit={{ scale: 0.5, rotateZ: -10, opacity: 0 }}
              className="flex flex-col items-center gap-12 text-2xl font-med
          pt-56 opacity-75"
            >
              <h1>It's empty 😢</h1>
              <Image src={basket} alt="empty cart" width={200} height={200} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
