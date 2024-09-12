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

const Product = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col font-Poppins pb-[500px]">
        {/* SECTION 1 : TENTANG PRODUK */}
        <section className="relative flex flex-col mt-[50px] md:mt-[70px] md:h-[300px]">
          <div className="md:flex md:px-20 md:w-full md:justify-between">
            <div className="px-5 md:px-0 md:w-[50%]">
              <SectionHeader content={["TENTANG", "PRODUK"]} />
              <TextParagraph customClassname="text-justify ">
                SwanBag adalah sebuah produk tas eco-bag yang ramah lingkungan
                yang dirancang khusus untuk mengurangi penggunaan kantong
                plastik. Terbuat dari bahan polyester ramah lingkungan dan
                dikombinasikan dengan limbah tekstil batik khas Jambi, SwanBag
                tidak hanya bertujuan untuk menawarkan solusi berkelanjutan bagi
                kebutuhan tas sehari-hari tetapi juga untuk mempromosikan
                warisan budaya lokal.
              </TextParagraph>
            </div>
            <div className="p-9 md:p-0 md:w-[45%]">
              <img
                src="images/product-image-bag-1.png"
                alt="Image Bag"
                className="w-full"
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
        <section className="pb-4">
          <div className="px-5 mt-5">
            <SectionHeader content={["KELEBIHAN", "PRODUK"]} />
            <TextParagraph customClassname="text-justify ">
              SwanBag kini hadir dengan inovasi baru, memungkinkan tas ini
              dilipat menjadi mini pouch yang fleksibel dan praktis. Ini
              memudahkan Anda untuk menyimpannya di tas atau saku dan membawanya
              ke mana saja tanpa repot
            </TextParagraph>
          </div>
          <div className="px-5 mt-3">
            {productsAdvantages.map((item) => (
              <div
                key={item.id}
                className="flex flex-col items-center justify-center px-5 py-5"
              >
                <img src={item.image} alt={item.title} />
                <h1 className="font-bold mt-3 text-center text-[14px]">
                  {item.title}
                </h1>
                <TextParagraph customClassname="text-center px-4">
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
          <div className="px-5 pb-6">
            <div className="py-7">
              <SectionHeader content={["SWANBAG", "PRODUK"]} />
            </div>
            <Pagination data={products} CardComponent={CardProducts} />
          </div>
        </section>
        {/* SECTION 4 : TESTIMONI */}
        <section className="bg-[#e645140a] pb-12">
          <div className="px-5">
            <div className="py-7 mb-4">
              <SectionHeader content={["TESTIMONI", "PELANGGAN"]} />
            </div>
          </div>
          <Caraousel
            data={testimoni}
            srcLeftButtonPath="svg/arrow-left.svg"
            srcRightButtonPath="svg/arrow-right.svg"
            chooseFragment="testimoni"
          />
        </section>
      </div>
    </>
  );
};

export default Product;
