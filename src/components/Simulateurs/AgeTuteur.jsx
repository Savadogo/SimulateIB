import React from 'react';
import {connect} from 'react-redux';
import {definirAge} from '../../redux/Underwriting/underwriting.actions';

import {
    Card,
    CardBody,
    Input,
    Row,
    Col,
  } from "reactstrap";
  class  AgeTuteur extends React.Component{
   gererAge=(e)=>{
     if (e.target.value>65){e.target.value=65}
     if (e.target.value<18){e.target.value=18}
    this.props.definirAge(e.target.value)
    }
    render() {return (
              <div className="px-4">
                <div className="mt-2 py-5 border-top text-center">
                <Row className="justify-content-center">
                <Col lg="6">   
                <Card className="card-lift--hover shadow border-8" id="Premium" color="neutral">
                <CardBody className="py-2">
                <h6 className="text-info mt-auto justify-content-center">
               Age du Tuteur
              </h6>
              <Input
              type="Number"
              className="form-control  mt-4 mb-4"
              placeholder="Indiquer l'âge du tuteur"
              name="age"
              id="age"
              step="1"
              min="18"
              ùax="65"
            value={this.props.Age}
            onChange={this.gererAge}
            />
                </CardBody>
                </Card>
                </Col>
                </Row>
                </div>
                </div>
            )}}
            const mapStateToPtops=state=>({
              Age:state.underwriting.Age,
            })
            const mapDispatchToProps=dispatch=>({
              definirAge:Age=>dispatch(definirAge(Age))
            })
  export default connect(mapStateToPtops,mapDispatchToProps)(AgeTuteur);