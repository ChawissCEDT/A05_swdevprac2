import styles from "./card.module.css";
import Image from "next/image";

export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <div className="w-1/5 h-[350px] rounded-lg shadow-lg border border-gray-200 bg-white">
      <div className="w-full h-[70%] relative">
        <Image
          src={imgSrc}
          alt="Venue Picture"
          fill={true}
          className="object-cover"
        />
      </div>

      <div className="w-full h-[30%] p-[10px] flex items-center justify-center text-center">
        <h3 className="font-mono text-amber-900 text-sm md:text-base font-bold leading-snug">
          {venueName}
        </h3>
      </div>
    </div>
  );
}
