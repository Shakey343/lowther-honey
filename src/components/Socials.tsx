import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const links = [
  {
    link: "https://www.instagram.com/lowtherconservation/",
    icon: faInstagram,
  },
  {
    link: "https://www.facebook.com/@LowtherCastle",
    icon: faFacebookF,
  },
  {
    link: "mailto:info@lowther.co.uk",
    icon: faEnvelope,
  },
];

const Socials = () => {
  return (
    <div className="flex gap-10">
      {links.map((link, i) => (
        <a href={link.link} target="_blank" rel="noreferrer" key={i}>
          <FontAwesomeIcon
            icon={link.icon}
            size="2xl"
            className="my-3 text-gold hover:text-gold/80"
          />
        </a>
      ))}
    </div>
  );
};

export default Socials;
