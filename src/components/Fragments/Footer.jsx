import React from "react";

const Footer = () => {
  return (
    <footer
      className="relative py-6 w-full flex flex-col items-center bg-primary text-white font-poppins md:items-start md:px-20 
    lg:px-[134px]"
    >
      <img
        src="svg/stylize-frame-2.svg"
        alt="stylize frame"
        className="absolute right-0 top-0 lg:hidden"
      />
      <img
        src="svg/stylize-frame-4.svg"
        alt="stylize frame"
        className="hidden absolute right-0 top-0 lg:block"
      />
      <img src="images/white-logo.png" alt="logo" className="w-[169px]" />
      <div className="md:w-full md:flex md:justify-between md:items-center size1024:justify-start size1024:gap-8 lg:gap-28">
        <div className="w-full flex gap-10 mt-4 px-5 md:w-[60%] md:gap-12 size1024:w-[45%] size1024:gap-16 lg:gap-40 lg:w-[40%]">
          {/* HUBUNGIN KAMI */}
          <div className="">
            <h1 className="text-[14px] mb-2 lg:text-[20px]">Hubungi Kami</h1>
            <div className="flex gap-2 items-center lg:items-start">
              <img src="svg/wa-icon.svg" alt="wa" className="w-[24px]" />
              <div>
                <p className="hidden lg:block text-[12px] lg:text-[16px]">Whatsapp</p>
                <p className="text-[12px] lg:text-[16px]">0895-6208-15794</p>
              </div>
            </div>
            <div className="flex gap-2 items-center lg:items-start mt-1">
              <img src="svg/phone-icon.svg" alt="phone" className="w-[24px]" />
              <div>
                <p className="hidden lg:block text-[12px] lg:text-[16px]">Nomor Telepon</p>
                <p className="text-[12px] lg:text-[16px]">0895-6208-15794</p>
              </div>
            </div>
          </div>

          {/* SOCIAL MEDIA */}
          <div className="">
            <h1 className="text-[14px] mb-2 lg:text-[20px]">Social Media</h1>
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
        <div className="w-full mt-12 px-5 md:mt-0  md:w-[40%] size1024:w-[45%] size1024:h-[90px] lg:h-[120px] ">
          {/* JAM KERJA */}
          <h1 className="text-[14px] mb-2 lg:text-[20px]">JAM KERJA</h1>
          <div className="flex gap-1 lg:w-full">
            <p className="text-[12px] lg:text-[16px] w-[80px] lg:w-[110px]">
              Senin-Jumat
            </p>
            <p className="text-[12px] lg:text-[16px]">:</p>
            <p className="text-[12px] lg:text-[16px]">09.00 - 18.00</p>
          </div>
          <div className="flex gap-1 lg:w-full">
            <p className="text-[12px] lg:text-[16px] w-[80px] lg:w-[110px]">
              Sabtu
            </p>
            <p className="text-[12px] lg:text-[16px]">:</p>
            <p className="text-[12px] lg:text-[16px]">09.00 - 12.00</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-10 p-5">
        <div className="w-full border border-[#FEC947]"></div>
      </div>
    </footer>
  );
};

export default Footer;
