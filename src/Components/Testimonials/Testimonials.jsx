import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

function Testimonials() {

    const slider = useRef();
    let tx = 0;

    const sliderForward = () => {
        if(tx > -50){
            tx -= 25
        }
        slider.current.style.transform = `translateX(${tx}%)`
    }

    const sliderBackward = () => {
        if(tx < 0){
            tx += 25
        }
        slider.current.style.transform = `translateX(${tx}%)` 
    }

  return (
    <div className="testimonials">
      <img
        src={next_icon}
        alt=""
        className="next-btn"
        onClick={sliderForward}
      />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={sliderBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alts="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                iusto consequuntur, quam in voluptate cupiditate repudiandae
                mollitia perferendis reprehenderit, consectetur veritatis,
                reiciendis aliquid sunt dolores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alts="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                iusto consequuntur, quam in voluptate cupiditate repudiandae
                mollitia perferendis reprehenderit, consectetur veritatis,
                reiciendis aliquid sunt dolores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alts="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                iusto consequuntur, quam in voluptate cupiditate repudiandae
                mollitia perferendis reprehenderit, consectetur veritatis,
                reiciendis aliquid sunt dolores.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alts="" />
                <div>
                  <h3>William Jackson</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
                iusto consequuntur, quam in voluptate cupiditate repudiandae
                mollitia perferendis reprehenderit, consectetur veritatis,
                reiciendis aliquid sunt dolores.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
