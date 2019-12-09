import React from 'react';
import {connect} from 'react-redux';
import {definirPeriodiciteCotisation} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Row,
    Col
  } from "reactstrap";
  class PeriodiciteCotisation extends React.Component{
    gererPeriodiciteCotisation=(e)=>{
      this.props.definirPeriodiciteCotisation(e.target.value)
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
              Périodicité Cotisation
              </h6>
              <select name="periodeCotisation" id="periodeCotisation"  className="form-control  mt-4 mb-4"  onChange={this.gererPeriodiciteCotisation} value={this.props.PeriodiciteCotisation}>
              <option id="annuelCotisation" name="annuelCotisation"  >
              Annuelle
              </option>
              <option id="semestrielCotisation" name="semestrielCotisation"  >
              Semestrielle
              </option>
              <option id="trimestrielCotisation" name="trimestrielCotisation"  >
                Trimestrielle
              </option>
              <option id="mensuelCotisation" name="mensuelCotisation" >
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
    PeriodiciteCotisation:state.underwriting.PeriodiciteCotisation,
  })
  const mapDispatchToProps=dispatch=>({
    definirPeriodiciteCotisation:PeriodiciteCotisation=>dispatch(definirPeriodiciteCotisation(PeriodiciteCotisation))
  })
export default connect(mapStateToPtops,mapDispatchToProps)(PeriodiciteCotisation);