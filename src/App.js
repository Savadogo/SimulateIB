import Carousel from './views/IndexSections/Carousel';
import React from "react";
import PresentationProduit from './components/PresentationProduit/PresentationProduit';
import SimpleFooter from './components/Footers/SimpleFooter';

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";
import NavbarInvictus from './components/Navbars/NavbarInvictus';


class App extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
      <NavbarInvictus/>
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-200">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Un produit sur-mesure conçu pour vous.
                        <span>Invictus Butlers est là pour vous et pense à vous!</span>
                      </h1>
                      <p className="lead text-white">
                      Fort d'une experience de plus de 3 ans dans l'encadrement et/ou l'intégration des étudiants étrangers en France, Invictus 
                      Butlers comprend et partage les craintes des parents. Dans le but de garantir une tranquilité d'esprit aux parents
                      , nous avons conçu un produit <strong>"Etude Garantie" </strong>qui se decline en quatre packs.
                      </p>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                  <Col lg="6" className="mb-2">
                  <Card className="card-lift--hover shadow border-16">
                    <CardBody className="py-5">
                      <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                        <i className="ni ni-istanbul" />
                      </div>
                      <h6 className="text-success text-uppercase">
                        Pack premium
                      </h6>
                      <div>
                      <Badge color="success" pill className="mr-1">
                      Capital etude sur mesure
                      </Badge>
                      <Badge color="success" pill className="mr-1">
                      Capital garantie en cas de décès tuteur
                    </Badge>
                    <Badge color="success" pill className="mr-1">
                    Majoration rente en cas de décès tuteur
                  </Badge>
                      <Badge color="success" pill className="mr-1">
                        Accueil & Hebergement
                      </Badge>
                      <Badge color="success" pill className="mr-1">
                      Bonus
                    </Badge>
                      <Badge color="success" pill className="mr-1">
                        Recherche Appartement
                      </Badge>
                      <Badge color="success" pill className="mr-1">
                      Capital Logement sur mesure
                    </Badge>
                    <Badge color="success" pill className="mr-1">
                    billet d'avion
                  </Badge>
                  <Badge color="success" pill className="mr-1">
                  Demarches visa
                </Badge>
                <Badge color="success" pill className="mr-1">
                Demarches administratives
              </Badge>
             </div>
             <PresentationProduit titre="Pack Premium" color="success" pack="premium"/>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" className="mb-2">
                <Card className="card-lift--hover shadow border-16">
                  <CardBody className="py-5">
                    <div className="icon icon-shape icon-shape-info rounded-circle mb-4">
                      <i className="ni ni-trophy" />
                    </div>
                    <h6 className="text-info text-uppercase">
                      Pack Serenité
                    </h6>
                    <div>
                    <Badge color="info" pill className="mr-1">
                    Capital etude sur mesure
                    </Badge>
                    <Badge color="info" pill className="mr-1">
                    Capital garantie en cas de décès tuteur
                  </Badge>
                  <Badge color="info" pill className="mr-1">
                  Majoration rente en cas de décès tuteur
                </Badge>
                    <Badge color="info" pill className="mr-1">
                      Accueil & Hebergement
                    </Badge>
                    <Badge color="info" pill className="mr-1">
                    Bonus
                  </Badge>
                    <Badge color="info" pill className="mr-1">
                      Recherche Appartement
                    </Badge>
                    <Badge color="info" pill className="mr-1">
                    Capital Logement sur mesure
                  </Badge>
                  <Badge color="info" pill className="mr-1">
                  billet d'avion
                </Badge>
            <br/>
                  </div>
                  <PresentationProduit titre="Pack Sérénité" color="info" pack="serenite"/>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card-lift--hover shadow border-16">
                <CardBody className="py-5">
                  <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                    <i className="ni ni-umbrella-13" />
                  </div>
                  <h6 className="text-warning text-uppercase">
                  Pack Essentiel
                </h6>
                  <div>
                    <Badge color="warning" pill className="mr-1">
                    Capital etude sur mesure
                    </Badge>
                    <Badge color="warning" pill className="mr-1">
                    Capital garantie en cas de décès tuteur
                  </Badge>                  
                   <Badge color="warning" pill className="mr-1">
                   Majoration rente en cas de décès tuteur
                </Badge>
                    <Badge color="warning" pill className="mr-1">
                      Accueil & Hebergement
                    </Badge>
                    <Badge color="warning" pill className="mr-1">
                    Bonus
                  </Badge>
                    <Badge color="warning" pill className="mr-1">
                      Recherche Appartement
                    </Badge>
                  </div>
                  <PresentationProduit titre="Pack Essentiel" color="warning" pack="essentiel"/>
                </CardBody>
              </Card>
            </Col>
                    <Col lg="6"  className="mb-2">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-danger rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-danger text-uppercase">
                          Pack Basic
                        </h6>
                          <div>
                            <Badge color="danger" pill className="mr-1">
                              Capital etude sur mesure
                            </Badge>
                            <Badge color="danger" pill className="mr-1">
                            Capital garantie en cas de décès tuteur
                          </Badge>
                          <Badge color="danger" pill className="mr-1">
                          Majoration rente en cas de décès tuteur
                        </Badge>
                        <br/>
                        <br/>
                          </div>
                          <PresentationProduit titre="Pack Basic" color="danger" pack="basic"/>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <Carousel/>
        </main>
        <SimpleFooter/>
      </>
    );
  }
}

export default App;
