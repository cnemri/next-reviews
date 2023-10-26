import Heading from "@/components/Heading";
import ImageCard from "@/components/ImageCard";
import React from "react";
import { getFeaturedReview } from "@/lib/reviews";

const HomePage = async () => {
  const { slug, title, image } = await getFeaturedReview();
  return (
    <>
      <Heading>Indie Gamer</Heading>
      <p>Only the best indie games, reviewed for you!</p>
      <ImageCard gameName={title} imageUri={image} href={`/reviews/${slug}`} />
    </>
  );
};

export default HomePage;
