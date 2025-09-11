// app/email_api/notify/route.ts

import { BrevoProvider } from "@/lib/email/brevo";
import { NextResponse } from "next/server";
import { AppError } from "@/lib/errors/AppError"; 
import { ERROR_CODES } from "@/lib/errors/error-codes"; 

/**
 * API endpoint to handle notification signups.
 * It receives an email, uses the BrevoProvider to send a notification,
 * and returns a structured success or error response.
 */
export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // 1. Use our error system for validation
    if (!email) {
      throw new AppError('INVALID_INPUT');
    }

    const emailProvider = new BrevoProvider();
    await emailProvider.sendInterestNotification(email);

    return NextResponse.json({ message: "Successfully subscribed!" }, { status: 200 });

  } catch (error) {
    // 2. Here’s the magic: the smart error handler
    if (error instanceof AppError) {
      // If it’s a known error controlled by our application...
      console.error(`AppError caught: ${error.code} - ${error.message}`);
      // ...respond with the specific information of that error.
      return NextResponse.json(
        { code: error.code, message: error.message },
        { status: error.httpStatus }
      );
    }

    // If it’s an unknown and unexpected error...
    console.error("An unexpected error occurred in the API route:", error);
    // ...respond with a generic error to avoid exposing internal details.
    const internalError = ERROR_CODES.INTERNAL_SERVER_ERROR;
    return NextResponse.json(
      { code: internalError.code, message: internalError.message },
      { status: internalError.httpStatus }
    );
  }
}
