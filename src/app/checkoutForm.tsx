// app/checkout/CheckoutForm.tsx
"use client";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CheckoutForm = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState<number>(1);
  const [orderId, setOrderId] = useState<string>(uuidv4());
  const [price] = useState(20);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      setOrderId(uuidv4());
      await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          item,
          quantity,
          orderId,
          price,
        }),
      });
      
      router.push("/success")
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 flex flex-col mt-16 items-center justify-center"
    >
      <div className="gap-y-2 flex flex-col items-center justify-center">
        <input
          type="text"
          placeholder="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="border p-2 w-full"
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          className="border p-2 w-full"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Checkout
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
