import axios from "axios";
import ShopCard from "./ShopCard";
import { useEffect, useState } from "react";

const ShopCards = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const tag = "gallery";
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}api/images/by-tag?tag=${tag}`)
      .then((res) => {
        // console.log(groupedImages);
        setImages(res.data.images);
      })
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  return (
    <div className="container mx-auto py-30 flex">
      <ShopCard
        className="w-full"
        title="Lowther Castle Shop"
        onlineShop={false}
        image={{
          src: "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741087977/Beaver_reredux_fmk9gd.png",
          alt: "Lowther castle",
        }}
      />
    </div>
  );
};

export default ShopCards;
