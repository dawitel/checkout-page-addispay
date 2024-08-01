import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const data = await req.json();
  const {
    transaction_id,
    order_id,
    cust_id,
    amount,
    status,
    timestamp,
    message,
  } = data;
  console.log("Received data:", data);
  try {
    //   make API request to the /api/transactions TODO: move form fetch -> axios
    await axios.post("localhost:3000/api/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        transaction_id,
        order_id,
        cust_id,
        amount,
        status,
        timestamp,
        message,
      }),
    });
  } catch (error) {
    console.log(error);
  }
}
