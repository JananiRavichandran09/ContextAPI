import React from "react";

const CarouselPage = () => {
  return (
    <div>
      <div id="carouselExampleFade" className="carousel slide carousel-fade">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://reviewed-com-res.cloudinary.com/image/fetch/s--OPGcCdoJ--/b_white,c_limit,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,q_auto,w_1200/https://reviewed-production.s3.amazonaws.com/1558119942449/Laptoporientation.jpg"
              width={"100px"}
              height={"380px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item  ">
            <img
              src="https://cdn.pixabay.com/photo/2023/05/16/15/09/ai-generated-7997933_1280.jpg"
              width={"100%"}
              height={"380px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sm.pcmag.com/pcmag_au/news/g/google-pix/google-pixel-tablet-vs-apple-ipad-should-you-ditch-ipados-fo_7mpu.jpg"
              width={"100%"}
              height={"380px"}
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />
    </div>
  );
};

export default CarouselPage;
