// app/checkout/page.tsx
import CheckoutForm from "./checkoutForm";

const CheckoutPage = () => {
  return (
    <div className="max-w-[500px] px-3 py-10 bg-green-400 rounded-2xl mx-auto my-10">
      <div className="">
        <h1 className="text-2xl font-bold items-center flex justify-center">
          Addis Pay Checkout page
        </h1>
        <CheckoutForm />
      </div>
    </div>
  );
};

export default CheckoutPage;
