import { searchReviews } from "@/lib/reviews";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const query = req.nextUrl.searchParams.get("query");
  const reviews = await searchReviews(query);
  return NextResponse.json(reviews);
};
