import React from 'react';
import {connect} from 'react-redux';
import {definirPeriodeCotisation} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Input,
    Row,
    Col
  } from "reactstrap";
  class PeriodeCotisation extends React.Component{
    gererPeriodeCotisation=(e)=>{
      if (e.target.value>15){e.target.value=15}
      if (e.target.value<5){e.target.value=5}
     this.props.definirPeriodeCotisation(e.target.value)
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
               Nombre d'années de cotisations
              </h6>
              <Input
              className="form-control mt-4 mb-4"
              placeholder="Pendant combien d'années comptez vous économiser?"
              type="number" 
              name="ncotisation"
              id="ncotisation"
              step="1" 
              pattern="\d+"
              min="5" 
              max="15"
              value={this.props.PeriodeCotisation}
              onChange={this.gererPeriodeCotisation}
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
    PeriodeCotisation:state.underwriting.PeriodeCotisation,
  })
  const mapDispatchToProps=dispatch=>({
    definirPeriodeCotisation:PeriodeCotisation=>dispatch(definirPeriodeCotisation(PeriodeCotisation))
  })
export default connect(mapStateToPtops,mapDispatchToProps)(PeriodeCotisation);