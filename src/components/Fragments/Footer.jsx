import React from "react";

const Footer = () => {
  return (
    <footer className="relative py-6 w-full flex flex-col items-center bg-primary text-white font-poppins">
      <img
        src="svg/stylize-frame-2.svg"
        alt="stylize frame"
        className="absolute right-0 top-0"
      />
      <img src="images/white-logo.png" alt="logo" className="w-[169px]" />
      <div className="w-full flex gap-10 mt-4 px-5">
        {/* HUBUNGIN KAMI */}
        <div className="">
          <h1 className="text-[14px] mb-2">Hubungi Kami</h1>
          <div className="flex gap-2 items-center">
            <img src="svg/wa-icon.svg" alt="wa" className="w-[24px]" />
            <p className="text-[12px]">0895-6208-15794</p>
          </div>
          <div className="flex gap-2 items-center mt-1">
            <img src="svg/phone-icon.svg" alt="phone" className="w-[24px]" />
            <p className="text-[12px]">0895-6208-15794</p>
          </div>
        </div>

        {/* SOCIAL MEDIA */}
        <div>
          <h1 className="text-[14px] mb-2">Social Media</h1>
          <div className="flex gap-4 items-center">
            <a href="https://id.shp.ee/BEfJANp" target="_blank">
              <img
                src="svg/shoppe-icon.svg"
                alt="shoppe"
                className="w-[24px]"
              />
            </a>
            <a
              href="https://www.tiktok.com/@swanbag.id?_t=8pRUFzyzfd4&_r=1"
              target="_blank"
            >
              <img
                src="svg/tiktok-icon.svg"
                alt="tiktok"
                className="w-[23px]"
              />
            </a>
            <a
              href="https://www.instagram.com/swanbag.id?igsh=bjd5Mnd0Ymh2bXRx&utm_source=qr"
              target="_blank"
            >
              <img
                src="svg/instagram-icon.svg"
                alt="instagram"
                className="w-[26px]"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 px-5">
        {/* JAM KERJA */}
        <h1 className="text-[14px] mb-2">JAM KERJA</h1>
        <div className="flex gap-1">
          <p className="text-[12px] w-[80px]">Senin-Jumat</p>
          <p className="text-[12px]">:</p>
          <p className="text-[12px]">09.00 - 18.00</p>
        </div>
        <div className="flex gap-1">
          <p className="text-[12px] w-[80px]">Sabtu</p>
          <p className="text-[12px]">:</p>
          <p className="text-[12px]">09.00 - 12.00</p>
        </div>
      </div>
      <div className="w-full mt-10 p-5">
        <div className="w-full border border-[#FEC947]"></div>
      </div>
    </footer>
  );
};

export default Footer;
