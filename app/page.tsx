import Heading from "@/components/Heading";
import ImageCard from "@/components/ImageCard";
import React from "react";
import { getReviews } from "@/lib/reviews";

// export const dynamic = "force-dynamic";
// export const revalidate = 60; // seconds

const HomePage = async () => {
  const { data: reviews } = await getReviews(3, 1);
  return (
    <div className="flex flex-col items-center space-y-4">
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you!</p>
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

export default HomePage;
