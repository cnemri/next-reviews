import { readFile, readdir } from "fs/promises";
import matter from "gray-matter";
import { marked } from "marked";
import qs from "qs";

export const CACHE_TAG_REVIEWS = "reviews";
const CMS_URL = process.env.CMS_URL;

const fetchReviews = async (params) => {
  const url =
    `${CMS_URL}/api/reviews?` +
    qs.stringify(params, { encodeValuesOnly: true });
  const response = await fetch(url, {
    next: {
      tags: [CACHE_TAG_REVIEWS], // seconds
    },
  });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch ${url}: ${response.status} ${response.statusText}`
    );
  }
  return await response.json();
};

const toReview = (item) => {
  const { attributes } = item;
  return {
    slug: attributes.slug,
    title: attributes.title,
    subtitle: attributes.subtitle,
    date: attributes.publishedAt.slice(0, "yyyy-mm-dd".length),
    image: CMS_URL + attributes.image.data.attributes.url,
  };
};

export const getReview = async (slug) => {
  const { data } = await fetchReviews({
    filters: { slug: { $eq: slug } },
    fields: ["slug", "title", "subtitle", "publishedAt", "body"],
    populate: { image: { fields: ["url"] } },
    pagination: { pageSize: 1, withCount: false },
  });
  if (data.length === 0) {
    return null;
  }
  const item = data[0];
  return {
    ...toReview(item),
    body: marked(item.attributes.body),
  };
};

export const getReviews = async (pageSize = 10, page = 1) => {
  const { data, meta } = await fetchReviews({
    fields: ["slug", "title", "subtitle", "publishedAt"],
    populate: { image: { fields: ["url"] } },
    sort: ["publishedAt:desc"],
    pagination: { pageSize: pageSize, page: page },
  });

  return {
    pageCount: meta.pagination.pageCount,
    data: data.map(toReview),
  };
};

export const getSlugs = async () => {
  const { data } = await fetchReviews({
    fields: ["slug"],
    sort: ["publishedAt:desc"],
    pagination: { pageSize: 100 },
  });
  const slugs = data.map((review) => review.attributes.slug);
  return slugs;
};

export const searchReviews = async (query) => {
  const { data } = await fetchReviews({
    filters: { title: { $containsi: query } },
    fields: ["slug", "title"],
    sort: ["title"],
    pagination: { pageSize: 5 },
  });
  const slugs = data.map((review) => {
    return {
      slug: review.attributes.slug,
      title: review.attributes.title,
    };
  });
  return slugs;
};
