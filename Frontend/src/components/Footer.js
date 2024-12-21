import React from "react";
import { Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";
import newsletter from "../images/newsletter.png";
const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src={newsletter} alt="newsletter" />
                <h2 className="mb-0 text-white">Hoài Thương Costemic</h2>
              </div>
            </div>
            <div className="col-7">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h4 className="text-white mb-4">Contact Us</h4>
              <div>
                <address className="text-white fs-6">
                  Chi nhánh: Điện Biên Phủ, Đà Nẵng. <br />{" "}
                  PinCode: 382007
                </address>
                <a
                  href="tel:+91 387699792"
                  className="mt-3 d-block mb-1 text-white"
                >
                  +91 387699792
                </a>
                <a
                  href="mailto:cskh@hoaithuongcostemic.vn"
                  className="mt-2 d-block mb-0 text-white"
                >
                  cskh@hoaithuongcostemic.vn
                </a>
                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsInstagram className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-4" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-4" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">CHĂM SÓC KHÁCH HÀNG</h4>
              <div className="footer-link d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  Chính sách đổi trả
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  Chính sách bảo mật
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  Chính sách thanh toán
                </Link>
                <Link to="/term-conditions" className="text-white py-2 mb-1">
                  Điều khoản dịch vụ
                </Link>
                <Link className="text-white py-2 mb-1">Hướng dẫn mua hàng</Link>
                <Link className="text-white py-2 mb-1">GÓP Ý - KHIẾU NẠI</Link>

              </div>
            </div>
            <div className="col-3">
              <h4 className="text-white mb-4">GIỜ MỞ CỬA</h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Từ 9:00 - 21:30 tất cả các ngày trong tuần (bao gồm cả các ngày lễ, ngày Tết).</Link>
                <Link className="text-white py-2 mb-1">GÓP Ý - KHIẾU NẠI</Link>
                <Link className="text-white py-2 mb-1"> 0387699792</Link>
              </div>
            </div>
            <div className="col-2">
              <h4 className="text-white mb-4">THÔNG TIN </h4>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Giới thiệu</Link>
                <Link className="text-white py-2 mb-1">Liên hệ hợp tác</Link>
                <Link className="text-white py-2 mb-1">Tuyển dụng</Link>
                <Link className="text-white py-2 mb-1">Giấy chứng nhận đại lý</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by HoaiThuong Cosmetic
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
