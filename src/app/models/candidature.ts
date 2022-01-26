import { Projet } from "./projet";

export class Candidature {
    idCandidature!:number;
    statut!:string;
    lettreMotivation!:string;
    username!:string;
    projet!:Array<{idProjet:number}>;
}
