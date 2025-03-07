import Socials from "./Socials";

const Footer = () => {
  return (
    <div
        className="px-[80px] py-[32px] bg-garnet font-sserif text-gold flex flex-col lg:flex-row justify-between"
        id="contact"
      >
        <div className="text-jonquil lg:w-1/4 w-full text-center lg:text-left my-8">
          <h2 className="text-[32px] font-light mb-[20px]">Contact us</h2>
          <p className="leading-relaxed">
            Lowther Farming Partnership
            <br />
            Lowther Castle
            <br />
            Penrith
            <br />
            CA10 2HH
          </p>
          <p className="mt-4">Email: <a href="mailto:info@lowther.co.uk" className="font-bold hover:opacity-80">info@lowther.co.uk</a></p>
        </div>
        <div className="flex flex-col justify-end gap-[6px] items-center text-white lg:w-1/2 w-full lg:h-[340px] my-8 lg:mb-0">
          <Socials />
          <div className="text-center text-gold">
            <p className="font-light">
              &copy; 2024 Lowther Farming Partnership.
            </p>
            <p className="text-[12px]">
              Made with ❤️ by{" "}
              <a
                href="https://github.com/Shakey343"
                target="_blank"
                className="font-medium hover:text-jonquil transition-all"
              >
                Jake Pople
              </a>
            </p>
          </div>
        </div>
        <div className="text-jonquil lg:w-1/4 w-full flex flex-col items-center lg:items-start order-first lg:order-none my-8">
          {/* <Subscribe /> */}
        </div>
      </div>
  )
}
export default Footer;
