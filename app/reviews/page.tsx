import React from "react";
import Heading from "@/components/Heading";
import ImageCard from "@/components/ImageCard";
import { getReviews } from "@/lib/reviews";
import PaginationBar from "@/components/PaginationBar";
import SearchBox from "@/components/SearchBox";

// export const dynamic = "force-dynamic";
// export const revalidate = 60; // seconds

export const metadata = {
  title: "Reviews",
};

type Props = {
  searchParams: {
    page?: string;
  };
};

const parsePageParam = (paramValue) => {
  if (paramValue) {
    const parsed = parseInt(paramValue);
    if (isFinite(parsed) && parsed > 0) {
      return parsed;
    }
  }
  return 1;
};

const PAGE_SIZE = 6;

const ReviewsPage = async ({ searchParams }: Props) => {
  const page = parsePageParam(searchParams.page);
  const { data: reviews, pageCount } = await getReviews(PAGE_SIZE, page);
  return (
    <div className="flex flex-col items-center space-y-4">
      <Heading>Reviews Page</Heading>
      <div className="flex justify-between w-full max-w-5xl">
        <PaginationBar page={page} pageCount={pageCount} href="/reviews" />
        <SearchBox />
      </div>
      <p>Click on a review to read it!</p>
      <ul className="flex items-center justify-center gap-8 mb-4 flex-wrap">
        {reviews.map((review) => (
          <ImageCard
            key={review.slug}
            image={review.image}
            title={review.title}
            href={`/reviews/${review.slug}`}
            subtitle={review.subtitle}
          />
        ))}
      </ul>
    </div>
  );
};

export default ReviewsPage;
