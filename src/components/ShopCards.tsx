import axios from "axios";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";

interface ImageData {
  public_id: string;
  image_url: string;
  metadata: { caption?: string; alt?: string; link_to?: string; online?: string; };
  tags: string[];
};

// type GroupedImages = {
//   images: Record<string, ImageData[]>;
// };

const ShopCards = () => {
  const [images, setImages] = useState<ImageData[]>([]);

  console.log(images)

  useEffect(() => {
    const tag = "shop";
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/images/by-tag?tag=${tag}`)
      .then((res) => {
        console.log(res.data.images);
        //   [
        //     {
        //         "public_id": "samples/coffee",
        //         "image_url": "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1739880804/samples/coffee.jpg",
        //         "metadata": {
        //             "alt": "Coffee shop image.",
        //             "caption": "Lowther Coffee Shop Test",
        //             "link_to": "https://www.lowther.co.uk/",
        //             "online": "false"
        //         },
        //         "tags": [
        //             "shop"
        //         ]
        //     }
        // ]
        setImages(res.data.images);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="container mx-auto py-30">
      <ShopCard
        className="w-full"
        title="Lowther Castle Shop"
        onlineShop={true}
        linkTo="https://www.lowther.co.uk/"
        imgSrc="https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741087977/Beaver_reredux_fmk9gd.png"
        imgAlt="Lowther castle"
      />
      <div className="flex flex-wrap gap-10 mt-10">
        {images.map((image) => (
          <>
            <ShopCard
              key={image.public_id}
              className="w-full md:w-[400px]"
              title={image.metadata.caption || ""}
              onlineShop={image.metadata.online == "true"}
              linkTo={image.metadata.link_to || "#"}
              imgSrc={image.image_url || "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741087977/Beaver_reredux_fmk9gd.png"} // Default image
              imgAlt={image.metadata.alt || ""}
            />
          </>
        ))}
      </div>
    </div>
  );
};

export default ShopCards;
