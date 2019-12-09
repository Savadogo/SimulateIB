import React from 'react';
import {connect} from 'react-redux';
import {definirPeriodiciteRente} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Row,
    Col
  } from "reactstrap";
  class PeriodiciteRente extends React.Component{
    gererPeriodiciteRente=(e)=>{
     this.props.definirPeriodiciteRente(e.target.value)
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
               Périodicité de paiement de la rente
              </h6>
              <select name="periodeRente" id="periodeRente"  className="form-control  mt-4 mb-4" onChange={this.gererPeriodiciteRente} value={this.props.PeriodiciteRente}>
              <option id="annuelRente" name="annuelRente"  >
              Annuelle
              </option>
              <option id="semestrielRente" name="semestrielRente"  >
              Semestrielle
              </option>
              <option id="trimestrielRente" name="trimestrielRente"  >
                Trimestrielle
              </option>
              <option id="mensuelRente" name="mensuelRente" >
              Mensuelle
            </option>
            </select>
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
    PeriodiciteRente:state.underwriting.PeriodiciteRente,
  })
  const mapDispatchToProps=dispatch=>({
    definirPeriodiciteRente:PeriodiciteRente=>dispatch(definirPeriodiciteRente(PeriodiciteRente))
  })
export default connect(mapStateToPtops,mapDispatchToProps)(PeriodiciteRente);