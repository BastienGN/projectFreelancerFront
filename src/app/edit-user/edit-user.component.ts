import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../models/utilisateur';
import { UtilisateurService } from '../services/utilisateur.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  editForm: FormGroup;
  utilisateur:Utilisateur = new Utilisateur();

  constructor(private router:Router,private utilisateurService:UtilisateurService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("editUserID");
    if(!userId){
      alert("Invalid Action...");
      this.router.navigate(['base/utiliateur']);
      return;
    }
    this.editForm = this.formBuilder.group({
      idUtilisateur:[],
      nomUtilisateur:['',Validators.required],
      prenomUtilisateur:['',Validators.required]
    })
    this.utilisateurService.getUtilisateur(+userId).subscribe(data =>{this.editForm.setValue(data)});
  }
updateUtilisateur(){
  var varJson = JSON.stringify(this.editForm.value);
  this.utilisateurService.updateUtilisateur(varJson).subscribe(()=>{this.router.navigate(['/base/forms'])});
}
}
