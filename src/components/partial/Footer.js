import { Formik, Field, Form } from "formik";
import logo1 from '../../assets/images/logo1.png';
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { FaEnvelope, FaLocationDot, FaPhone, FaTiktok, FaYoutube } from "react-icons/fa6";

export function Footer() {
  return (
    <div className="bg-[#222222] text-[#f9f9f9] pt-8">
      <div className="container mx-auto md:px-40 px-5">

        <div className="flex flex-col md:flex-row items-start justify-between mb-6 md:mb-8">
          <div className="md:w-1/2 mb-4 md:mb-0 w-full">
            <h3 className="text-2xl lg:text-3xl font-semibold mb-2">
              ĐĂNG KÝ NHẬN KHUYẾN MÃI
            </h3>
            <p className="text-sm lg:text-base">
              Đừng bỏ lỡ những sản phẩm và chương trình khuyến mãi hấp dẫn
            </p>
          </div>
          <div className="md:w-1/2 w-full">
            <Formik
              initialValues={{ email: "" }}
              onSubmit={(values) => {
                console.log(values);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="flex items-center justify-between w-full">
                  <Field
                    type="email"
                    name="email"
                    className="w-3/4 px-4 py-2 border-2 border-gray-300 rounded-md text-[#333] focus:outline-none focus:ring-0"
                    placeholder="Email của bạn"
                  />
                  <button
                    type="submit"
                    className="w-[20%] px-4 py-2 bg-[#B4BB6B] text-white rounded-md hover:bg-[#9FA753] ml-2"
                    disabled={isSubmitting}
                  >
                    Đăng ký
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>

        <hr className="border-[#ccc] my-4" />

        <div className="flex flex-col md:flex-row items-center md:justify-between py-6">
          <div className="w-full md:w-1/2 mb-4 md:mb-0 pe-6 ">
            <img src={logo1} alt="Hot Coffee Logo" className="w-96 mx-auto md:mx-0 mb-4 text-center md:text-left" />
            <p className="text-sm lg:text-base mb-4">
              Hot Coffee mong rằng chúng tôi luôn mang đến cho khách hàng những trải nghiệm tốt nhất, tạo ra những khoảnh khắc khó quên khi đến với Hot Coffee.
            </p>
            <div className="flex justify-start space-x-3">
              <FaTwitter className="w-6 h-6 hover:opacity-80" />
              <FaInstagram className="w-6 h-6 hover:opacity-80" />
              <FaTiktok className="w-6 h-6 hover:opacity-80" />
              <FaYoutube className="w-6 h-6 hover:opacity-80" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">HỆ THỐNG CỬA HÀNG</h3>
              <p className="text-sm lg:text-base mb-3">
                <FaLocationDot className="me-3 w-4 h-4 inline" />CN1: Tầng 6 toà nhà Ladeco, 266 Đội Cấn, phường Liễu Giai, Hà Nội, Việt Nam
              </p>
              <p className="text-sm lg:text-base mb-3">
                <FaLocationDot className="me-3 w-4 h-4 inline" />CN2: Toà nhà Lữ Gia, 70 Lữ Gia, phường 15, quận 11, TP. HCM, Việt Nam
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">LIÊN HỆ</h3>
              <table>
                <tr>
                  <td><FaPhone className="me-3 w-4 h-4" /></td>
                  <td>Hotline đặt hàng: 19006750</td>
                </tr>
                <tr>
                  <td><FaEnvelope className="me-3 w-4 h-4" /></td>
                  <td>Email: info@yoursite.com</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Thứ 2 - Thứ 6: 7am - 10pm</td>
                </tr>
                <tr>
                  <td></td>
                  <td>Thứ 7 - Chủ nhật: 8am - 9pm</td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <hr className="border-[#ccc] my-4" />
        <p className="text-center pb-4">
          ©Bản quyền thuộc về Team 1
        </p>
      </div>
    </div>
  );
}

export default Footer;
