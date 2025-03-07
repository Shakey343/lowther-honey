import cn from "../utils/cn";
import Button from "./Button";

const ShopCard = ({
  className,
  title,
  onlineShop,
  imgSrc,
  imgAlt,
  linkTo,
}: {
  className: string;
  title: string;
  onlineShop: boolean;
  imgSrc: string;
  imgAlt: string;
  linkTo: string;
}) => {
  return (
    <a
      className={cn(
        "h-[400px] bg-amber-50 shadow-lg cursor-pointer group",
        className
      )}
      href={linkTo}
      target="_blank"
    >
      <div className={cn("group-hover:ring-4 transition-all", onlineShop ? "ring-pink" : "ring-blue")}>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="h-[300px] w-full object-cover"
        />
        <div
          className={cn(
            "h-[100px] w-full px-10 flex items-center justify-between",
            onlineShop ? "bg-pink" : "bg-blue"
          )}
        >
          <p className="text-yellow text-xl">{title}</p>
          <Button
            className={cn(
              "h-fit py-3 px-5 group-hover:bg-yellow",
              onlineShop
                ? "bg-pink group-hover:text-pink hover:text-pink"
                : "bg-blue group-hover:text-blue"
            )}
          >
            {onlineShop ? "Buy online" : "Sold here"}
          </Button>
        </div>
      </div>
    </a>
  );
};

export default ShopCard;
