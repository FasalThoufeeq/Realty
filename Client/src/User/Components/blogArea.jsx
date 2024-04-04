import {} from "react";

const BlogArea = () => {
  return (
    <section className="blog bg-gray p-100">
      <div className="container">
        <div className="heading">
          <h2 className="">Stay Informed with Our Latest Blog</h2>
          <p>
            Stay up-to-date with the latest news and trends in the real estate{" "}
            <br />
            market with our informative blog articles.
          </p>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="content">
              <div className="img-block position-relative">
                <img
                  src="./assets/media/blog/img-1.png"
                  className="w-100"
                  alt=""
                />
                <span className="date">May 09, 2023</span>
              </div>
              <div className="text-block">
                <span className="category-text">Real Estate</span>
                <a href="">How to Choose the Right Real Estate Agent for You</a>
                <ul>
                  <li>
                    <i className="fal fa-calendar"></i>
                    <span> April 12, 2023</span>
                  </li>
                  <li>
                    <i className="fal fa-comment-alt"></i> <span>15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="content">
              <div className="img-block position-relative">
                <img
                  src="./assets/media/blog/img-2.png"
                  className="w-100"
                  alt=""
                />
                <span className="date">May 09, 2023</span>
              </div>
              <div className="text-block">
                <span className="category-text">Real Estate</span>
                <a href="">
                  The Benefits of Investing in Real Estate for Passive Income
                </a>
                <ul>
                  <li>
                    <i className="fal fa-calendar"></i>
                    <span> April 12, 2023</span>
                  </li>
                  <li>
                    <i className="fal fa-comment-alt"></i> <span>15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-12">
            <div className="content">
              <div className="img-block position-relative">
                <img
                  src="./assets/media/blog/img-3.png"
                  className="w-100"
                  alt=""
                />
                <span className="date">May 19, 2023</span>
              </div>
              <div className="text-block">
                <span className="category-text">Real Estate</span>
                <a href="">Top 10 Things to Consider When Selling Your Home</a>
                <ul>
                  <li>
                    <i className="fal fa-calendar"></i>
                    <span> April 12, 2023</span>
                  </li>
                  <li>
                    <i className="fal fa-comment-alt"></i> <span>15</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogArea;
