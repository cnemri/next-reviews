"use client";

import React from "react";
import { Combobox } from "@headlessui/react";
import { useIsClient } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useDebounce } from "use-debounce";

type Props = {};

const SearchBox = (props: Props) => {
  const isClient = useIsClient();
  const [query, setQuery] = React.useState("");
  const [debouncedQuery] = useDebounce(query, 300);
  const [reviews, setReviews] = React.useState([]);
  const router = useRouter();

  React.useEffect(() => {
    if (debouncedQuery.length > 1) {
      const controller = new AbortController();
      (async () => {
        const url = "/api/search?query=" + encodeURIComponent(debouncedQuery);
        const resp = await fetch(url, { signal: controller.signal });
        const reviews = await resp.json();
        setReviews(reviews);
      })();
      return () => {
        controller.abort();
      };
    }
  }, [debouncedQuery]);

  const handleChange = (review) => {
    console.log(review);
    router.push(`/reviews/${review.slug}`);
  };

  if (!isClient) {
    return null;
  }
  return (
    <div className="relative w-48">
      <Combobox onChange={handleChange}>
        <Combobox.Input
          placeholder="Search..."
          className="rounded border px-4 py-2 w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Combobox.Options className="absolute bg-white py-1 w-full">
          {reviews.map((review) => (
            <Combobox.Option key={review.slug} value={review}>
              {({ active }) => (
                <span
                  className={`block px-2 truncate w-full ${
                    active ? "bg-orange-100" : ""
                  }`}
                >
                  {review.title}
                </span>
              )}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox>
    </div>
  );
};

export default SearchBox;
