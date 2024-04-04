
import { useEffect } from "react";

const LogoAddArea = () => {
    useEffect(() => {
        const slider = document.querySelector(".logo-slider");
        const items = document.querySelectorAll(".logo-slider .item");
    
        let currentPosition = 0;
        const itemWidth = items[0].offsetWidth + 50; // Adjust the gap size here
    
        function animate() {
          currentPosition -= 1;
          if (currentPosition <= -itemWidth) {
            currentPosition += itemWidth;
            slider.appendChild(items[0]);
          }
          slider.style.transform = `translateX(${currentPosition}px)`;
          requestAnimationFrame(animate);
        }
    
        animate();
      }, []);
    
    
  return (
    <div className="logo bg-white p-100">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="logo-slider d-flex">
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-1.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-2.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-3.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-4.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-5.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-1.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-2.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-3.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-4.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-5.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-1.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-2.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-3.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-4.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-5.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-1.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-2.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-3.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-4.png" alt="" />
              </div>
              <div className="item text-center">
                <img src="./assets/media/logo/brand-logo-5.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoAddArea;
