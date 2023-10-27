// import qs from "qs";

// const CMS_URL = "http://localhost:1337";
// const slug = "my-first-review";

// const url =
//   `${CMS_URL}/api/reviews?` +
//   qs.stringify(
//     {
//       filters: { slug: { $eq: slug } },
//       fields: ["slug", "title", "subtitle", "publishedAt", "body"],
//       populate: { image: { fields: ["url"] } },
//       //   pagination: { pageSize: 1, withCount: false },
//     },
//     { encodeValuesOnly: true }
//   );
// const response = await fetch(url);
// const { data } = await response.json();
// // const { attributes } = data[0];
// console.log(data);
