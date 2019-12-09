import React from 'react';
import { Card,CardBody, Row, Col } from "reactstrap";
import {connect} from 'react-redux';
import {choixPack} from '../../redux/Underwriting/underwriting.actions';

class ChoixPack extends React.Component{
handlePackChoice= (e)=>{
    const id=e.currentTarget.id
    const packColor= {
      Premium:"neutral",
       Serenite:"neutral",
       Essentiel:"neutral",
       Basic:"neutral"
     }
    packColor[id]="info"
    this.props.choixPack(packColor,id)
    }
render(){
    return(
        <div>
          <div className="px-4">
            <div className="mt-2 py-5 border-top text-center">
            <Row className="justify-content-center">
            <Col lg="8">
              <Row className="row-grid">
              <Col lg="6" className="mb-2">
              <Card className="card-lift--hover shadow border-16" id="Premium" color={this.props.packColor["Premium"]} onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className={`text-${this.props.packColor["Premium"]==="neutral"?"info":"neutral"}  text-uppercase`}>
              Pack premium
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card-lift--hover shadow border-16" id="Serenite" color={this.props.packColor["Serenite"]}  onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className={`text-${this.props.packColor["Serenite"]==="neutral"?"info":"neutral"}  text-uppercase`}>
              Pack Serenité
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card-lift--hover shadow border-16" id="Essentiel" color={this.props.packColor["Essentiel"]}  onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className={`text-${this.props.packColor["Essentiel"]==="neutral"?"info":"neutral"}  text-uppercase`}>
              Pack essentiel
            </h6>
              </CardBody>
              </Card>
              </Col>
              <Col lg="6" className="mb-2">
              <Card className="card-lift--hover shadow border-16" id="Basic" color={this.props.packColor["Basic"]}  onClick={this.handlePackChoice}>
              <CardBody className="py-5">
              <h6 className={`text-${this.props.packColor["Basic"]==="neutral"?"info":"neutral"}  text-uppercase`}>
              Pack basic
            </h6>
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
}
}
const mapStateToProps=state=>({
  packColor:state.underwriting.packColor
})
const mapDispatchToProps=dispatch=>({
  choixPack:(packColor,pack)=>dispatch(choixPack(packColor,pack))
})
export default connect(mapStateToProps,mapDispatchToProps)(ChoixPack);