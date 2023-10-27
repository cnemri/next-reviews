import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string;
  href: string;
  subtitle?: string;
};

const ImageCard = ({ title, image, href, subtitle }: Props) => {
  return (
    <div className=" bg-white p-4 shadow-xl border rounded-xl inline-block h-52 w-96 md:w-full md:max-w-7xl">
      <Link
        href={href}
        className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start gap-4"
      >
        <div className="rounded-xl overflow-hidden w-80 h-32 md:h-40">
          <Image
            src={image}
            width={1000}
            height={1000}
            alt={title}
            className="object-cover w-full h-full"
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="font-orbitron font-semibold border-t border-spacing-2 md:border-0">
            {title}
          </h2>
          {subtitle && <p className="hidden md:block">{subtitle}</p>}
        </div>
      </Link>
    </div>
  );
};

export default ImageCard;
