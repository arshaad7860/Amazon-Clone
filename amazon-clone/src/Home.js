import React from "react";
import "./Home.css";
import ImageBanner from "../src/Images/amazonBanner.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        {/* Banner */}
        <img className="home__image" src={ImageBanner} alt="" />
        {/* rows */}
        <div className="home__row">
          {/* row with 2 components */}
          <Product
            id="123456"
            title="The lean startup"
            price="10.99"
            image={
              "https://media.takealot.com/covers_tsins/19419611/d1c2ad67836220a4acdb1c2cb43a38fa-zoom.jpg"
            }
            rating={4}
          />
          <Product
            id="123457"
            title="Lenovo Ideapad S130-11IGM Celeron N4000 Notebook - Business Black"
            price="469.99"
            image={
              "https://media.takealot.com/covers_tsins/58638511/193386822523-1-zoom.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* row with 3 components */}
          <Product
            id="123458"
            title="Samsung Galaxy A21s 32GB Dual Sim - Black"
            price="349.99"
            image={
              "https://media.takealot.com/covers_images/8968e74e0e17417c91cca3dd0b0c35ae/s-zoom.file"
            }
            rating={4}
          />
          <Product
            id="123459"
            title="Tech Geeks Bluetooth Wireless Earphones/Earbuds with Charging Case"
            price="35.99"
            image={
              "https://media.takealot.com/covers_tsins/58316992/58316992-1-zoom.jpeg"
            }
            rating={4}
          />
          <Product
            id="123460"
            title="Xbox One S 1TB Console (Xbox One)"
            price="674.99"
            image={
              "https://media.takealot.com/covers_tsins/47626893/XboxOneS1tb-zoom.jpg"
            }
            rating={4}
          />
        </div>
        <div className="home__row">
          {/* row with 1 components */}
          <Product
            id="123476"
            title="Omega 32 inch HD Ready LED TV"
            price="1099.99"
            image={
              "https://media.takealot.com/covers_tsins/55056924/55056924-1-zoom.jpg"
            }
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
