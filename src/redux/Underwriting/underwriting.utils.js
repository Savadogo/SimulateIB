import paramAdmin from './paramAdmin';
const freqPeriodicite=(periodicite)=>{
switch(periodicite){
case "Semestrielle":
    return 2
    case "Trimestrielle":
        return 4
        case "Mensuelle":
            return 12
            default :
            return 1
}
}

const trouverIndice=(AgeIni,AgeCourant,PeriodeCourant,Periodicite)=>{
return Periodicite*(AgeCourant-AgeIni)+PeriodeCourant-1
}

export const vapAssure=(Age,PeriodeCotisation,periodiciteCotisation,tableMortalite)=>{
const interetTechnique=paramAdmin.tauxTechnique
const  freq=freqPeriodicite(periodiciteCotisation)
const survieIni=tableMortalite.filter(elemt=>parseInt(elemt.Age)===parseInt(Age) && elemt.Periode===1)[0].Lx
const tableMortaliteEffectif=tableMortalite.filter(elemt=>elemt.Age>=parseInt(Age) && elemt.Age<parseInt(Age) +parseInt(PeriodeCotisation))
const iEffectif=Math.pow(1+interetTechnique,1/freq)-1
const vEffectif=1/(1+iEffectif)
const vapEpargne=tableMortaliteEffectif.reduce(
    (accumulatedQuantity,item)=>
    accumulatedQuantity+Math.pow(vEffectif,trouverIndice(Age,item.Age,item.Periode,freq)),
    0
)
const vapEpargneDeces=tableMortaliteEffectif.reduce(
    (accumulatedQuantity,item)=>
    accumulatedQuantity+(item.Lx/survieIni)*Math.pow(vEffectif,trouverIndice(Age,item.Age,item.Periode,freq)),
    0
)
return [vapEpargne,vapEpargneDeces];
}

export const vapAssureur=(Age,Pack,PackChoisi,RenteAnnuelle,PeriodePension,PeriodeCotisation,Majoration,PeriodicitePension,tableMortalite,PeriodiciteCotisation)=>{
    const {tauxTechnique,
        fraisReglement,
        fraisGestionDeces,
        fraisGestionSurvie,
        fraisTransfert,
        fraisAcquisition}=paramAdmin
        const packItems=Pack[PackChoisi]
        const majorationEffectif=parseFloat(Majoration.replace("%",""))/100
        const kOptions=packItems.Logement+packItems.Avion+packItems.Dvisa+packItems.Dadmin+packItems.Daccueil+packItems.Drecherche+packItems.Bonus
        const periodicite=freqPeriodicite(PeriodicitePension)
        const renteEffectif=parseFloat(RenteAnnuelle)/periodicite
        const tauxTechniqueEffectif=Math.pow(1+tauxTechnique,1/periodicite)-1
        const vEffectif=1/(1+tauxTechniqueEffectif)
        const survieIni=tableMortalite.filter(elemt=>parseInt(elemt.Age)===parseInt(Age) && elemt.Periode===1)[0].Lx
        const survieFin=tableMortalite.filter(elemt=>parseInt(elemt.Age)===parseInt(Age)+parseInt(PeriodeCotisation)-1 && elemt.Periode===freqPeriodicite(PeriodiciteCotisation))[0].Lx
        const iSurvie=survieFin/survieIni
        return ((1-iSurvie)*(1+fraisGestionDeces)*(kOptions+(1+majorationEffectif)*(1+fraisReglement+fraisTransfert)*renteEffectif*(1-Math.pow(vEffectif,parseInt(PeriodePension)*periodicite))/(1-vEffectif))*Math.pow(1/(1+tauxTechnique),parseInt(PeriodeCotisation))+
        (iSurvie)*(1+fraisGestionSurvie)*(kOptions+(1+fraisReglement+fraisTransfert)*renteEffectif*(1-Math.pow(vEffectif,parseInt(PeriodePension)*periodicite))/(1-vEffectif))*Math.pow(1/(1+tauxTechnique),parseInt(PeriodeCotisation)))/(1-fraisAcquisition)
}