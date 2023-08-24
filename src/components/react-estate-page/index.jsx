import { Container, Row, Col } from "react-bootstrap";
import "./styles.scss";

function EstateHomePage() {
  return (
    <>
      <header className="hero-bg">
        <section role="ribbon" className="bg-primary text-white">
          <Container>
            <Row>
              <Col xs sm={6}>
                <p className="p-2">Rezilla, 18 Gratton St. Brookyln</p>
              </Col>

              <Col sm="auto">
                <p className="p-2 text-end">+1 206-214-2298</p>
              </Col>

              <Col>
                <p className="p-2 text-end">support@rezilla.com</p>
              </Col>
            </Row>
          </Container>
        </section>
      </header>
    </>
  );
}

export default EstateHomePage;
