import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
import watch2 from "../images/watch-1.avif";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch, useSelector } from "react-redux";
import { getAllBlogs } from "../features/blogs/blogSlice";
import moment from "moment";
import { getAllProducts } from "../features/products/productSlilce";
import ReactStars from "react-rating-stars-component";
import { addToWishlist } from "../features/products/productSlilce";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Home = () => {
  const blogState = useSelector((state) => state?.blog?.blog);
  const productState = useSelector((state) => state?.product?.product) || [];
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getblogs();
    getProducts();
  }, []);
  const getblogs = () => {
    dispatch(getAllBlogs());
  };


  const getProducts = () => {
    dispatch(getAllProducts());
  };

  const addToWish = (id) => {
    //alert(id);
    dispatch(addToWishlist(id));
  };
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative ">
              <img
                src="https://theme.hstatic.net/200000868185/1001288884/14/showsliderimg1.png?v=413"
                className="img-fluid rounded-3"
                alt="main banner"
              />
            </div>
          </div>
          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/428623371_828063606031334_6310699964563670622_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHDKKhgy9wG-_OQqW8AOGae_gQmcUByiOb-BCZxQHKI5p7hkYxb9J4CfVX93K1Txvmc2y8WnREG8z_xzWJwE98g&_nc_ohc=-9dltkF6lBEQ7kNvgERQ4C5&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=AQI7GACvR0JK6AmD1ANT7Pu&oh=00_AYCJxVUsxmaO8ndUB7CLqqSMx8HPJZA-W_c5sP5YKzwsVQ&oe=6765E390"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative">
                <img
                  src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/329037793_3333814333600863_5746582313640957430_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHLJED-N6m8EQAz2crycZbGcH9c46UyDs9wf1zjpTIOz_yFt17C48i1DUODS-lpTX3dv_jKnhUnqjjXyDzjFiVr&_nc_ohc=5SYRQO52efEQ7kNvgETITpH&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=A_9JFlAmW6Mxwsz3WN8M1SC&oh=00_AYDBhHg0X5xOPtXqawdCkEauo6WPgdbb5gQBXzUR3GPXvw&oe=6765CDB5"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />
              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/397955257_747622394075456_1129485811066472228_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=86c6b0&_nc_eui2=AeHHZsnIIYqDOcNWjVW_SRBRP9qCxNW_CXU_2oLE1b8Jda3Dx3-R7I4DihsrTdtHyb_7JNxLchPQx_BihuQSLyT5&_nc_ohc=OagUO7io-pYQ7kNvgHXINk-&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=ADgz94gHMMOXJDEuKdSazy6&oh=00_AYDuE3xzOoD4m071QOEJAg3OYmxlPSeaYwoKK0blN7ukJg&oe=6765CF6F"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
              <div className="small-banner position-relative ">
                <img
                  src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/314482050_3157219394581856_3283275904855470890_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFCEMnqcW8uj0X6U-OMHiEA_SN7ORRbxaf9I3s5FFvFp0XLZ8FVn7MKdHi74zQcKOeZsxX14nDoiOta0q20rtdb&_nc_ohc=iQbwCOPO4UIQ7kNvgFZX533&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=AjJbPk0dGAlBsG63gQpbLZu&oh=00_AYAAiXHxtoyonSl3l82h3noagXRZm8m5Xg56xrKs8H8TsQ&oe=6765D5E4"
                  className="img-fluid rounded-3"
                  alt="main banner"
                />

              </div>
            </div>
          </div>
        </div>
      </Container>
      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="servies d-flex align-items-center justify-content-between">
              {services?.map((i, j) => {
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                    <img src={i.image} alt="services" />
                    <div>
                      <h6>{i.title}</h6>
                      <p className="mb-0">{i.tagline}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
      {/* <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex justify-content-between flex-wrap align-items-center">
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Cameras</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/camera.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Tv</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/tv.jpg" alt="camera" />
              </div>
              <div className="d-flex gap align-items-center">
                <div>
                  <h6>Smart Watches</h6>
                  <p>10 Items</p>
                </div>
                <img src="images/headphone.jpg" alt="camera" />
              </div>
            </div>
          </div>
        </div>
      </Container> */}

      <Container class1="flash-sale-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Flash Sale</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "flashsale") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      {/* ... (wishlist icon, image, etc., same as Featured Collection) */}
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          alt="product image"
                          height={"250px"}
                          width={"260px"}
                          onClick={() => navigate("/product/" + item?._id)}
                        />

                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.substr(0, 70) + "..."}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />
                        <p className="price">Giá. {item?.price} (Flash Sale)</p> {/* Indicate Flash Sale */}
                      </div>
                      {/* ... (action bar, same as Featured Collection) */}
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          {productState &&
            productState?.map((item, index) => {
              console.log('item :>> ', item);
              if (item.tags === "featured") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                          <img
                            src={wish}
                            alt="wishlist"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          //className="img-fluid d"
                          alt="product image"
                          height={"250px"}
                          width={"260px"}
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                        <img
                          src={item?.images[0]?.url}
                          //className="img-fluid d"
                          alt="product image"
                          height={"250px"}
                          width={"260px"}
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.substr(0, 70) + "..."}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">Giá. {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button>
                          <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button> */}
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://down-vn.img.susercontent.com/file/sg-11134201-7rdvv-lzeix1wwxt4ne3@resize_w450_nl.webp"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content position-absolute">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From Rs. 399</p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzaps8377a8xb7@resize_w450_nl.webp"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content position-absolute">
                <h5 className="text-dark">Studio Display</h5>
                <h6 className="text-dark">600 nits of brightness.</h6>
                <p className="text-dark">27-inch 5K Retina display</p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://down-vn.img.susercontent.com/file/cn-11134207-7r98o-lz5wwzexqttf89.webp"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content position-absolute">
                <h5 className="text-dark">smartphones</h5>
                <h6 className="text-dark">Iphone 14 Pro.</h6>
                <p className="text-dark">Now in Green. From Rs. 61,000.00</p>
              </div> */}
            </div>
          </div>
          <div className="col-3">
            <div className="famous-card position-relative">
              <img
                src="https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lpj5irfov2gldd.webp"
                className="img-fluid"
                alt="famous"
              />
              {/* <div className="famous-content position-absolute">
                <h5 className="text-dark">home speakers</h5>
                <h6 className="text-dark">Room-filling sound.</h6>
                <p className="text-dark">From Rs. 699</p>
              </div> */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "special") {
                //console.log(item?._id);
                return (
                  <SpecialProduct
                    key={index}
                    id={item?._id}
                    title={item?.title}
                    brand={item?.brand}
                    totalrating={item?.totalrating.toString()}
                    price={item?.price}
                    img={item?.images[0].url}
                    sold={item?.sold}
                    quantity={item?.quantity}
                  />
                );
              }
            })}
        </div>
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Popular Products</h3>
          </div>
        </div>
        <div className="row">
          {productState &&
            productState?.map((item, index) => {
              if (item.tags === "popular") {
                return (
                  <div key={index} className={"col-3"}>
                    <div className="product-card position-relative">
                      <div className="wishlist-icon position-absolute">
                        <button className="border-0 bg-transparent">
                          <img
                            src={wish}
                            alt="wishlist"
                            onClick={(e) => {
                              addToWish(item?._id);
                            }}
                          />
                        </button>
                      </div>
                      <div className="product-image">
                        <img
                          src={item?.images[0]?.url}
                          // className="img-fluid d"
                          alt="product image"
                          height={"250px"}
                          width={"100%"}
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                        <img
                          src={item?.images[0]?.url}
                          // className="img-fluid d"
                          alt="product image"
                          height={"250px"}
                          width={"100%"}
                          onClick={() => navigate("/product/" + item?._id)}
                        />
                      </div>
                      <div className="product-details">
                        <h6 className="brand">{item?.brand}</h6>
                        <h5 className="product-title">
                          {item?.title?.substr(0, 70) + "..."}
                        </h5>
                        <ReactStars
                          count={5}
                          size={24}
                          value={item?.totalrating.toString()}
                          edit={false}
                          activeColor="#ffd700"
                        />

                        <p className="price">Giá. {item?.price}</p>
                      </div>
                      <div className="action-bar position-absolute">
                        <div className="d-flex flex-column gap-15">
                          {/* <button className="border-0 bg-transparent">
                            <img src={prodcompare} alt="compare" />
                          </button> */}
                          {/* <button className="border-0 bg-transparent">
                            <img
                              onClick={() => navigate("/product/" + item?._id)}
                              src={view}
                              alt="view"
                            />
                          </button> */}
                          {/* <button className="border-0 bg-transparent">
                            <img src={addcart} alt="addcart" />
                          </button> */}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
        </div>
      </Container>
      <Container class1="marque-wrapper home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="marquee-inner-wrapper card-wrapper">
              <Marquee className="d-flex">
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn//hsk/brandSkin10041678681869.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn//hsk/brandLa-roche-posay-logo1690281599.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn/hsk/brand/Sunplay-Skin-Aqua1662624548.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn/brand/1625111580bioderma.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn//hsk/brandvaseline-logo1702365539.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn/brand/1661313898ce.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn//hsk/brandnaris-cosmetics-logo1716963318.jpg" alt="brand" />
                </div>
                <div className="mx-4 w-25">
                  <img src="https://media.hcdn.vn//hsk/brandGarnier-logo1728234915.jpg" alt="brand" />
                </div>
              </Marquee>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="blog-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our Latest Blogs</h3>
          </div>
        </div>
        <div className="row">
          {blogState &&
            blogState?.map((item, index) => {
              if (index < 4) {
                return (
                  <div className="col-3 " key={index}>
                    <BlogCard
                      id={item?._id}
                      title={item?.title}
                      description={item?.description}
                      image={item?.images[0]?.url}
                      date={moment(item?.createdAt).format(
                        "MMMM Do YYYY, h:mm a"
                      )}
                    />
                  </div>
                );
              }
            })}
        </div>
      </Container>
    </>
  );
};

export default Home;
