import styles from "./topmenu.module.css";
import Image from "next/image";
import TopMenuItem from "./TopManuItem";

export default function TopMenu() {
  return (
    <div className={styles.menucontainer}>
      <Image
        src={"/img/venuelogo.jpg"}
        alt="logo"
        width={0}
        height={0}
        sizes="100vh"
        className="h-auto w-auto rounded-lg"
      />
      <TopMenuItem title="Booking" pageRef="/booking" />
    </div>
  );
}
