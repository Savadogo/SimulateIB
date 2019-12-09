import React from "react";
import { Link } from "react-router-dom";
import {
    Button,
    Modal
  } from "reactstrap";

  class PresentationProduit extends React.Component {
    state = {};
    toggleModal = state => {
        this.setState({
          [state]: !this.state[state]
        });
      };
      renderSwitch(param) {
        switch(param) {
          case 'premium':
            return (
                <p className="description mt-3 text-justify">
                Sécuriser un capital simple pour les études supérieures de vos enfants, définissez selon le projet la durée des cotisations et le montant de la prime et la périodicité. 
                Ainsi que la prévoyance du capital qui servira à régler les loyers de son logement pendant une année ou pendant toutes la durée des études. <br/> <br/>
                Offrez-lui la possibilité de profiter de notre service de conciergerie pour lui trouver son logement dans le pays d’études désiré, ainsi que de lui assurer un service d’accueil
                 à l’aéroport à l’arrivée, jusqu’à sa résidence d’accueil. Ce pack vous offre également la possibilité de commencer à lui prévoir sa première épargne d’étudiant pour démarrer 
                 sa nouvelle vie. Ce Pack de services le plus complet de notre gamme vous accompagne de A à Z dans toutes les démarches administratives (Visa, logement, démarches administratives
                   à l’arrivée dans le pays d’accueil…). <br/>
                   Pendant toute la première année d’études vous bénéficiez d’un service de suivi personnalisé de vos enfants dans le pays d’accueil.                      
                </p>
            );
            case 'serenite':
                return (
                    <p className="description mt-3  text-justify">
                    Sécuriser un capital simple pour les études supérieures de vos enfants, définissez selon le projet la durée des cotisations et le montant de la prime et la périodicité.
                     Ainsi que la prévoyance du capital qui servira à régler les loyers de son logement pendant une année ou pendant toutes la durée des études. <br/> <br/>
                    Offrez-lui la possibilité de profiter de notre service de conciergerie pour lui trouver son logement dans le pays d’études désiré, ainsi que de lui assurer un service
                     d’accueil à l’aéroport à l’arrivée, jusqu’à sa résidence d’accueil. Ce pack vous offre également la possibilité de commencer à lui prévoir sa première épargne
                      d’étudiant pour démarrer sa nouvelle vie. 
                    </p>
                );
                case 'essentiel':
                    return (
                        <p className="description mt-3  text-justify">
                        Sécuriser un capital simple pour les études supérieures de vos enfants, définissez selon le projet la durée des cotisations et le montant de la prime et la périodicité. <br/> <br/>
                        Offrez-lui la possibilité de profiter de notre service de conciergerie pour lui assurer un service d’accueil à l’aéroport à l’arrivée, jusqu’à sa résidence d’accueil. 
                        Ce pack vous offre également la possibilité de commencer à lui prévoir sa première épargne d’étudiant pour démarrer sa nouvelle vie.                  
                        </p>
                    );
             default:
            return (
                <p className="description mt-3  text-justify">
                Sécuriser un capital simple pour les études supérieures de vos enfants, définissez selon le projet la durée des cotisations et le montant de la prime et la périodicité. 
                </p>
            );
        }
      }
      render() {
          const {color,titre,pack}=this.props
        return (
            <div>
            <Button
            className="mt-4"
            color={color}
            onClick={() => this.toggleModal("defaultModal")}
          >
            En savoir plus
          </Button>
            <Modal
            className="modal-dialog-centered"
            isOpen={this.state.defaultModal}
            toggle={() => this.toggleModal("defaultModal")}
          >
            <div className="modal-header">
              <h6 className={`modal-title text-uppercase text-${color}`} id="modal-title-default">
              {titre}
              </h6>
            </div>
            <div className="modal-body ">
            {this.renderSwitch(pack)}
            </div>
            <div className="modal-footer">
            <Button color={color} type="button" to="/simulation"  tag={Link} target="_blank">
            <span className="btn-inner--icon"><i className="ni ni-money-coins"></i></span>
            <span>  Simuler vos cotisations</span>
          </Button>
              <Button
                className="ml-auto"
                color="danger"
                data-dismiss="modal"
                onClick={() => this.toggleModal("defaultModal")}
              >
                Fermer
              </Button>
            </div>
          </Modal>
          </div>
        )}
  }

  export default PresentationProduit;
