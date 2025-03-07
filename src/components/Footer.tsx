const Footer = () => {
  return (
    <div className="bg-night/80 text-gold py-8">
      <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-between items-center h-full container mx-auto">
        <a href="mailto:honey.enquiries@lowther.co.uk?subject=Honey%20Enquiry" target="_blank" title="Email" className="hover:opacity-60">
          <p className="text-xl md:text-3xl">honey.enquiries@lowther.co.uk</p>
        </a>
        <p className="font-mono text-xs sm:text-sm">Copyright © 2025 <a href="https://github.com/shakey343" target="_blank" rel="noreferrer" className="hover:text-teal transition"><strong>Jake Pople</strong></a></p>
      </div>
    </div>
  )
};

export default Footer;
