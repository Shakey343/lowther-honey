import ShopCard from "./ShopCard";

const ShopCards = () => {
  return (
    <div className="container mx-auto py-30 flex">
      <ShopCard className="w-full" title="Lowther Castle Shop" onlineShop={false} />
    </div>
  );
};

export default ShopCards;
