import cn from "../utils/cn";
import Button from "./Button";

const ShopCard = ({
  className,
  title,
  onlineShop,
  image,
}: {
  className: string;
  title: string;
  onlineShop: boolean;
  image: { src: string; alt: string };
}) => {
  return (
    <div className={cn("h-[400px] bg-amber-50 shadow-lg", className)}>
      <img src={image.src} alt={image.alt} className="h-[300px] w-full object-cover" />
      <div
        className={cn(
          "h-[100px] w-full px-10 flex items-center justify-between",
          onlineShop ? "bg-pink" : "bg-blue"
        )}
      >
        <p className="text-white">{title}</p>
        <Button
          className={cn(
            "h-fit py-3 px-5",
            onlineShop ? "bg-pink hover:text-pink" : "bg-blue"
          )}
        >
          {onlineShop ? "Buy online" : "Sold here"}
        </Button>
      </div>
    </div>
  );
};

export default ShopCard;
