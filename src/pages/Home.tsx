import { Fragment, useState } from "react";
import { IMAGE } from "../constent/theme";
import HomeChart1 from "../element/HomeChart1";
import DigitalCurrency from "../components/DigitalCurrency";
import CryptoCounter from "../components/CryptoCounter";
import CryptoDetail from "../components/CryptoDetail";
import NewBlog from "../components/NewBlog";
import SvgBoxes from "../element/SvgBoxes";
import { Link } from "react-router-dom";
import "react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";
import TradingViewWidget from "../components/Tvwidget";
import FourSymbolsWidget from "../components/Foursymbolwidget";

const SvgList_1 = [
  { svg: IMAGE.home_svg_box1 },
  { svg: IMAGE.home_svg_box2 },
  { svg: IMAGE.home_svg_box3 },
];
const SvgList_2 = [
  { svg: IMAGE.home_svg_box4 },
  { svg: IMAGE.home_svg_box5 },
  { svg: IMAGE.home_svg_box6 },
  { svg: IMAGE.home_svg_box7 },
  { svg: IMAGE.home_svg_box8 },
  { svg: IMAGE.home_svg_box9 },
];

const Chart = [
  {
    cont: <TradingViewWidget />,
    img: IMAGE.images_home_coin1,
    info: "31,056.83",
    text: "BTC/BUSD+2.98%",
    chart: <HomeChart1 chartcolor="#ff8139" />,
  },
  {
    cont: <TradingViewWidget />,
    img: IMAGE.images_home_coin2,
    info: "63,056.83",
    text: "ETH/BUSD+0.98%",
    chart: <HomeChart1 chartcolor="#848CFE" />,
  },
  {
    cont: <TradingViewWidget />,
    img: IMAGE.images_home_coin3,
    info: "20,056.83",
    text: "USD/BUSD+0.84%",
    chart: <HomeChart1 chartcolor="#FFC800" />,
  },
  {
    cont: <TradingViewWidget />,
    img: IMAGE.images_home_coin4,
    info: "11,056.83",
    text: "USDT/BUSD+1.88%",
    chart: <HomeChart1 chartcolor="#229A73" />,
  },
];

const BicoinDetail = [
  { icon: "flaticon-chart", title: "Strategy Development:" },
  { icon: "flaticon-box", title: "Complete Packag of your strategies" },
  { icon: "flaticon-checked-1", title: "Best Value the Execution Available" },
  { icon: "flaticon-molecule", title: "Algo at its best" },
];

const Home = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ModalVideo
        channel="youtube"
        isOpen={open}
        videoId="cfmQFW1DpA0"
        onClose={() => setOpen(false)}
      />
      <div className="page-content">
        <div
          className="main-bnr overlay-black-dark"
          style={{ backgroundImage: `url(${IMAGE.home_banner1})` }}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-7 col-lg-7 col-md-12">
                <h1 className="wow fadeInUp">
                  The Best Platform For <span id="text">Algo Trading</span>
                </h1>
                <p className="text text-spl wow fadeInUp" align="justify">
                  Boost Your Profits with Algorithmic Trading Strategies Are you
                  ready to take your trading to the next level? For Algo Trading
                  is your go-to resource for mastering the world of algorithmic
                  trading. Whether you're a seasoned trader or just getting
                  started, our platform provides comprehensive insights,
                  powerful tools, and expert guidance to help you achieve your
                  financial goals.
                </p>
                <div className="contant-box style-1 wow fadeInUp">
                  <Link
                    to="/login"
                    target="_blank"
                    className="btn btn-lg  btn-shadow btn-primary m-r30"
                  >
                    Start Trading
                  </Link>
                  <Link
                    to={"#"}
                    onClick={() => {
                      setOpen(true);
                    }}
                    className="video-btn style-1 popup-youtube"
                  >
                    <i className="fa fa-play"></i>
                    <span className="text">How it work</span>
                  </Link>
                </div>
              </div>
              <div className="col-xl-5 col-lg-5 col-md-12">
                <div className="banner-media">
                  <img
                    className="media anm wow bounceInRight"
                    data-speed-x="-4"
                    data-speed-scale="-1"
                    src={IMAGE.images_home_banner}
                    alt=""
                  />
                  <div className="shadow-box wow fadeInUp"></div>
                </div>
              </div>
            </div>
          </div>
          {SvgList_1.map((item, index) => (
            <Fragment key={index}>{item.svg}</Fragment>
          ))}
          <ul className="dz-shape">
            {SvgList_2.map((item, index) => (
              <li key={index}>{item.svg}</li>
            ))}
          </ul>
        </div>
        <div className="crypto-wrapper overflow-hidden">
          <div className="container">
            <div className="row">
              {Chart.map((item, ind) => (
                <div className="col-lg-3 col-md-6 m-b30" key={ind}>
                  <div className="crypto-box style-1 wow fadeInUp px-0 pb-0">
                    <div className="caart-box">
                      <div className="d-flex align-items-center justify-content-between caart-box-1">
                        <div className="crypto-info">
                          <div className="text">{/* {item.cont} */}</div>
                        </div>
                        {/* <div className="crypto-media">
                          <img src={item.img} alt="" />
                        </div> */}
                      </div>
                      {/* {item.chart} */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <section className="content-inner overflow-hidden position-relative">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title wow fadeInUp">
                Unlock the Potential of Algorithmic Trading
              </h2>
              <p className="text wow fadeInUp">
                Whether you're seeking financial independence or aiming to
                diversify your investment portfolio, algorithmic trading can be
                your key to success. Join For Algo Trading today and embark on a
                journey towards financial freedom.
              </p>
            </div>
            <DigitalCurrency />
            <br />
          </div>
          <SvgBoxes />
        </section>
        <CryptoCounter />
        <CryptoDetail />
        <section
          className="content-inner overflow-hidden overlay-style-2 position-relative"
          style={{ backgroundImage: `url(${IMAGE.background_bg3})` }}
        >
          <div className="container">
            <div className="section-head text-center">
              <h2 className="title text-light wow fadeInUp">
                Assume full Responsibility
                <br /> For Your Algo Trading
              </h2>
            </div>
            <div className="row">
              {BicoinDetail.map((item, index) => (
                <div className="col-lg-3 col-md-6 col-sm-6 m-b30" key={index}>
                  <div className="icon-bx-wraper style-2 text-center wow fadeInUp">
                    <div className="icon-media">
                      <i className={item.icon}></i>
                    </div>
                    <div className="icon-content">
                      <h6 className="title">{item.title}</h6>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <SvgBoxes />
        </section>
        <section className="content-inner-3 overflow-hidden position-relative">
          <FourSymbolsWidget />
        </section>
        <section className="content-inner-3 overflow-hidden position-relative">
          <div className="container">
            <div className="section-head  text-center">
              <h2 className="title wow fadeInUp">Latest News & Blog</h2>
              <p className="text wow fadeInUp">
                Mauris eleifend ipsum dolor, sit amet elementum tortor mattis
                interdum. Praesent ut lobortis purus Mauris eleifendipsum dolor.
              </p>
            </div>
            <NewBlog />
          </div>
          <SvgBoxes />
        </section>
      </div>
    </>
  );
};

export default Home;
