import Heading from "@/components/Heading";
import React from "react";

type Props = {};

const NotFoundPage = (props: Props) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Heading>404 - Page Not Found</Heading>
      <p>
        Oops, the page you were looking for only exists in your imagination!
      </p>
    </div>
  );
};

export default NotFoundPage;
