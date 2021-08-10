import negotiation from "../../assets/images/negotiation.jpg";

export default function About() {
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
    </div>
  );
}
