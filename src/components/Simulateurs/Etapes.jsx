import React from 'react';
import ChoixPack  from './ChoixPack';
import AgeTuteur from './AgeTuteur';
import ResultatFinal from './ResultFinal';
import RenteAnnuelle from './RenteAnnuelle';
import PeriodeRente from './PeriodeRente';
import PeriodeCotisation from './PeriodeCotisation';
import PeriodiciteCotisation from './PeriodiciteCotisation';
import PeriodiciteRente from './PeriodiciteRente';
import MajorationRente from './MajorationRente';

export const Etapes=[
<ChoixPack/>,
    <AgeTuteur/>,
    <RenteAnnuelle/>,
    <PeriodeRente/>,
    <PeriodiciteRente/>,
    <PeriodeCotisation/>,
    <PeriodiciteCotisation/>,
    <MajorationRente/>,
    <ResultatFinal/>
]
export const Noms=[
    "Choix pack",
    "Âge du tuteur",
    "Rente annuelle",
    "Période rente",
    "Périodicité rente",
    "Période cotisation",
    "Périodicité cotisation",
    "Majoration Rente",
    "Votre resultat"
]