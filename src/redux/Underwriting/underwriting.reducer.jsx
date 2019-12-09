import Annuel from './annuel';
import Semestriel from './semestriel';
import Trimestriel from './trimestriel';
import Mensuel from './mensuel';
import pack from './pack';

const INITIAL_STATE={
    Age:null,
    RenteAnnuelle:null,
    PeriodeRente:null,
    PeriodiciteRente:null,
    PeriodeCotisation:null,
    PeriodiciteCotisation:null,
    Majoration:null,
    etape:0,
    Prime:null,
    Pack:pack,
    PackChoisi:null,
    packColor:{
        Premium:"neutral",
         Serenite:"neutral",
         Essentiel:"neutral",
         Basic:"neutral"
       },
       TableMortalite:{
           Annuelle:Annuel,
           Semestrielle:Semestriel,
           Trimestrielle:Trimestriel,
           Mensuelle:Mensuel
       }
}

const underwritingReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'DEF_AGE':
            return {
                ...state,
                Age:action.payload
            }
            case 'ETAPE_COURANTE':
                    return {
                        ...state,
                        etape:action.payload
                    }
                    case 'CHOIX_PACK':
                        return {
                            ...state,
                            packColor:action.payload[0],
                            PackChoisi:action.payload[1],
                        }
                        case 'DEF_RENTE':
                            return {
                                ...state,
                                RenteAnnuelle:action.payload
                            }
                            case 'DEF_PERIODE_RENTE':
                                return {
                                    ...state,
                                    PeriodeRente:action.payload
                                }
                                case 'DEF_PERIODICITE_RENTE':
                                    return {
                                        ...state,
                                        PeriodiciteRente:action.payload
                                    }
                                    case 'DEF_PERIODE_COTISATION':
                                        return {
                                            ...state,
                                            PeriodeCotisation:action.payload
                                        }
                                        case 'DEF_PERIODICITE_COTISATION':
                                            return {
                                                ...state,
                                                PeriodiciteCotisation:action.payload
                                            }
                                            case 'DEF_MAJORATION':
                                                return {
                                                    ...state,
                                                    Majoration:action.payload
                                                }
        default:
            return state;
    }
}

export default underwritingReducer;