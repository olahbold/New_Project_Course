import "../styles.css";
import { Zoom } from "react-reveal";
import { Bounce, LightSpeed } from "react-reveal";

import mobile_app from "./Images/mobile_app.png";

import { Button } from "react-bootstrap";
export default function Hero() {
  return (
    <div className="hero_container">
      <div className="textContainer">
        <Zoom>
          {" "}
          <h1 className="hero_text">We Are The Caregiver’s Ally</h1>{" "}
        </Zoom>
        <Bounce>
          {" "}
          <h3 className="subtitle">
            "Empowering Caregivers: A Supportive Community <br />
            for people who are caring for their loved ones & Care Workers".
          </h3>
        </Bounce>
        <div>
          {" "}
          <div className="d-flex justify-content-center align-items-center new_Button">
            <Button type="submit" className="btn btn1 " size="lg">
              Book us now
            </Button>
            <Button type="submit" className="btn btn2" size="lg">
              How it work
            </Button>
          </div>
        </div>
      </div>
      <div>
        <LightSpeed delay={2000}>
          <img src={mobile_app} alt="" className="mymobile " />
        </LightSpeed>
      </div>
    </div>
  );
}
