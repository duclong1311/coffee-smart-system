import Header from "../../partial/Header";
import Banner from "../../partial/Banner";
import Footer from "../../partial/Footer";

import imgae1 from "../../../assets/images/243-min-1.jpg";
import imgae2 from "../../../assets/images/img-home-12.jpg";
import imgae3 from "../../../assets/images/img-home-13.jpg";
import imgae4 from "../../../assets/images/img-home-11.jpg";
import imgae5 from "../../../assets/images/images-29.jpg";
import imgae6 from "../../../assets/images/images-25-min-1.jpg";
import imgae7 from "../../../assets/images/images-28-min-1.jpg";
import imgae8 from "../../../assets/images/images-27-min-1.jpg";
import imgae9 from "../../../assets/images/images-26-min.jpg";
import imgae10 from "../../../assets/images/300.png";
import imgae11 from "../../../assets/images/images-30-min-370x370.jpg";
import imgae12 from "../../../assets/images/images-31-min-370x370.jpg";
import imgae13 from "../../../assets/images/images-32-min-370x370.jpg";
import imgae14 from "../../../assets/images/images-33-min-370x370.jpg";
import imgae15 from "../../../assets/images/images-34-min-370x370.jpg";
import imgae16 from "../../../assets/images/images-35-min-370x370.jpg";



import { BiCoffeeTogo } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-36 md:py-32">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={imgae1}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={imgae2}
              alt="Coffee machine"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:text-left space-y-4">
          <h3 className="text-sm font-semibold text-[#b98d58] uppercase ">
            Cửa hàng
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333]  pb-3">
            Chúng tôi kết hợp giữa cổ điển và hiện đại
          </h2>
          <p className="text-[#888682] text-base">
            Chúng tôi rất trân quý sự tin tưởng của bạn. Khách hàng chọn chúng
            tôi và sản phẩm của chúng tôi vì họ tin tưởng vào chất lượng hàng
            đầu mà chúng tôi mang lại
          </p>
          <div className="flex flex-col space-y-1 text-[#333] text-base">
            <p>
              <span className="font-semibold">Thứ hai - Thứ 6:</span> 9 AM – 22
              PM
            </p>
            <p>
              <span className="font-semibold">Thứ bảy:</span> 9 AM – 20 PM
            </p>
          </div>
          <button className="mt-4 px-8 py-4 bg-[#B4BB6B] text-white font-medium rounded-full hover:bg-[#9FA753] transition duration-300">
            Về chúng tôi
          </button>
        </div>
      </div>

      <div className="bg-[#F9F4EC] px-6 py-16 md:py-32">
        <h3 className="text-sm font-semibold text-[#b98d58] uppercase text-center">
          Thực đơn
        </h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#333] text-center pt-5">
          Món đặc biệt
        </h2>
        <div className="flex flex-col md:flex-row pt-12 md:px-36 gap-y-8 md:gap-x-8">
          <div className="w-full md:w-1/2 flex flex-col gap-y-8">
            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold">Espresso</span>
                <span className="text-end font-semibold">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex flex-col gap-y-8">
            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>

            <div className="gap-y-5">
              <div className="flex justify-between text-[#333] text-xl">
                <span className="text-start font-semibold ">Espresso</span>
                <span className="text-end font-semibold ">120,000 VND</span>
              </div>
              <p className="text-[#888682] text-base">
                Một phần nhỏ (30 ml) cà phê nguyên chất, đậm đà, thơm ngon
              </p>
            </div>
          </div>
        </div>



      </div>

      <div className="grid grid-cols-5 grid-rows-6 gap-0">
        <div className="col-span-3 row-span-6 overflow-hidden">
          <img
            src={imgae5}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-4 overflow-hidden">
          <img
            src={imgae6}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-5 overflow-hidden">
          <img
            src={imgae7}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-4 row-start-4 overflow-hidden">
          <img
            src={imgae8}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-4 overflow-hidden">
          <img
            src={imgae9}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F4EE] py-20 md:pt-32 md:pb-52 px-6 md:px-36">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={imgae3}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={imgae4}
              alt="Coffee machine"
              className="w-full h-full object-cover hidden md:block"
            />
          </div>
        </div>

        <div className="md:w-1/2 md:text-left items-center">
          <h3 className="text-sm font-semibold text-[#b98d58] uppercase pb-3">
            Hãy đến và trải nghiệm cùng chúng tôi
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333] pt-3 pb-5">
            Thưởng thức hương vị cà phê đậm đà nguyên bản
          </h2>
          <p className="text-[#888682] text-base pt-3">
            Mang đến hương vị nguyên bản với từng tách cà phê, được pha chế từ
            những hạt cà phê chất lượng cao, rang xay tỉ mỉ để giữ trọn vẹn
            hương thơm và vị đậm đà tự nhiên. Hãy để mỗi ngụm cà phê là một trải
            nghiệm thư giãn và trọn vẹn dành riêng cho bạn
          </p>
          <div className="flex text-[#333] text-base pt-8">
            <BiCoffeeTogo className="text-[#B4BB6B] text-6xl me-5" />
            <div className="w-5/6 text-[#333]">
              <h3 className="font-semibold mb-2">Thực Đơn Đa Dạng</h3>
              <p className="text-[#888682]">
                Thực đơn của chúng tôi đa dạng với các loại cà phê đặc biệt, từ
                espresso mạnh mẽ đến cappuccino mượt mà, mỗi loại đều mang đến
                hương vị độc đáo, phù hợp với mọi sở thích của bạn
              </p>
            </div>
          </div>

          <div className="flex text-[#333] text-base pt-8">
            <MdOutlineCoffeeMaker className="text-[#B4BB6B] text-6xl me-5" />
            <div className="w-5/6 text-[#333]">
              <h3 className="font-semibold mb-2">Cà Phê Sạch Từ Thiên Nhiên</h3>
              <p className="text-[#888682]">
                Cà phê hữu cơ của chúng tôi được trồng và chăm sóc tự nhiên,
                mang đến hương vị tinh khiết và đậm đà, hoàn hảo cho những ai
                yêu thích sự thuần khiết từ thiên nhiên
              </p>
            </div>
          </div>
        </div>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-8 gap-10 py-12 px-6 md:px-36 md:py-32 text-[#333]">
        {/* Tiêu đề */}
        <div className="col-span-1 md:col-span-4">
          <h3 className="text-sm font-semibold text-[#b98d58] uppercase pb-5">
            Liên hệ
          </h3>
          <h2 className="text-3xl md:text-4xl font-semibold text-[#333]">
            Liên hệ với chúng tôi
          </h2>
        </div>

        {/* Ảnh */}
        <div className="col-span-1 md:col-start-8 md:col-span-1 group overflow-hidden relative mb-6 md:mb-0">
          <img
            src={imgae10}
            alt="Coffee machine"
            className="w-full h-full object-contain transition-all duration-500 ease-out transform group-hover:translate-x-4 group-hover:translate-y-4"
          />
        </div>

        {/* Mô tả */}
        <div className="col-span-1 md:col-span-4 text-[#888682] md:text-lg">
          <p>
            Chúng tôi mời bạn đến thưởng thức những ly cà phê tuyệt hảo của chúng tôi mỗi ngày, được pha chế đặc biệt dành riêng cho bạn. Hãy thưởng thức một ly espresso, flat white hoặc cappuccino ngon miệng tại không gian ấm cúng của chúng tôi.
          </p>
        </div>

        {/* Địa chỉ 1 */}
        <div className="col-span-1 md:col-span-2 md:col-start-5 text-[#888682]">
          <table className="w-full">
            <tr>
              <td><FaMapMarkerAlt className="text-2xl inline-block text-[#333]" /></td>
              <td>
                <span className="text-2xl ms-4 text-[#333]">Địa chỉ</span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <p className="ms-4 mb-1">CN1: Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội, Việt Nam</p>
                <p className="ms-4">CN2: Toà nhà Lữ Gia, 70 Lữ Gia, phường 15, quận 11, TP. HCM, Việt Nam</p>
              </td>
            </tr>
          </table>
        </div>

        {/* Liên hệ */}
        <div className="col-span-1 md:col-span-2 md:col-start-7 text-[#888682]">
          <table className="w-full">
            <tr>
              <td><IoPhonePortraitOutline className="text-2xl inline-block text-[#333]" /></td>
              <td>
                <span className="text-2xl ms-4 text-[#333]">Thông tin liên hệ</span>
              </td>
            </tr>
            <tr>
              <td></td>
              <td>
                <p className="ms-4 mb-1">info@yoursite.com</p>
                <p className="ms-4">0364402449</p>
              </td>
            </tr>
          </table>
        </div>
      </div>







      <div className="grid grid-cols-6 grid-rows-1 gap-0">
        <div >
          <img
            src={imgae11}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={imgae12}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={imgae13}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={imgae14}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={imgae15}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={imgae16}
            className="w-full h-full object-cover"
          />
        </div>
      </div >


      <Footer />
    </>
  );
}
