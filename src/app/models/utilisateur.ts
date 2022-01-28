import { Role } from "./role";

export class Utilisateur {
    idUtilisateur!:number;
    nomUtilisateur!:string
    prenomUtilisateur!:string;
    username!:string;
    password!:string;
    adresseMail!:string;
    telephone!:string;
    cv!:File;
    note!:string;
    nomEntreprise!:string;
    roles:Role[];
}
