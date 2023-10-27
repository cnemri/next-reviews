import Heading from "@/components/Heading";
import React from "react";
import Image from "next/image";
import { getReview, getSlugs } from "@/lib/reviews";
import ShareLinkButton from "@/components/ShareLinkButton";
import { notFound } from "next/navigation";

type Props = {
  params: {
    slug: string;
  };
};

// export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const review = await getReview(slug);
  if (!review) {
    return notFound();
  }
  return {
    title: review.title,
  };
}

const ReviewPage = async ({ params: { slug } }: Props) => {
  const review = await getReview(slug);
  if (!review) {
    return notFound();
  }
  const { title, date, image, body, subtitle } = review;
  return (
    <div className="flex flex-col items-center space-y-4">
      <Heading>{title}</Heading>
      <p className="font-semibold">{subtitle}</p>
      <div className="flex gap-3 justify-start items-center md:w-[640px]">
        <p className="italic">{date}</p>
        <ShareLinkButton />
      </div>
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
    </div>
  );
};

export default ReviewPage;
