import {} from "react";

const GalleryArea = () => {
  return (
    <>
      <section className="gallery p-100 bg-gray">
        <div className="container">
          <div className="heading">
            <h2 className="">Discover Your Dream Home</h2>
            <p>
              Discover a hassle-free way to buy, sell, or rent your dream
              <br />
              property with our all-in-one real estate solution.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-4.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-5.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-6.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-7.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-8.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-6">
              <div className="img-block mb-24">
                <img
                  src="./assets/media/home-image/img-9.png"
                  className="w-100"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryArea;
