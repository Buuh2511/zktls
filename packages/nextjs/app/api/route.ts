import { NextResponse } from "next/server";

export async function GET() {
  const publicEnvVars = Object.entries(process.env)
    .filter(([key]) => key.startsWith("NEXT_PUBLIC_"))
    .reduce((obj, [key, value]) => ({ ...obj, [key]: value }), {});

  return NextResponse.json(publicEnvVars);
}
