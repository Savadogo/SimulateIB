export const definirAge=Age=>({
    type:'DEF_AGE',
    payload:Age
});
export const  etapeCourante=etape=>({
    type:'ETAPE_COURANTE',
    payload:etape
});
export const  choixPack=(packColor,pack)=>({
    type:'CHOIX_PACK',
    payload:[packColor,pack]
});
export const  definirRente=RenteAnnuelle=>({
    type:'DEF_RENTE',
    payload:RenteAnnuelle
});
export const  definirPeriodeRente=PeriodeRente=>({
    type:'DEF_PERIODE_RENTE',
    payload:PeriodeRente
});
export const  definirPeriodiciteRente=PeriodiciteRente=>({
    type:'DEF_PERIODICITE_RENTE',
    payload:PeriodiciteRente
});
export const  definirPeriodeCotisation=PeriodeCotisation=>({
    type:'DEF_PERIODE_COTISATION',
    payload:PeriodeCotisation
});
export const  definirPeriodiciteCotisation=PeriodiciteCotisation=>({
    type:'DEF_PERIODICITE_COTISATION',
    payload:PeriodiciteCotisation
});
export const  definirMajoration=Majoration=>({
    type:'DEF_MAJORATION',
    payload:Majoration
});

export const  CalculPrime=(Majoration)=>({
    type:'CALCUL_PRIME',
    payload:Majoration
});