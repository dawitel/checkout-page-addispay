// app/checkout/CheckoutForm.tsx
"use client";

import { v4 as uuidv4 } from "uuid";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useFormStatus } from "react-dom";

const CheckoutForm = () => {
  const [CustID, setCustID] = useState("");
  const [CustBankAcc, setCustBankAcc] = useState<number>();
  const [PhoneNumber, setPhoneNumber] = useState("");
  const [Amount, setAmount] = useState<number>();
  const router = useRouter();
  const {pending} = useFormStatus()

  const handleSubmit = async (e: React.FormEvent) => {
    try {
      e.preventDefault();
      await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CustID,
          CustBankAcc,
          Amount,
          PhoneNumber,
        }),
      });
      
      router.push(`/success/transactionID=${CustID}`)
    } catch (error) {
      console.log(error)
      router.push(`/checkout-failed/transactionID=${CustID}`)
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
          placeholder="Customer Id"
          value={CustID}
          onChange={(e) => setCustID(e.target.value)}
          className="border p-2 rounded-md text-sm w-full"
          required
        />
        <input
          type="text"
          placeholder="Customer bank account"
          value={CustBankAcc}
          onChange={(e) => setCustBankAcc(Number(e.target.value))}
          className="border p-2 rounded-md text-sm w-full"
          required
        />
        <input
          type="text"
          placeholder="Phone number"
          value={PhoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="border rounded-md p-2 text-m w-full"
          required
        />
        <input
          type="number"
          placeholder="Amount in ETB"
          value={Amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="border rounded-md p-2 text-sm w-full"
          required
        />

        <button
          className="bg-blue-500 mt-3 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          {pending ? "Processing...":"Checkout"}
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
