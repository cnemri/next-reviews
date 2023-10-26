import React from "react";
import Heading from "@/components/Heading";
import ImageCard from "@/components/ImageCard";
import { getReviews, getSlugs } from "@/lib/reviews";

export const metadata = {
  title: "Reviews",
};

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = {};

const ReviewsPage = async (props: Props) => {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews Page</Heading>
      <ul className="flex items-center justify-start gap-8 mb-4 flex-wrap">
        {reviews.map((review) => (
          <ImageCard
            imageUri={review.image}
            gameName={review.title}
            href={`/reviews/${review.slug}`}
          />
        ))}
      </ul>
      <p>Click on a review to read it!</p>
    </>
  );
};

export default ReviewsPage;
