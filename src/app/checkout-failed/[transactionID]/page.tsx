"use client"

import { useRouter } from "next/navigation";

type params = {
  params: {
    transactionID: string;
  }
  message: string
}
// app/success/page.tsx
const SuccessPage = ({params}: params) => {
  const router = useRouter()
  const onClick = () => {
    router.push("/")
  }
  return (
    <div className="container mx-auto my-10 items-center justify-center flex flex-col content-center">
      <h1 className="text-5xl font-extrabold text-red-600 mb-4">Oops! We failed to process your Order!</h1>
      <p className="text-lg mb-3">transactionID = {params.transactionID}</p>
      <p className="text-lg mb-3">Retry again.</p>
      <button onClick={onClick} className="rounded-2xl text-sm px-3 py-3 hover:bg-blue-400 hover:text-slate-50 bg-blue-400 text-white">
        Back To Checkout Page
      </button>
    </div>
  );
};

export default SuccessPage;
