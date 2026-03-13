import Image from "next/image";
import InteractiveCard from "./InteractiveCard"; // Import ตัวใหม่ที่สร้าง

export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    // ใช้ InteractiveCard เป็นตัวนอกสุด
    <InteractiveCard contentName={venueName}>
        {/* ส่วนประกอบข้างในยังคงเป็น Server Component ได้ */}
        <div className="w-full h-[70%] relative">
            <Image
                src={imgSrc}
                alt="Venue Picture"
                fill={true}
                className="object-cover rounded-t-lg" // เพิ่ม rounded-t เพื่อให้รูปมนตามกล่อง
            />
        </div>

        <div className="w-full h-[30%] p-[10px] flex items-center justify-center text-center">
            <div className="font-mono text-amber-900 text-sm md:text-base font-bold leading-snug">
                {venueName}
            </div>
        </div>
    </InteractiveCard>
  );
}