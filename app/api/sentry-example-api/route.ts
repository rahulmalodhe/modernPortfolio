import {NextResponse} from "next/server";

export function GET() {
  if (process.env.NODE_ENV !== "production") {
    // Only throw the error in non-production environments for testing
    throw new Error("Sentry Example API Route Error");
  }

  return NextResponse.json({data: "Testing Sentry Error..."});
}
