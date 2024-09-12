import React from "react";
import Navbar from "../components/Fragments/Navbar";
import SectionHeader from "../components/Elements/SectionHeader";
import TextParagraph from "../components/Elements/TextParagraph";
import { productsAdvantages } from "../utils/productsAdvantages";
import products from "../utils/products";
import CardProducts from "../components/Fragments/CardProducts";
import Pagination from "../components/Fragments/Pagination";
import { testimoni } from "../utils/testimoni";
import Caraousel from "../components/Fragments/Caraousel";
import Footer from "../components/Fragments/Footer";

const Product = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col font-poppins min-h-screen">
        {/* SECTION 1 : TENTANG PRODUK */}
        <section className="relative flex flex-col mt-[50px] md:mt-[70px] md:h-[300px] size1024:h-[400px] lg:h-screen">
          <div className="md:flex md:px-20 md:w-full md:justify-between lg:px-[134px] lg:mt-10">
            <div className="px-5 md:px-0 md:w-[45%] lg:pe-10 ">
              <SectionHeader content={["Tentang", "Produk"]} />
              <TextParagraph customClassname="text-justify lg:mt-8">
                SwanBag adalah sebuah produk tas eco-bag yang ramah lingkungan
                yang dirancang khusus untuk mengurangi penggunaan kantong
                plastik. Terbuat dari bahan polyester ramah lingkungan dan
                dikombinasikan dengan limbah tekstil batik khas Jambi, SwanBag
                tidak hanya bertujuan untuk menawarkan solusi berkelanjutan bagi
                kebutuhan tas sehari-hari tetapi juga untuk mempromosikan
                warisan budaya lokal.
              </TextParagraph>
            </div>
            <div className="p-9 md:p-0 md:w-[45%] size1024:flex size1024:justify-start">
              <img
                src="images/product-image-bag-1.png"
                alt="Image Bag"
                className="w-full size1024:w-[360px] lg:w-[460px]"
              />
            </div>
          </div>
          <img
            src="images/beranda-bg4.png"
            alt="bg pink"
            className="absolute w-full bottom-0 rotate-180 -z-10 md:hidden"
          />
          <img
            src="images/beranda-bg4.1.png"
            alt="bg pink"
            className="absolute hidden w-full bottom-0 rotate-180 -z-10 md:block"
          />
        </section>

        {/* SECTION 2 : KELEBIHAN */}
        <section className="pb-4 lg:py-5">
          <div className="px-5 mt-5 md:px-20 md:flex md:flex-col md:items-center md:mt-8 lg:px-[134px] lg:mt-6">
            <SectionHeader content={["Kelebihan", "Produk"]} />
            <TextParagraph customClassname="text-justify md:text-center lg:mt-5 lg:px-48">
              SwanBag kini hadir dengan inovasi baru, memungkinkan tas ini
              dilipat menjadi mini pouch yang fleksibel dan praktis. Ini
              memudahkan Anda untuk menyimpannya di tas atau saku dan membawanya
              ke mana saja tanpa repot
            </TextParagraph>
          </div>
          <div className="px-5 mt-3 size1024:flex size1024:px-8 size1024:mt-8 lg:mt-10 lg:justify-center lg:px-20">
            {productsAdvantages.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center px-5 py-5 "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="size1024:w-16"
                />
                <h1 className="font-bold mt-3 text-center text-[14px] size1024:text-[17px] lg:mb-1 lg:mt-5">
                  {item.title}
                </h1>
                <TextParagraph customClassname="text-center px-4 md:px-28 size1024:px-0 lg:text-[18px] lg:h-[80px] w-full">
                  {item.description}
                </TextParagraph>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 : SWANBAG PRODUK */}
        <section className="relative">
          <img
            src="images/beranda-bg4.png"
            alt="bg pink"
            className="absolute w-full top-0 -z-10 md:hidden"
          />
          <img
            src="images/beranda-bg4.1.png"
            alt="bg pink"
            className="absolute hidden w-full top-0 -z-10 md:block"
          />
          <div className="px-5 pb-6 md:px-20 md:my-4 lg:px-[134px] lg:pb-16">
            <div className="py-7">
              <SectionHeader content={["Swanbag", "Produk"]} />
            </div>
            <Pagination data={products} CardComponent={CardProducts} />
          </div>
        </section>

        {/* SECTION 4 : TESTIMONI */}
        <section className="bg-[#e645140a] pb-12 lg:px-[134px] lg:relative lg:bg-[#e6451400]">
          <div className="px-5 py-7 mb-4 md:flex md:justify-center md:my-5 md:px-20">
            <SectionHeader content={["Testimoni", "Pelanggan"]} />
          </div>
          <img
            src="svg/stylize-frame-3.svg"
            alt="styling"
            className="absolute hidden lg:block top-52 right-0"
          />
          <img
            src="images/beranda-bg4.1.png"
            alt="bg pink"
            className="absolute hidden w-full top-0 left-0 -z-10 lg:block"
          />
          <div className="">
            <Caraousel
              data={testimoni}
              srcLeftButtonPath="svg/arrow-left.svg"
              srcRightButtonPath="svg/arrow-right.svg"
              chooseFragment="testimoni"
            />
          </div>
        </section>

        {/* FOOTER */}
        <Footer />
      </div>
    </>
  );
};

export default Product;
