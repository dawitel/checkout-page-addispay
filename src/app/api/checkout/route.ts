import { checkoutSchema } from "@/schema";
import { NextResponse } from "next/server";


export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const validatedData = checkoutSchema.parse(formData);
    const { Amount, CustBankAcc, CustID, PhoneNumber } = validatedData;

    try {
      await fetch("localhost:8080/api/v1/checkout", {
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
      return NextResponse.json({success: true}, {status: 200})
    } catch (error) {
      console.log(error)
      return NextResponse.json({error: "Checkout server is down" }, {status: 500})
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
