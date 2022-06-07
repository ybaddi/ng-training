import { Component, OnInit } from '@angular/core';
import { Personne } from '../interfaces/personne';

@Component({
  selector: 'app-formulaire-personne',
  templateUrl: './formulaire-personne.component.html',
  styleUrls: ['./formulaire-personne.component.css']
})
export class FormulairePersonneComponent implements OnInit {

  personnes:Personne[] = [];
  personne:Personne = {};
  constructor() { }

  ngOnInit(): void {
  }

  ajouterPersonne(){
    this.personnes.push({ ...this.personne });
this.personne.nom = '';
this.personne.prenom = '';
console.log(this.personnes);
  }

}
