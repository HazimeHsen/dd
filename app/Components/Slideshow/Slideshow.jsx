import Image from "next/image";
import "./style.css";

export default function Slideshow({ images, className }) {
  const repeatedImages = [...images, ...images, ...images];

  return (
    <div className="overflow-hidden pb-10">
      <div className="flex">
        <div className="ml-4 flex justify-center z-0 gap-4 logos-slide-container">
          {repeatedImages.map((image, i) => (
            <>
              <Image
                key={i}
                alt="profile"
                className={`object-contain ${className}`}
                width={200}
                height={200}
                src={image}
              />
            </>
          ))}{" "}
        </div>
      </div>
    </div>
  );
}
