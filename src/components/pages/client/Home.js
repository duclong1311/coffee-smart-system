import Header from "../../partial/Header";
import Banner from "../../partial/Banner";
import Footer from "../../partial/Footer";

import image1 from "../../../assets/images/243-min-1.jpg";
import image2 from "../../../assets/images/img-home-12.jpg";
import image3 from "../../../assets/images/img-home-13.jpg";
import image4 from "../../../assets/images/img-home-11.jpg";
import image5 from "../../../assets/images/images-29.jpg";
import image6 from "../../../assets/images/images-25-min-1.jpg";
import image7 from "../../../assets/images/images-28-min-1.jpg";
import image8 from "../../../assets/images/images-27-min-1.jpg";
import image9 from "../../../assets/images/images-26-min.jpg";
import image10 from "../../../assets/images/300.png";
import image11 from "../../../assets/images/images-30-min-370x370.jpg";
import image12 from "../../../assets/images/images-31-min-370x370.jpg";
import image13 from "../../../assets/images/images-32-min-370x370.jpg";
import image14 from "../../../assets/images/images-33-min-370x370.jpg";
import image15 from "../../../assets/images/images-34-min-370x370.jpg";
import image16 from "../../../assets/images/images-35-min-370x370.jpg";



import { BiCoffeeTogo } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineCoffeeMaker } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";

export function Home() {

  const SpecialMenuItem = ({ image, name, price }) => (
    <div className="relative m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
      <a className="relative mx-3 mt-3 flex h-72 overflow-hidden rounded-xl" href="#">
        <img className="w-full bg-[#f6f5f5] object-cover transition-transform duration-500 ease-out transform hover:scale-110 " src={image} alt={name} />
      </a>
      <div className="mt-4 px-5 pb-5">
        <a href="#">
          <h5 className="text-lg font-semibold tracking-tight text-[#333]">{name}</h5>
        </a>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-base text-[#888682]">{price}</span>
          </p>
        </div>
      </div>
    </div>
  );
  return (
    <>
      {/* <Header /> */}
      <Banner />
      <div className="flex flex-col md:flex-row items-center justify-between bg-white py-12 px-6 md:px-36 md:py-32">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={image1}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={image2}
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
        <h3 className="text-sm font-semibold text-[#b98d58] uppercase text-center">Thực đơn</h3>
        <h2 className="text-3xl md:text-4xl font-semibold text-[#333] text-center pt-5">Món đặc biệt</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <SpecialMenuItem image='https://bizweb.dktcdn.net/thumb/large/100/451/095/products/sp6.png?v=1648442393260' name="Latte" price="49,000 VND" />
          <SpecialMenuItem image='https://bizweb.dktcdn.net/thumb/large/100/451/095/products/sp7.png?v=1648442418313' name="Vanila Latte" price="59,000 VND" />
          <SpecialMenuItem image='https://bizweb.dktcdn.net/thumb/large/100/451/095/products/sp5.png?v=1648442373590' name="Americano" price="46,000 VND" />
          <SpecialMenuItem image='https://bizweb.dktcdn.net/thumb/large/100/451/095/products/sp1.png?v=1648442297547' name="Caramel Latte" price="54,000 VND" />
        </div>
      </div>


      <div className="grid grid-cols-5 grid-rows-6 gap-0">
        <div className="col-span-3 row-span-6 overflow-hidden">
          <img
            src={image5}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-4 overflow-hidden">
          <img
            src={image6}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-5 overflow-hidden">
          <img
            src={image7}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-4 row-start-4 overflow-hidden">
          <img
            src={image8}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
        <div className="row-span-3 col-start-5 row-start-4 overflow-hidden">
          <img
            src={image9}
            className="w-full h-full object-cover transition-transform duration-500 ease-out transform hover:scale-110"
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between bg-[#F9F4EE] py-20 md:pt-32 md:pb-52 px-6 md:px-36">
        <div className="relative md:w-1/2 mb-8 md:mb-0">
          <div className="w-48 h-48 md:w-96 md:h-auto ">
            <img
              src={image3}
              alt="Coffee cup"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute top-24 left-24 md:top-52 md:left-52 w-40 h-40 md:w-80 md:h-auto">
            <img
              src={image4}
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
            src={image10}
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
            src={image11}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={image12}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={image13}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={image14}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={image15}
            className="w-full h-full object-cover"
          />
        </div>
        <div >
          <img
            src={image16}
            className="w-full h-full object-cover"
          />
        </div>
      </div >


      {/* <Footer /> */}
    </>
  );
}
