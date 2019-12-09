import React from 'react';
import {connect} from 'react-redux';
import {definirMajoration} from '../../redux/Underwriting/underwriting.actions';
import {
    Card,
    CardBody,
    Row,
    Col
  } from "reactstrap";
  class Majoration extends React.Component{
    gererMajoration=(e)=>{
      this.props.definirMajoration(e.target.value)
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
                Majoration rente en cas de décès
              </h6>
              <select name="periodeCotisation" id="periodeCotisation"  className="form-control  mt-4 mb-4"  onChange={this.gererMajoration} value={this.props.Majoration}>
              <option id="firstQ" name="firstQ"  >
              0%
              </option>
              <option id="secondQ" name="secondQ"  >
              25%
              </option>
              <option id="thirthQ" name="thirthQ"  >
                50%
              </option>
              <option id="fourthQ" name="fourthQ" >
              75%
            </option>
            <option id="sixthQ" name="sixthQ" >
            100%
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
    Majoration:state.underwriting.Majoration,
  })
  const mapDispatchToProps=dispatch=>({
    definirMajoration:Majoration=>dispatch(definirMajoration(Majoration))
  })
export default connect(mapStateToPtops,mapDispatchToProps)(Majoration);