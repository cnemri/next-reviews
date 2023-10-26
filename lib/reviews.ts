import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";

export const getReview = async (slug) => {
  const text = await readFile(`./content/reviews/${slug}.md`, "utf-8");
  const {
    data: { title, date, image },
    content,
  } = matter(text);
  const body = marked(content);
  return { slug, title, date, image, body };
};

export const getReviews = async () => {
  const files = await readdir("./content/reviews/");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));

  const reviews = [];
  for (const slug of slugs) {
    const review = await getReview(slug);
    reviews.push(review);
  }
  reviews.sort((a, b) => b.date - a.date);
  return reviews;
};

export const getSlugs = async () => {
  const files = await readdir("./content/reviews/");
  const slugs = files
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.slice(0, -".md".length));
  return slugs;
};

export const getFeaturedReview = async () => {
  const reviews = await getReviews();
  return reviews[0];
};
