// app/api/checkout/route.ts
import { NextResponse } from "next/server";
import { z } from "zod";

const checkoutSchema = z.object({
  item: z.string(),
  quantity: z.number(),
  orderId: z.number(),
  price: z.number(),
});

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const validatedData = checkoutSchema.parse(formData);

    // Process the order here (e.g., save to database, call payment API)
    console.log("Order:", validatedData);

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ errors: error.issues }, { status: 400 });
    }
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
