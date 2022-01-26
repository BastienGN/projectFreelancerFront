import { Projet } from "./projet";

export class Candidature {
    idCandidature!:number;
    statut!:string;
    lettreMotivation!:string;
    user!:string;
    projet!:Array<{idProjet:number}>;
}
