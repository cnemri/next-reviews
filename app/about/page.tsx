import Heading from "@/components/Heading";
import React from "react";

export const metadata = {
  title: "About",
};

type Props = {};

const AboutPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Heading>About</Heading>
      <p>A website created to learn Next.js</p>
    </div>
  );
};

export default AboutPage;
