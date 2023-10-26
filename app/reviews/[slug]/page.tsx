import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import { getReview } from "@/lib/reviews";

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params: { slug } }: Props) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

const ReviewPage = async ({ params: { slug } }: Props) => {
  const { title, date, image, body } = await getReview(slug);
  return (
    <>
      <Heading>{title}</Heading>
      <p className="italic pb-2">{date}</p>
      <Image
        src={image}
        width={640}
        height={360}
        alt="Hollow Knight"
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: body }}
        className="max-w-screen-sm prose prose-slate"
      />
    </>
  );
};

export default ReviewPage;
