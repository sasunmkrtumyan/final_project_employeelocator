import Faq from "react-faq-component";
import React, { Component } from "react";
import negotiation from "../../assets/images/negotiation.jpg";

export default function About() {
  const data = {
    title: "FAQ",
    rows: [
      {
        title: "Lorem ipsum dolor sit amet",
        content: "Lorem ipsum dolor sit amet, consectetur ",
      },
      {
        title: "Nunc maximus, magna at ultricies elementum",
        content:
          "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam.",
      },
      {
        title: "Curabitur laoreet, mauris vel blandit fringilla",
        content:
          "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc",
      },
      {
        title: "What is the package version",
        content: "v1.0.5",
      },
    ],
  };

  return (
    <div className="container">
      <hr />
      <div className="about">
        <div className="text">
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
            quidem, vitae deleniti autem tempore dolor veritatis reprehenderit
            quam pariatur aliquid saepe illo facere impedit consequatur numquam
            voluptatibus! Dignissimos dicta labore a nemo, ratione voluptate
            quaerat voluptates amet itaque officia ducimus aperiam odio non
            excepturi molestias iste commodi fuga laborum est praesentium
            cupiditate sequi, illo nesciunt. A mollitia eaque dicta eos maxime
            re
          </p>
        </div>
        <div className="img">
          <img src={negotiation} alt="negotiation-img" />
        </div>
      </div>
      <div className="faq">
        <Faq data={data} />
      </div>
    </div>
  );
}
