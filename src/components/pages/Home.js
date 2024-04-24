import image from "../../assests/images/anders-jilden-AkUR27wtaxs-unsplash.jpg";
import "../../styles/app.scss";

export default function Home() {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>HighQualiDee Merchantry</h1>
        <h2>Conspicuous Consumption</h2>
        <h5>
          <i>Enhanced Attraction for Whom Status is Important</i>
        </h5>
      </div>

      <div className="page-image-container">
        <img src={image} alt="Baker Miller Pink Landscape" />
      </div>
    </div>
  );
}
