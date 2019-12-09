import React from 'react';
import {connect} from 'react-redux';
import {definirRente} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Input,
    Row,
    Col
  } from "reactstrap";
  class RenteAnnuelle extends React.Component{
    gererRenteAnnuelle=e=>{
      if (e.target.value>15000000){e.target.value=15000000}
      if (e.target.value<600000){e.target.value=600000}
     this.props.definirRente(e.target.value)
    }
    render(){
        return(
            <div>
              <div className="px-4">
                <div className="mt-2 py-5 border-top text-center">
                <Row className="justify-content-center">
                <Col lg="6" >
                <Card className="card-lift--hover shadow border-8 " id="Premium" color="neutral">
                <CardBody className="py-2">
                <h6 className="text-info mt-auto justify-content-center">
               Rente Annuelle
              </h6>
              <Input
              className="form-control mt-4 mb-4"
              placeholder="Indiquer la rente annuelle desiré"
              type="number" 
              name="capital"
              id="capital"
              step="100000" 
              pattern="\d+"
              min="600000" 
              max="15000000"
              onChange={this.gererRenteAnnuelle}
              value={this.props.RenteAnnuelle }
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
    RenteAnnuelle:state.underwriting.RenteAnnuelle,
  })
  const mapDispatchToProps=dispatch=>({
    definirRente:RenteAnnuelle=>dispatch(definirRente(RenteAnnuelle))
  })
export default connect(mapStateToPtops,mapDispatchToProps)( RenteAnnuelle);