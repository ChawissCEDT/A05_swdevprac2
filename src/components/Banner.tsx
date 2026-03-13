import { kMaxLength } from "buffer";
import styles from "./banner.module.css";
import Image from "next/image";
import { maxHeaderSize } from "http";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Image
        src={"/img/banner.jpg"}
        alt="concert"
        fill={true}
        priority
        objectFit="cover"
      />
      <div className={styles.bannerText}>
        <h1
          className="text-4xl font-sans"
        >
          where every event finds its venue
        </h1>
        <br></br>
        <h3
          className="text-xl font-serif"
        >
          Explore curated venues for any occasion.
        </h3>
      </div>
    </div>
  );
}
