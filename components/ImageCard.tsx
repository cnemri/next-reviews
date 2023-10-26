import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  gameName: string;
  imageUri: string;
  href: string;
};

const ImageCard = ({ gameName, imageUri, href }: Props) => {
  return (
    <div className=" bg-white p-4 shadow-xl border rounded-xl inline-block w-60">
      <Link href={href} className="flex flex-col items-center justify-center">
        <div className="rounded-full overflow-hidden w-20 h-20">
          <Image
            src={imageUri}
            width={1000}
            height={1000}
            alt={gameName}
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="font-orbitron font-semibold border-t border-spacing-2 mt-4">
          {gameName}
        </h2>
      </Link>
    </div>
  );
};

export default ImageCard;
