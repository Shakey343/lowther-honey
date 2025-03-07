import cn from "../utils/cn";
import { isMobile } from "react-device-detect";

const sections: {
  heading: string;
  description: string;
  imgUrl: string;
  imgDesc: string;
  color: string;
}[] = [
  {
    heading: "THE PEOPLE",
    description:
      "It was Jim Lowther - owner of Lowther Castle & Gardens - who set up the Lake District Honey Co. A passionate bee-keeper and devoted student of the bee, he began with 2 hives in 2011. In 2018, he decided to go public and sell home-produced honey from home-grown bees to the people of Cumbria and beyond.\nNot only does Jim harvest and bottle the honey himself but he also makes the hives, in his workshop at his Lakeland farmhouse. Just one bee-keeper supports Jim, (a former Bee-Farmers' Association apprentice), making the Lake District Honey Co. a true cottage industry.",
    imgUrl: "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741349269/The_People_for_website_ygfqup.jpg",
    imgDesc: "A bee keeper caring for the Lowther bees.",
    color: "bg-blue"
  },
  {
    heading: "THE PLACE",
    description:
      "Lowther bees live in (c.500) hives on a range of northern upland and lowland sites.In spring, the hives are placed in the Eden Valley; in summer, some are moved to the Lowther Valley (in and around the grounds of Lowther Castle) while others visit the Pennine moors for the August heather bloom.\nThe Lowther Estate has been in existence as such since the 11th century. Much of the land is on limestone and the range of flora for the bees to forage is rich.",
    imgUrl: "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741349270/The_Place_website_Multivista_n44uwf.jpg",
    imgDesc: "Birds-eye view of Lowther Castle and Gardens.",
    color: "bg-pink"
  },
  {
    heading: "THE RATIONALE",
    description:
      "Jim Lowther's passion for bees coincided with his growing interest in a more environmentally sound approach to land management. The intensive farming practices that had been adopted at Lowther since the war were cast aside and a programme of nature-friendly husbandry was adopted. Lowther is at the heart of one of the largest such programmes in the UK.\nLake District Honey is not just good. It is derived from land that is free of chemicals and growing in biodiversity and species richness.",
    imgUrl: "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741018370/The_Rationale_for_website_2_pysoe5.jpg",
    imgDesc: "Cow in a field of daisies.",
    color: "bg-yellow"
  },
  {
    heading: "THE HONEY",
    description:
      "Every jar of Lake District Honey captures the flavours of the upland and lowland blossoms the Lowther bees pollinate – heather, hawthorn and dandelion being among their sources of nectar. When it comes to harvesting, the rules applied are rigorous. The honey is collected from one site, then bottled. There is no blending between batches.\nIt is because the Lake District Co. honeys can be traced to the precise area of land where the nectar is gathered that their authenticity and premium quality can be vouched for. Provenance in honey is everything.",
    imgUrl: "https://res.cloudinary.com/dcrdxjfgg/image/upload/v1741349269/The_Honey_website_hg5ts3.jpg",
    imgDesc: "Honeycombe from a beehive",
    color: "bg-teal"
  },
];

const Sections = () => {
  return (
    <div>
      {sections.map((section, i) => (
        <div
          className={cn(
            "flex h-fit lg:h-[640px]",
            i % 2 === 0 ? "" : "flex-row-reverse",
            isMobile ? "flex-col-reverse w-screen h-fit" : ""
          )}
          key={i}
        >
          <div className={cn("md:w-1/2 py-[100px] px-[80px] flex flex-col justify-evenly", section.color)}>
            <h3 className="text-[32px] font-bold tracking-wide underline underline-offset-8 decoration-garnet mb-8 md:mb-3">
              {section.heading.toUpperCase()}
            </h3>
            <div>
              {section.description.split("\n").map((sentence, i) => {
                return (
                  <div key={i}>
                    <p>{sentence}</p>
                    <br />
                  </div>
                );
              })}
            </div>
            {/* <Button className="">More details</Button> */}
          </div>
          <img
            src={section.imgUrl}
            alt={section.imgDesc}
            className="md:w-1/2 object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default Sections;
