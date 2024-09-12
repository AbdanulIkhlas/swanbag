import SectionHeader from "../components/Elements/SectionHeader";
import CardProducts from "../components/Fragments/CardProducts";
import Navbar from "../components/Fragments/Navbar";
import TeamImageCarousel from "../components/Fragments/TeamImageCarousel";
import products from "../utils/products";
import Footer from "../components/Fragments/Footer";
import { testimoni } from "../utils/testimoni";
import Caraousel from "../components/Fragments/Caraousel";

const images = [
  { id: 1, src: "images/teams/team-1.png", alt: "Image 1" },
  { id: 2, src: "images/teams/team-2.png", alt: "Image 2" },
  { id: 3, src: "images/teams/team-3.png", alt: "Image 3" },
];

const Home = () => {
  // const [productsList, setProductsList] = useState(products);
  return (
    <div className="flex flex-col font-poppins min-h-screen">
      <Navbar></Navbar>
      <section className="relative flex flex-col justify-center items-center mt-14 md:0 overflow-hidden md:flex-row md:justify-between md:pl-[134px]">
        <div className="flex flex-col justify-center items-center md:w-[567px] ">
          <h1 className="font-bold text-2xl text-center mx-14 md:text-[58px] md:mx-0 md:leading-snug md:text-left text-shadow">
            IT’S <span className="text-primary">TIME</span> TO TAKE{" "}
            <span className="text-primary">CARE</span> OF THE EARTH
          </h1>
          <p className="text-xs text-center mx-5 px-5 mb-7 md:mb-24 mt-5 md:text-xl md:text-left md:px-0 md:mx-0 md:pr-20 md:leading-relaxed">
            Di desain dengan bahan yang ramah lingkungan yang bertujuan sebagai
            alternatif pengganti kantong plastik dan Tas Fashion
          </p>
          <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-2.5 w-[127px] md:w-full ">
            <button className="btn bg-primary mt-5 md:mt-0 text-xs md:text-lg py-3 md:py-4 px-6 md:px-10 text-white font-bold rounded-[10px] md:rounded-[15px]">
              Beli Produk
            </button>
            <button className="btn bg-white text-xs md:text-lg py-3 md:py-4 px-6 md:px-10 text-black font-bold rounded-[10px] md:rounded-[15px] border-[1px] border-primary">
              Beli Produk
            </button>
          </div>
        </div>
        <div>
          <img
            src="images/beranda-bag1.1.png"
            alt=""
            className="h-[222px] w-[200px] md:h-[527px] md:w-[600px] mt-10 mb-10 md:pl-20"
          />
        </div>
        <div className="">
          <img
            src="images/beranda-bg1.png"
            alt=""
            className="absolute w-[851px] h-[893px] -z-10 top-36 md:top-32 left-72 md:left-[68rem] scale-x-[2] md:scale-[2]"
          />
          <img
            src="images/beranda-bg3.png"
            alt=""
            className="absolute w-[1195px] h-[1455px] -z-10 -left-24 md:-left-[28rem] md:-rotate-12 top-64 md:top-[22rem] scale-x-[4] md:scale-[1.5]"
          />
        </div>
        {/* <div className="relative"> */}
        {/* <img src="images/beranda-bg1.png" alt="" className="w-full h-auto object-contain absolute -top-24 -z-10 rotate-12" /> */}
        {/* <img src="images/beranda-bg3.png" alt="" className="w-[851px] h-[893px] absolute top-9 rotate-90 -z-10 object-contain" /> */}
      </section>
      {/* section 2 */}
      <section className="relative">
        <img
          src="images/beranda-bg4.png"
          alt=""
          className="absolute -z-10 md:hidden"
        />
        <img
          src="images/beranda-bg4.1.png"
          alt=""
          className="absolute -z-10 sm:hidden md:block"
        />
        <div className="px-5 pt-12 md:flex md:flex-row-reverse md:justify-center md:items-center md:px-[135px] md:mb-12">
          <div className="md:pl-16">
            <SectionHeader content={["Tentang ", "Produk"]} />
            <p className="text-xs text-justify sm:hidden md:block md:w-[733px] md:text-xl md:pt-2">
              SwanBag adalah sebuah produk tas eco-bag yang ramah lingkungan
              yang dirancang khusus untuk mengurangi penggunaan kantong plastik.
              Terbuat dari bahan polyester ramah lingkungan dan dikombinasikan
              dengan limbah tekstil batik khas Jambi, SwanBag tidak hanya
              bertujuan untuk menawarkan solusi berkelanjutan bagi kebutuhan tas
              sehari-hari tetapi juga untuk mempromosikan warisan budaya lokal.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center  mt-12">
            <img
              src="images/beranda-bag2.png"
              alt=""
              className="h-[223px] w-[196px] md:h-[388px] md:w-[371px] mb-8"
            />
            <p className="text-xs text-justify md:hidden">
              SwanBag adalah sebuah produk tas eco-bag yang ramah lingkungan
              yang dirancang khusus untuk mengurangi penggunaan kantong plastik.
              Terbuat dari bahan polyester ramah lingkungan dan dikombinasikan
              dengan limbah tekstil batik khas Jambi, SwanBag tidak hanya
              bertujuan untuk menawarkan solusi berkelanjutan bagi kebutuhan tas
              sehari-hari tetapi juga untuk mempromosikan warisan budaya lokal.
            </p>
          </div>
        </div>
      </section>
      <section className="relative">
        <img
          src="images/beranda-bg4.png"
          alt=""
          className="absolute -z-10 rotate-180 bottom-0 md:hidden"
        />
        <img
          src="images/beranda-bg4.1.png"
          alt=""
          className="absolute -z-10 rotate-180 bottom-0 sm:hidden md:block"
        />
        <div className="px-5 pb-12 md:pb-20 pt-7 md:pt-12 md:px-[135px]">
          <SectionHeader content={["Swanbag ", "Produk"]} />
          <div className="flex flex-col justify-center items-center mt-7">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {products.map((product) => (
                <CardProducts key={product.id} data={product} />
              ))}
            </div>
            <button className="btn bg-white text-xs md:text-base py-2 md:py-3 px-4 md:px-10 mt-9 text-primary font-bold rounded-[10px] md:rounded-[15px] border-[1px] border-primary">
              Lihat Selengkapnya
            </button>
          </div>
        </div>
      </section>
      <section className="pb-8 md:pb-60 border border-black">
        <div className="px-5 pt-8 md:pt-[130px] md:pl-[135px] md:flex md:flex-row">
          <div className="md:w-[437px]">
            <SectionHeader content={["Tim ", "Kami"]} />
            <p className="sm:hidden md:block text-xl pr-12 text-justify md:pt-3">
              Kami mengajak Anda untuk menjadi bagian dari perubahan. Dengan
              memilih SwanBag sebagai alternatif tas plastik dan fashion, Anda
              tidak hanya mendapatkan produk berkualitas tetapi juga membantu
              mengurangi limbah tekstil dari sisa batik dan mendukung produk
              lokal. Mari bersama-sama menciptakan dampak positif bagi
              lingkungan dan komunitas kita.
            </p>
          </div>
          <div className="mt-8 md:scale-150 md:origin-top-left md:-translate-y-7">
            <TeamImageCarousel images={images} />
          </div>
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
      <Footer />
    </div>
  );
};

export default Home;
