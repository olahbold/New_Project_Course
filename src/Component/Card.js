import "../styles.css";
import { MdMood } from "react-icons/md";

import { Data } from "../../Data";

export default function Cards() {
  return Data.map((data) => (
    <div className="card_Container ">
      <div className="feature_Container ">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div>
            <h3>{data.head}</h3>
          </div>
          <div>
            <p> {data.body}</p>
          </div>
        </div>

        <img
          src={data.img}
          alt=""
          width="100%"
          height="200vh"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  ));
}
