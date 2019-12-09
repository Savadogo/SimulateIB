import React from 'react';
import {connect} from 'react-redux';
import {definirPeriodeRente} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Input,
    Row,
    Col
  } from "reactstrap";
  class PeriodeRente extends React.Component{
    gererPeriodeRente=(e)=>{
      if (e.target.value>5){e.target.value=5}
      if (e.target.value<1){e.target.value=1}
     this.props.definirPeriodeRente(e.target.value)
    }
    render(){
        return(
            <div>
              <div className="px-4">
                <div className="mt-2 py-5 border-top text-center">
                <Row className="justify-content-center">

                <Col lg="6" >
                <Card className="card-lift--hover shadow border-8" id="Premium" color="neutral">
                <CardBody className="py-2">
                <h6 className="text-info mt-auto justify-content-center">
               Nombre d'années de paiement de la rente
              </h6>
              <Input
              className="form-control  mt-4 mb-4"
              placeholder="Indiquer le nombre d'années de paiement de la rente"
              type="number" 
              name="nrente"
              id="nrente"
              step="1" 
              pattern="\d+"
              min="1" 
              max="5"
              value={this.props.PeriodeRente}
              onChange={this.gererPeriodeRente}
              />
                </CardBody>
                </Card>
                </Col>
                </Row>
                </div>
                </div>
            </div>
            )}
  }
  const mapStateToPtops=state=>({
    PeriodeRente:state.underwriting.PeriodeRente,
  })
  const mapDispatchToProps=dispatch=>({
    definirPeriodeRente:PeriodeRente=>dispatch(definirPeriodeRente(PeriodeRente))
  })
export default connect(mapStateToPtops,mapDispatchToProps)(PeriodeRente);