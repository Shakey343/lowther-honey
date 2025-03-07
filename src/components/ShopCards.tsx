import axios from "axios";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";
import cn from "../utils/cn";

interface ImageData {
  public_id: string;
  image_url: string;
  metadata: {
    caption?: string;
    alt?: string;
    link_to?: string;
    online?: string;
  };
  tags: string[];
}

// type GroupedImages = {
//   images: Record<string, ImageData[]>;
// };

const ShopCards = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  console.log(images);

  useEffect(() => {
    const tag = "shop";
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/images/by-tag?tag=${tag}`)
      .then((res) => {
        console.log(res.data.images);
        setImages(res.data.images);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="container mx-auto md:py-30">
      <ShopCard
        className="w-full"
        title="Lowther Castle Shop"
        onlineShop={false}
        linkTo="https://lowthercastle.org/shop-2/"
        imgSrc="https://lowthercastle.org/wp-content/uploads/2024/04/New-Shop.jpg"
        imgAlt="Lowther castle shop"
      />
      <div
        className={cn(
          "flex flex-wrap gap-10",
          images.length > 0 ? "mt-10" : ""
        )}
      >
        {images.map((image) => (
          <ShopCard
            key={image.public_id}
            className="w-full md:w-[400px]"
            title={image.metadata.caption || ""}
            onlineShop={image.metadata.online == "true"}
            linkTo={image.metadata.link_to || "#"}
            imgSrc={
              image.image_url ||
              "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741087977/Beaver_reredux_fmk9gd.png"
            } // Default image
            imgAlt={image.metadata.alt || ""}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
