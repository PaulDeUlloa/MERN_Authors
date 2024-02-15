import { Link } from "react-router-dom";

const GetStarted = () => {
  return (
    <div id="getStartedBackgroundImage">
      <div id="getStartedPage">
        <button class="btn btn-light">
          <Link to="/authors" id="getStartedBtnStyling">
            GET STARTED
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
