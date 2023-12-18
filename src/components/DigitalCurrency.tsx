import { useState } from "react";

const currencyCard = [
  {
    icon: "flaticon-coin-stack",
    title: "Automated Trading at Its Best",
    content:
      "Experience the power of automated trading with our cutting-edge algorithms. Say goodbye to manual execution and let our advanced systems analyze the markets and execute trades on your behalf",
  },
  {
    icon: "flaticon-transaction",
    title: "Maximize Profit Potential",
    content:
      "Unlock lucrative opportunities with algorithmic trading strategies designed to maximize your profit potential. Our algorithms are built on extensive market data analysis, enabling you to stay ahead of the curve and capitalize on market movements..",
  },
  {
    icon: "flaticon-shield",
    title: "Risk Control and Peace of Mind:",
    content:
      "Your capital is precious, and we understand the importance of risk management. Our algorithms incorporate robust risk control measures to protect your investments and provide you with peace of mind while you trade.",
  },
];

const DigitalCurrency = () => {
  const [addActive, setAddActive] = useState(1);
  return (
    <>
      <div className="row justify-content-center">
        {currencyCard.map((item, index) => (
          <div className="col-lg-4 col-md-6 m-b30" key={index}>
            <div
              onMouseEnter={() => {
                setAddActive(index);
              }}
              className={`icon-bx-wraper style-1 bg-light box-hover text-center wow bounceInLeft
                         ${addActive === index ? "active" : ""}`}
              data-wow-delay="1.0s"
            >
              <div className="icon-media">
                <i className={item.icon}></i>
              </div>
              <div className="icon-content">
                <h4 className="title">{item.title}</h4>
                <p className="text">{item.content}</p>
              </div>
              <div className="hover-border"></div>
              <div className="hover-border-2"></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default DigitalCurrency;
