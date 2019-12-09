import React from 'react';
import {connect} from 'react-redux';
import {vapAssure,vapAssureur} from '../../redux/Underwriting/underwriting.utils';
import {
    Badge,
    Card,
    CardBody,
    CardTitle,
    CardText,
    Row,
    Col
  } from "reactstrap";
  class ResultatFinal extends React.Component{
   
    render(){
     const VapAssure=vapAssure(this.props.Age,this.props.PeriodeCotisation,this.props.PeriodiciteCotisation,this.props.TableMortalite[this.props.PeriodiciteCotisation])
      const VapAssureur=vapAssureur(this.props.Age,this.props.Pack,this.props.PackChoisi,this.props.RenteAnnuelle,this.props.PeriodeRente,this.props.PeriodeCotisation,this.props.Majoration,this.props.PeriodiciteRente,this.props.TableMortalite[this.props.PeriodiciteCotisation],this.props.PeriodiciteCotisation)
      return(
          <div>
            <div className="px-4">
            <div className="mt-2 py-5 border-top text-center">
            <Row className="justify-content-center">
            <Col lg="8">
              <Row className="row-grid">
              <Col lg="6" className="mb-2">
            <Card >
            <CardBody>
              <CardTitle tag="h4">Votre Pack : {this.props.PackChoisi}</CardTitle>
              <Row className="row-grid">
              <Col lg="8">
              <CardText>
              Rente Annuelle:{ Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(this.props.RenteAnnuelle)}
              </CardText>
          </Col>
          </Row>
            </CardBody>
          </Card>
          </Col>
          <Col lg="6" className="mb-2">
          <Card>
          <CardBody>
            <CardTitle tag="h4">Vos Informations</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
          </CardBody>
        </Card>
        </Col>
      <Col lg="12" className="mb-2">
      <Card>
      <CardBody>
        <CardTitle tag="h4">Votre Prime {this.props.PeriodiciteCotisation}</CardTitle>
        <CardText>
        {Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'XOF' }).format(VapAssureur/VapAssure[1])}
        </CardText>
      </CardBody>
    </Card>
    </Col>
          </Row>
          </Col>
          </Row>
          </div>
            </div>
            </div>
            
        )
    }}

    const mapStateToPtops=state=>({
      Age:state.underwriting.Age,
      RenteAnnuelle:state.underwriting.RenteAnnuelle,
      PeriodeRente:state.underwriting.PeriodeRente,
      PeriodiciteRente:state.underwriting.PeriodiciteRente,
      PeriodeCotisation:state.underwriting.PeriodeCotisation,
      PeriodiciteCotisation:state.underwriting.PeriodiciteCotisation,
      Majoration:state.underwriting.Majoration,
      Pack:state.underwriting.Pack,
      PackChoisi:state.underwriting.PackChoisi,
      TableMortalite:state.underwriting.TableMortalite
    })
  export default connect(mapStateToPtops,null)(ResultatFinal);