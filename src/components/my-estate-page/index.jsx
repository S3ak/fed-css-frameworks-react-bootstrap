import "./styles.scss";
import "bootstrap";

function EstateHomePage() {
  return (
    <>
      <header className="hero-bg">
        <section role="ribbon" className="bg-primary text-white">
          <div className="container">
            <section className="row py-1 align-items-center">
              <div className="col-sm-6 bg-secondary">
                <p>Rezilla, 18 Gratton St. Brookyln</p>
              </div>
              <div className="col-sm-6 bg-danger d-flex text-end">
                <p className="me-4">+1 206-214-2298</p>
                <p className="">support@rezilla.com</p>
              </div>
            </section>
          </div>
        </section>

        <section role="nav">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Listings</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Services</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link">Blogs</a>
                  </li>
                </ul>

                <div className="navbar-brand d-flex mx-auto">
                  <p>Rezilla</p>
                </div>

                <div className="d-flex">
                  <button type="button" className="btn">
                    login/Register
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary rounded-pill"
                  >
                    Add Listing
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </section>

        <section role="hero">
          <div className="container">
            <div className="row">
              <p>Real Estate</p>
            </div>

            <div className="row" role="content-info">
              <div className="col-sm-6">
                <h1 className="h1">Find a perfect home you love..!</h1>
                <p className="lead">
                  Etiam eget elementum elit. Aenean dignissim dapibus
                  vestibulum. Integer a dolor eu sapien sodales vulputate ac in
                  purus.
                </p>

                <div id="carouselHero" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"
                    ></button>
                  </div>

                  <div className="carousel-inner rounded shadow">
                    <div className="carousel-item active">
                      <img
                        src="/Seak_ZA_hip_hop_futurism_illustrations_17fdd6df-da66-4753-b765-ae94a9da1990.png"
                        className="d-block w-100 h-50 img-fluid"
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Seak_ZA_hip_hop_futurism_illustrations_0449b692-0d05-4dd8-b817-37c7958a984c.png"
                        className="d-block w-100 h-50 "
                        alt="..."
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/Seak_ZA_mecha_bragi_the_Norse_god.jpg"
                        className="d-block w-100 h-50 "
                        alt="..."
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselHero"
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
                    data-bs-target="#carouselHero"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </section>
      </header>
      <main></main>
      <footer></footer>
    </>
  );
}

export default EstateHomePage;
