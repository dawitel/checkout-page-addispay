import { checkoutSchema } from "@/schema";
import axios from "axios";
import { NextResponse } from "next/server";

const prod_backend_addr = "deployment URL"
const dev_backend_addr = "localhost:8080"

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const validatedData = checkoutSchema.parse(formData);
    // type safe name
    const { Amount, CustBankAcc, CustID, Phonenumber } = validatedData;
    const validatedJSONData = JSON.stringify({
      Amount, 
      CustBankAcc, 
      CustID, 
      Phonenumber, 
    })  
      try {
        await axios.post(`${dev_backend_addr}/api/v1/checkout`, validatedJSONData);
        return NextResponse.json({success: true}, {status: 200})
      } catch (error) {
        console.log(error)
        return NextResponse.json({error: "API gateway is down" }, {status: 500})
      }
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
