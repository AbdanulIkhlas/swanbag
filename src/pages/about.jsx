import React from "react";
import Navbar from "../components/Fragments/Navbar";
import SectionHeader from "../components/Elements/SectionHeader";
import Footer from "../components/Fragments/Footer";
import TextParagraph from "../components/Elements/TextParagraph";

const About = () => {
  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar></Navbar>
      <section className="mt-[42px] ml-[21px] mr-[21.5px] md:ml-[80px] md:mr-[80px] md:mt-[60px] lg:ml-[135px] lg:mr-[135px] font-Poppins">
        <div className="mb-[30px] lg:mb-[35px]">
          <SectionHeader content={["Tujuan ", "Kami"]} />
          <TextParagraph customClassname="text-justify lg:mt-8">
            Untuk menyediakan solusi belanja yang ramah lingkungan dan
            berkelanjutan, dengan mengurangi penggunaan kantong plastik sekali
            pakai. Selain itu, SwanBag bertujuan untuk menggabungkan keindahan
            budaya lokal melalui penggunaan perca batik Jambi, sekaligus
            mendukung pengrajin lokal. Dengan desain yang praktis dan stylish,
            SwanBag juga ingin meningkatkan kesadaran masyarakat akan pentingnya
            menjaga lingkungan dan mengadopsi gaya hidup yang lebih hijau dan
            bertanggung jawab.
          </TextParagraph>
        </div>
        <SectionHeader content={["Dokumentasi ", "Kami"]} />
        <div className="flex gap-4 mt-[19px] lg:mt-[35px] md:gap-8">
          <div className="lg:w-[50%] ">
            <img
              src="/images/teams/team-1.png"
              alt=""
              className=" w-[134px] h-[184px] md:w-[242px] md:h-[338px] size1024:w-[400px] size1024:h-[500px]  lg:w-full lg:h-[677px] mb-[35px]  rounded-tr-extraLarge rounded-bl-extraLarge object-center "
            />
          </div>
          <div className="flex flex-col gap-[6px] md:gap-[34px] lg:w-[50%] size1024:gap-[12px] lg:gap-[34px]">
            <img
              src="/images/teams/team-2.png"
              alt=""
              className="w-[95px]  object-center md:w-[181px] md:h-[134px] size1024:w-[300px] size1024:h-[180px] lg:w-[361px] lg:h-[273px] rounded-tr-large rounded-bl-large mr-[95px] md:mr-[133px] "
            />
            <img
              src="/images/teams/team-3.png"
              alt=""
              className="w-[172px] h-[102px] object-center md:w-full md:h-[171px] size1024:w-[460px] size1024:h-[310px]  lg:w-[635px] lg:h-[372px] rounded-br-large2 rounded-tl-large2   mr-[21px] "
            />
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default About;
