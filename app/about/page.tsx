import Heading from "@/components/Heading";
import React from "react";

export const metadata = {
  title: "About",
};

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <>
      <Heading>About Page</Heading>
      <p>This is a random paragraph</p>
    </>
  );
};

export default AboutPage;
