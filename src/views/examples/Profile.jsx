import React from "react";
import NavbarInvictus from '../../components/Navbars/NavbarInvictus';
import {Etapes,Noms} from '../../components/Simulateurs/Etapes';
import SimpleFooter from '../../components/Footers/SimpleFooter';
import {connect} from 'react-redux';
import {etapeCourante} from '../../redux/Underwriting/underwriting.actions';

// reactstrap components
import { Button,
   Card,
   Container, 
   Row, 
  } from "reactstrap";

class Profile extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  avancer=()=>{
    const {etape}=this.props;
    this.props.etapeCourante(etape+1)
  }

  reculer=state=>{
    const {etape}=this.props;
    this.props.etapeCourante(etape-1)
  }

  PlacerSchema=(indice)=>{
   return( <Row className="justify-content-center">
 {Noms.map((Nom,index)=>
      <Button key={Nom} value={index} className="mt-1 mb-1" color={index===indice?"success":"neutral"} onClick={this.selectionner}>
      {index===indice?Nom:index+1}
    </Button>)}
  </Row>)
  }
selectionner=e=>{
  const {etape}=this.props;
  if (e.target.value!==etape){
    this.props.etapeCourante(parseInt(e.target.value))
    this.PlacerSchema(parseInt(e.target.value))
  }
}
  render() {
    return (
      <>
      <NavbarInvictus/>
        <main className="profile-page relative" ref="main">
          <section className="section-profile-cover section-shaped my-0 mt-0" style={{  height: '370px'}}>
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className= "section section-lg pt-lg-0 mb--10">
            <Container  style={{heigth:"1000px"}}>
              <Card className="card-profile shadow mt--0" >
              {
                this.PlacerSchema(this.props.etape)
              }
              {
                Etapes[this.props.etape]
              }
              <Row className="justify-content-center">
              <div className="mt-2 py-5 border-top text-center">
           { this.props.etape>0 &&
              <Button color= "default" type="button" onClick={this.reculer} style={{width:"220px"}}>
              <span className="btn-inner--icon"><i className="ni ni-bold-left"></i></span>
              <span>    Precedent</span>
            </Button>
            }
            { this.props.etape<Etapes.length-1 &&
          <Button lg="6" color= "default" type="button" onClick={this.avancer} style={{width:"220px"}}>
          <span>  Suivant    </span>
          <span className="btn-inner--icon" ><i className="ni ni-bold-right"></i></span>
        </Button>
            }
              </div>
            </Row>
              </Card>
            </Container>
          </section>
        </main>
        <SimpleFooter/>
      </>
   
    );
  }
}
const mapStateToProps=state=>({
  etape:state.underwriting.etape
})
const mapDispatchToProps=dispatch=>({
  etapeCourante:etape=>dispatch(etapeCourante(etape))
})

export default connect(mapStateToProps,mapDispatchToProps)(Profile);
