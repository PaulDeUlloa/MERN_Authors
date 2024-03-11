import { Link } from "react-router-dom";
import React from "react";
import Navbar from "./NavBar";

const GetStarted = () => {
  return (
    <div id="getStartedBackgroundImage">
      <div id="featuredHeaderStyling">
        <h1>Featured Authors</h1>
        <p id="getStartedFeaturedAuthorsPTag">
          Authors that are posted to our page have a chance of being featured on
          our main page carousel
        </p>
      </div>
      <div id="carouselWrapper">
        <div id="carouselExampleCaptions" class="carousel slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img
                src={require("./../images/king.jpeg")}
                class="d-block w-100"
                alt="stephen_king_picture"
                width="100"
                height="400"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Stephen King</h5>
                <p>
                  Stephen E. King is an American author of horror, supernatural
                  fiction, suspense, crime, science-fiction, and fantasy novels.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("./../images/ken_follett2.jpeg")}
                class="d-block w-100"
                alt="ken_follet_picture"
                width="100"
                height="400"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>Ken Follet</h5>
                <p>
                  Kenneth M. Follett is a Welsh author of thrillers and
                  historical novels who has sold more than 160 million copies.
                </p>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src={require("./../images/jk_rowling.jpeg")}
                class="d-block w-100"
                alt="jk_rowling_picture"
                width="100"
                height="400"
              />
              <div class="carousel-caption d-none d-md-block">
                <h5>J.K. Rowling</h5>
                <p>
                  Ms. Rowling has a style of writing that paved a way into the
                  annals of literary history.
                </p>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div id="getStartedPage">
        <button id="getStartedIndex" class="btn btn-light">
          <Link to="/authors" id="getStartedBtnStyling">
            GET STARTED
          </Link>
        </button>
      </div>
    </div>
  );
};

export default GetStarted;
