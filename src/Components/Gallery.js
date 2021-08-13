import React, { useState, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Blazer from "../img/BlazerCat.png";
import Blazer2 from "../img/blazer.jpg";
import Blazer3 from "../img/cat-club.jpg";

const Gallery = () => {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let slider1 = []
    let slider2 = []

    useEffect(() => {
      setNav1(slider1);
      setNav2(slider2);
    }, [slider1, slider2]);


    return (
      <div className="galleryCont">
        <Slider
          asNavFor={nav2}
          ref={(slider) => (slider1 = slider)}
          infinite={true}
          slidesToShow={1}
        >
          <div>
            <img className="gallery" src={Blazer} alt="" />
          </div>
          <div>
            <img className="gallery" src={Blazer2} alt="" />
          </div>
          <div>
            <img className="gallery" src={Blazer3} alt="" />
          </div>
        </Slider>
        <Slider
          asNavFor={nav1}
          ref={(slider) => (slider2 = slider)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
          className="gallery_container"
        >
          <div>
            <img className="gallery2" src={Blazer} alt="" />
          </div>
          <div>
            <img className="gallery2" src={Blazer2} alt="" />
          </div>
          <div>
            <img className="gallery2" src={Blazer3} alt="" />
          </div>
        </Slider>
      </div>
    );
  };

export default Gallery;