import React, { useState, useEffect } from "react";
import "./css/ringtest.css";
import image from "../public/images/Ringtest/image.jpg";
import image1 from "../public/images/Ringtest/image1.jpg";
import image2 from "../public/images/Ringtest/image2.jpg";
import image3 from "../public/images/Ringtest/image3.jpg";
import image4 from "../public/images/Ringtest/image4.jpg";
import image5 from "../public/images/Ringtest/image5.jpg";

function Ringtest() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cards, setCards] = useState([
    {
      image: image,
      value: "BSPTCL Vigilance Cell",
      description: "Contact No. : 7763817975  Email cvo.trans@bsptcl.bihar.gov.in",
    },
    {
      image: image1,
      value: "Departmental Grievance Redressal Cell",
      description:
        "Contact No. : 7763817975 Email dgrcell@bsptcl.bihar.gov.in",
    },
    {
      image: image2,
      value: "RTI",
      description: "Right to Information",
    },
    {
      image: image3,
      value: "BSPTCL Vigilance Cell",
      description: "Contact No. : 7763817975  Email cvo.trans@bsptcl.bihar.gov.in",
    },
    {
      image: image4,
      value: "GST & CIN Details",
      description:
        "GST No. :- 10AAFCB2393H1Z1   CIN No. :- U74110BR2012SGC018889",
    },
    {
      image: image5,
      value: "BSPTCL Vigilance Cell",
      description: "Contact No. : 7763817975  Email cvo.trans@bsptcl.bihar.gov.in",
    },
    // Add more cards here...
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000); // Rotate every 3 seconds

    return () => clearInterval(intervalId);
  }, [cards.length]);

  const handlePrevClick = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  return (
    <div className="container-pass">
      <h1 className="title">Sustainability</h1>
      <div
        className="card-container"
        style={{ display: "flex", flexWrap: "nowrap", overflowX: "hidden" }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`card ${
              index === currentIndex ||
              index === currentIndex + 1 ||
              index === currentIndex + 2
                ? "active"
                : ""
            }`}
            style={{
              transform: `translateX(${(index - currentIndex) * 100}px)`,
              transition: "transform 0.5s",
            }}
          >
            <div className="icon-container">
              <img src={card.image} alt="Card Image" className="icon-image" />
            </div>
            <h2 className="card-value">{card.value}</h2>
            <p className="card-description">{card.description}</p>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button" onClick={handlePrevClick}>
          &lt;
        </button>
        <button className="nav-button" onClick={handleNextClick}>
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Ringtest;
